const Land =
require("../models/Land");
const asyncHandler =
require("express-async-handler");


// GET ALL

const getLands =
asyncHandler(async(req,res)=>{

const lands =
await Land.find()
.sort({createdAt:-1});

res.json(lands);

});


// GET ONE

const getLand =
asyncHandler(async(req,res)=>{

const land =
await Land.findById(
req.params.id
);

if(!land){

res.status(404);

throw new Error(
"Land not found"
);

}

res.json(land);

});


// CREATE

const createLand =
asyncHandler(async(req,res)=>{

const land =
await Land.create(req.body);

res.status(201).json(land);

});


// UPDATE

const updateLand =
asyncHandler(async(req,res)=>{

const land =
await Land.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true
}

);

if(!land){

res.status(404);

throw new Error(
"Land not found"
);

}

res.json(land);

});


// DELETE

const deleteLand =
asyncHandler(async(req,res)=>{

const land =
await Land.findByIdAndDelete(
req.params.id
);

if(!land){

res.status(404);

throw new Error(
"Land not found"
);

}

res.json({

message:
"Land deleted successfully"

});

});


module.exports={

getLands,
getLand,
createLand,
updateLand,
deleteLand

};