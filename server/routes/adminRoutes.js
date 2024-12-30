const express = require("express");
const {
  signupUser,
  signinUser,
  logoutUser,
} = require("../controllers/authController");
const verifyAuth = require("../middlewares/protectMiddleware");
const appError = require("../utils/appError");
const { uploadImage } = require("../controllers/admin/adminController");
const { upload } = require("../utils/cloudinary");
const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
