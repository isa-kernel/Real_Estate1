const Property = require("../models/Property");


// GET ALL PROPERTIES

const getProperties = async (req, res) => {

  try {

    const {

      location,

      type,

      status,

      featured,

      minPrice,

      maxPrice,

      page = 1,

      limit = 9,

      sort = "latest"

    } = req.query;

    const filter = {};

    if (location) {

      filter.location = {

        $regex: location,

        $options: "i"

      };

    }

    if (type) {

      filter.type = type;

    }

    if (status) {

      filter.status = status;

    }

    if (featured === "true") {

      filter.featured = true;

    }

    if (minPrice || maxPrice) {

      filter.price = {};

      if (minPrice) {

        filter.price.$gte = Number(minPrice);

      }

      if (maxPrice) {

        filter.price.$lte = Number(maxPrice);

      }

    }

    let query = Property.find(filter);

    switch (sort) {

      case "priceAsc":

        query = query.sort({

          price: 1

        });

        break;

      case "priceDesc":

        query = query.sort({

          price: -1

        });

        break;

      case "oldest":

        query = query.sort({

          createdAt: 1

        });

        break;

      default:

        query = query.sort({

          createdAt: -1

        });

    }

    const skip =

      (Number(page) - 1) *

      Number(limit);

    query = query.skip(skip).limit(Number(limit));

    const properties = await query;

    const totalProperties =

      await Property.countDocuments(filter);

    res.json({

      properties,

      currentPage: Number(page),

      totalPages: Math.ceil(

        totalProperties /

        Number(limit)

      ),

      totalProperties

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};


// CREATE PROPERTY

const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    const saved = await property.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Create property error:", error);
    res.status(500).json({ message: error.message });
  }
};



// GET ONE PROPERTY

const getProperty = async(req,res)=>{

    try{

        const property =
        await Property.findById(
            req.params.id
        );

        res.json(property);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// DELETE PROPERTY

const deleteProperty = async(req,res)=>{

    try{

        await Property.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Property deleted"
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

const updateProperty = async(req,res)=>{

try{

const property =
await Property.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);

res.json(property);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

const getFeaturedProperties = async (req, res) => {

  try {

    const properties = await Property.find({

      featured: true,

      status: "Available"

    })
    .sort({ createdAt: -1 })
    .limit(6);

    res.json(properties);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};


module.exports = {

getProperties,
getProperty,
createProperty,
updateProperty,
deleteProperty,
getFeaturedProperties
};