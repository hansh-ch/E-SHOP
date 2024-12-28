const express = require("express");
const {
  signupUser,
  signinUser,
  logoutUser,
} = require("../controllers/authController");
const verifyAuth = require("../middlewares/protectMiddleware");
const router = express.Router();

router.route("/signup").post(signupUser);
router.route("/signin").post(signinUser);
router.route("/signout").post(verifyAuth, logoutUser);
router.route("/").get(verifyAuth);
module.exports = router;
