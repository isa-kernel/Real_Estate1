const mongoose =
require("mongoose");

const inquirySchema =
mongoose.Schema(

{

name:{
type:String,
required:true
},

phone:{
type:String,
required:true
},

email:{
type:String
},

message:{
type:String
},

propertyId:{
type:String
}

},

{
timestamps:true
}

);

module.exports =
mongoose.model(
"Inquiry",
inquirySchema
);