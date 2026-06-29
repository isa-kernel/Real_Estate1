const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
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

    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    propertyId:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);

module.exports =
mongoose.model(
"Booking",
bookingSchema
);