const mongoose = require("mongoose");

const propertySchema = mongoose.Schema(

{

title:{
type:String,
required:true,
trim:true
},

location:{
type:String,
required:true,
trim:true
},

price:{
type:Number,
required:true
},

description:{
type:String,
default:""
},

type:{
type:String,
enum:[
"house",
"apartment",
"commercial"
],
required:true
},

bedrooms:{
type:Number,
default:0
},

bathrooms:{
type:Number,
default:0
},

area:{
type:String,
default:""
},

yearBuilt:{
type:Number
},

parkingSpaces:{
type:Number,
default:0
},

furnished:{
type:Boolean,
default:false
},

amenities:[{
type:String
}],

images:[String],

featured:{
type:Boolean,
default:false
},

status:{
type:String,
enum:[
"Available",
"Reserved",
"Sold"
],
default:"Available"
}

},

{
timestamps:true
}

);

module.exports =
mongoose.model(
"Property",
propertySchema
);