const express = require("express");
const verifyAuth = require("../middlewares/protectMiddleware");
const { getFilteredProducts } = require("../controllers/productController");
const router = express.Router();
router.use(verifyAuth);

router.route("/").get(getFilteredProducts);
module.exports = router;
