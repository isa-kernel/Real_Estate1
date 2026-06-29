import {
useState
}
from "react";

import Spinner
from "../components/common/Spinner";

import {
uploadImage
}
from "../services/uploadService";

function ImageUpload({
onUpload
}){

const [loading,setLoading]
=
useState(false);

const [preview,setPreview]
=
useState("");

const handleUpload =
async(e)=>{

const file =
e.target.files[0];

if(!file) return;

setPreview(
URL.createObjectURL(file)
);

setLoading(true);

try{

const token =
localStorage.getItem(
"token"
);

const data =
await uploadImage(
file,
token
);

onUpload(
data.imageUrl
);

}
catch(error){

console.log(error);

alert(
"Upload Failed"
);

}
finally{

setLoading(false);

}

};

return(

<div>

<input

type="file"

accept="image/*"

onChange={
handleUpload
}

/>

{
loading &&
<Spinner/>
}

{
preview &&

<img

src={preview}

alt="preview"

style={{
width:"200px",
marginTop:"10px"
}}

/>

}

</div>

);

}

export default ImageUpload;