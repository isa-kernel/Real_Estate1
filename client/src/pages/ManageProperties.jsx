import {
useEffect,
useState
}
from "react";

import AdminLayout
from "../layouts/AdminLayout";

import {
  createProperty,
  updateProperty,
  deleteProperty,
  getProperties   
} from "../services/propertyService";


import Spinner
from "../components/common/Spinner";

import AddPropertyForm
from "../components/AddPropertyForm";

import "../styles/manageproperties.css";

function ManageProperties(){

const [properties,setProperties]
=
useState([]);

const [loading,setLoading]
=
useState(true);

const [editingProperty,
setEditingProperty]
=
useState(null);


const fetchProperties =
async()=>{

try{

const data =
await getProperties();
// console.log(data);
setProperties(data);

}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}

};

const handleDelete =
async(id)=>{

  const confirmDelete =
  window.confirm(
    "Delete Property?"
  );

  if(!confirmDelete){
    return;
  }

  try{

    const token =
    localStorage.getItem(
      "token"
    );

    await deleteProperty(
      id,
      token
    );

    fetchProperties();

  }
  catch(error){

    console.log(error);

    alert(
      "Delete Failed"
    );

  }

};

useEffect(()=>{

fetchProperties();

},[]);

if(loading){

return <Spinner/>;

}

return(

<AdminLayout>

<h1>
Manage Properties
</h1>

<AddPropertyForm

onSuccess={()=>{
fetchProperties();
setEditingProperty(null);
}}

editingProperty={
editingProperty
}

/>
<table className="properties-table">

<thead>

<tr>
  <th>Image</th>
  <th>Title</th>
  <th>Location</th>
  <th>Price</th>
  <th>Status</th>
  <th>Actions</th>
</tr>

</thead>

<tbody>
  {properties.map((property) => (
    <tr key={property._id}>
      <td data-label="Image">
        <img
          src={property.images?.[0] || "https://placehold.co/100x100"}
          alt={property.title}
        />
      </td>
      <td data-label="Title">{property.title}</td>
      <td data-label="Location">{property.location}</td>
      <td data-label="Price">KSh {property.price.toLocaleString()}</td>
      <td data-label="Status">{property.status}</td>
      <td data-label="Actions">
        <button onClick={() => setEditingProperty(property)}>Edit</button>
        <button onClick={() => handleDelete(property._id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>


</table>

</AdminLayout>

);

}

export default
ManageProperties;