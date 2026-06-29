
import { useEffect, useState } from "react";
import Spinner from "../components/common/Spinner";
import ImageUpload from "./ImageUpload";
import { createProperty, updateProperty } from "../services/propertyService";
import "../styles/addPropertyForm.css";

function AddPropertyForm({ onSuccess, editingProperty }) {
  const amenitiesList = [
    "Parking","Swimming Pool","Garden","WiFi","CCTV","Gym",
    "Electric Fence","Backup Generator","Borehole",
    "Kids Play Area","Lift","Balcony",
  ];

  const initialFormState = {
    title:"",
    location:"",
    price:"",
    description:"",
    type:"house",
    bedrooms:0,
    bathrooms:0,
    area:"",
    yearBuilt:"",
    parkingSpaces:0,
    furnished:false,
    amenities:[],
    featured:false,
    status:"Draft",
  };

  const [form,setForm]=useState(initialFormState);
  const [images,setImages]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    if(editingProperty){
      setForm({...initialFormState,...editingProperty,
        amenities:editingProperty.amenities||[]});
      setImages(editingProperty.images||[]);
    }else{
      setForm(initialFormState);
      setImages([]);
    }
  },[editingProperty]);

  const handleChange=(e)=>{
    const {name,value,type,checked}=e.target;
    setForm(prev=>({...prev,[name]:type==="checkbox"?checked:value}));
  };

  const handleAmenityChange=(amenity)=>{
    setForm(prev=>({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a=>a!==amenity)
        : [...prev.amenities,amenity]
    }));
  };

  const handleImageUpload=(url)=>setImages(prev=>[...prev,url]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const token = localStorage.getItem("token");

    // Convert numeric fields properly
    const payload = {
      ...form,
      price: Number(form.price),
      bedrooms: Number(form.bedrooms),
      bathrooms: Number(form.bathrooms),
      yearBuilt: form.yearBuilt ? Number(form.yearBuilt) : undefined,
      parkingSpaces: Number(form.parkingSpaces),
      images,
    };

    // ✅ Fix status default: schema only allows Available, Reserved, Sold
    if (!["Available", "Reserved", "Sold"].includes(payload.status)) {
      payload.status = "Available";
    }

    if (editingProperty) {
      await updateProperty(editingProperty._id, payload, token);
      alert("Property updated successfully.");
    } else {
      await createProperty(payload, token);
      alert("Property created successfully.");
    }

    setForm(initialFormState);
    setImages([]);
    onSuccess && onSuccess();
  } catch (err) {
    console.error("Create property error:", err.response?.data || err.message);
    alert("Operation failed.");
  } finally {
    setLoading(false);
  }
};


  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <h1>{editingProperty?"Edit Property":"Add New Property"}</h1>

      <section className="form-section">
        <h2>Basic Information</h2>
        <div className="form-grid">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
          <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="commercial">Commercial</option>
          </select>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description"/>
        </div>
      </section>

      <section className="form-section">
        <h2>Property Details</h2>
        <div className="form-grid">
          <input type="number" name="bedrooms" value={form.bedrooms} onChange={handleChange} placeholder="Bedrooms"/>
          <input type="number" name="bathrooms" value={form.bathrooms} onChange={handleChange} placeholder="Bathrooms"/>
          <input name="area" value={form.area} onChange={handleChange} placeholder="Area (e.g. 2500 sqft)"/>
          <input type="number" name="yearBuilt" value={form.yearBuilt} onChange={handleChange} placeholder="Year Built"/>
          <input type="number" name="parkingSpaces" value={form.parkingSpaces} onChange={handleChange} placeholder="Parking Spaces"/>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Draft">Draft</option>
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        <div className="checkbox-row">
          <label><input type="checkbox" name="featured" checked={form.featured} onChange={handleChange}/> Featured</label>
          <label><input type="checkbox" name="furnished" checked={form.furnished} onChange={handleChange}/> Furnished</label>
        </div>
      </section>

      <section className="form-section">
        <h2>Amenities</h2>
        <div className="amenities-grid">
          {amenitiesList.map(a=>(
            <label key={a}>
              <input type="checkbox" checked={form.amenities.includes(a)} onChange={()=>handleAmenityChange(a)}/>
              {a}
            </label>
          ))}
        </div>
      </section>

      <section className="form-section">
        <h2>Property Images</h2>
        <ImageUpload onUpload={handleImageUpload}/>
        <div className="image-preview-grid">
          {images.map((img,i)=>(
            <img key={i} src={img} alt="Property"/>
          ))}
        </div>
      </section>

      <button className="save-btn" disabled={loading}>
        {loading?<Spinner/>:editingProperty?"Update Property":"Publish Property"}
      </button>
    </form>
  );
}
export default AddPropertyForm;
