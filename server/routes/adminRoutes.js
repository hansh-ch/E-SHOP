const express = require("express");
const {
  signupUser,
  signinUser,
  logoutUser,
} = require("../controllers/authController");
const verifyAuth = require("../middlewares/protectMiddleware");
const appError = require("../utils/appError");
const {
  uploadImage,
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/admin/productController");
const { upload } = require("../utils/cloudinary");
const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.route("/create").post(createProduct);
router.route("/products").get(getAllProducts);
router.route("/update/:id").put(updateProduct);
router.route("/delete/:id").delete(deleteProduct);

module.exports = router;
