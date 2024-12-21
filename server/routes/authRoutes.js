const express = require("express");
const { signupUser, signinUser } = require("../controllers/authController");
const router = express.Router();

router.route("/signup").post(signupUser);
router.route("/signin").post(signinUser);
module.exports = router;
