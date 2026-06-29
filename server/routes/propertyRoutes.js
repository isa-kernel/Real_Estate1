const express = require("express");

const router = express.Router();
const Property = require("../models/Property");

const {
getProperties,
createProperty,
getProperty,
deleteProperty,
updateProperty,
getFeaturedProperties
}
=
require("../controllers/propertyController");

const protect =
require("../middleware/authMiddleware");


router.get("/featured", async (req, res) => {
  try {
    const featuredProperties = await Property.find({ featured: true });
    res.json(featuredProperties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/",getProperties);

router.post("/",protect,createProperty);

router.get("/:id",getProperty);

router.delete("/:id",deleteProperty);

router.put(
"/:id",
protect,
updateProperty
);

module.exports = router;