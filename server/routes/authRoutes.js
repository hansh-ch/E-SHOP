const express = require("express");
const {
  signupUser,
  signinUser,
  logoutUser,
} = require("../controllers/authController");
const verifyAuth = require("../middlewares/protectMiddleware");
const appError = require("../utils/appError");
const router = express.Router();

router.route("/signup").post(signupUser);
router.route("/signin").post(signinUser);
router.route("/signout").post(verifyAuth, logoutUser);
router.route("/").get(verifyAuth, (req, res, next) => {
  if (!req.user) {
    return next(appError("You are not logged in", 401));
  } else {
    res.status(200).json({
      status: "success",
      data: req.user,
    });
  }
});
module.exports = router;
