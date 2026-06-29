const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const {

getLands,
getLand,
createLand,
updateLand,
deleteLand

}
=
require("../controllers/landController");


// Public

router.get(
"/",
getLands
);

router.get(
"/:id",
getLand
);


// Admin

router.post(
"/",
protect,
createLand
);

router.put(
"/:id",
protect,
updateLand
);

router.delete(
"/:id",
protect,
deleteLand
);

module.exports =
router;