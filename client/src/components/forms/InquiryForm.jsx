import { useState } from "react";

import API from "../../services/api";
import "../../styles/inquiryForm.css"

function InquiryForm({propertyId}){

const [form,setForm]
=
useState({

name:"",
phone:"",
email:"",
message:""

});

const handleChange = (e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const handleSubmit =
async(e)=>{

e.preventDefault();

try{

await API.post(
"/inquiries",
{
...form,
propertyId
}
);

alert(
"Inquiry Sent Successfully"
);

}
catch(error){

console.log(error);

}

};

return(

<form onSubmit={handleSubmit}>

<input

name="name"

placeholder="Name"

onChange={handleChange}

required

/>

<input

name="phone"

placeholder="Phone"

onChange={handleChange}

required

/>

<input

name="email"

placeholder="Email"

onChange={handleChange}

/>

<textarea

name="message"

placeholder="Send Inquiry"

onChange={handleChange}

/>

<button>

Send Inquiry

</button>

</form>

);

}

export default InquiryForm;