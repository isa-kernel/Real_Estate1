const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const {

getInquiries,
createInquiry

}
=
require("../controllers/inquiryController");


router.get(
"/",
protect,
getInquiries
);

router.post(
"/",
createInquiry
);

module.exports = router;