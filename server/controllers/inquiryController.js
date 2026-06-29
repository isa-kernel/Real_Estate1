const Inquiry =
require("../models/Inquiry");


const getInquiries =
async(req,res)=>{

try{

const inquiries =
await Inquiry.find()
.sort({createdAt:-1});

res.json(inquiries);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};


const createInquiry =
async(req,res)=>{

try{

const inquiry =
await Inquiry.create(req.body);

res.status(201).json(inquiry);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};


module.exports = {

getInquiries,
createInquiry

};