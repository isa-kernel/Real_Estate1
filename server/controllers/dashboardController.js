const Property =
require("../models/Property");

const Land =
require("../models/Land");

const Inquiry =
require("../models/Inquiry");

const Booking =
require("../models/Booking");


const getDashboardStats =
async(req,res)=>{

try{

const properties =
await Property.countDocuments();

const lands =
await Land.countDocuments();

const inquiries =
await Inquiry.countDocuments();

const bookings =
await Booking.countDocuments();

res.json({

properties,
lands,
inquiries,
bookings

});

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

module.exports =
getDashboardStats;