const mongoose = require("mongoose");

const landSchema = mongoose.Schema(

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

acreage:{
type:String,
default:""
},

description:{
type:String,
default:""
},

images:[
String
],

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
"Land",
landSchema
);