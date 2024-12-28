const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");
const { createToken } = require("../utils/jwtToken");
require("dotenv").config();
//@desc==> register a user
//@api ==> /auth/signup
//@access==> pubic
const signupUser = catchAsync(async (req, res, next) => {
  const { email, password, username, role } = req.body;
  if (!req.body) {
    return next(appError("Error", 400));
  }
  //   console.log(req.body);
  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(appError("User already exists,Please login", 400));
  }
  const newUser = await User.create({ email, password, username, role });

  res.status(200).json({
    status: "success",
    message: "Signed up successfully",
  });
});

//@desc==> login a user
//@api ==> /auth/signin
//@access==> pubic
const signinUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //checking if fields are empty
  if (!email || !password) {
    return next(appError("All fields are required", 400));
  }

  //1) Finding a user with email
  const userExists = await User.findOne({ email });
  if (!userExists) {
    return next(appError("Invalid email or password", 400));
  }
  //2) Compare password
  const correctPassword = await bcrypt.compare(password, userExists.password);
  if (!userExists || !correctPassword) {
    return next(appError("Invalid email or password", 400));
  }
  //3) Everything is OK -login user
  const user = await User.findById(userExists._id).select(
    "-password -__v -createdAt -updatedAt"
  );
  const token = createToken(user._id);
  //   const user = await User.find({ email, password });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //30 days
  });
  res.status(200).json({
    status: "success",
    message: "Signed in successfully",
    data: user,
  });
});

//@desc==> login a user
//@api ==> /auth/signin
//@access==> pubic
const logoutUser = catchAsync(async (req, res, next) => {
  res.clearCookie("token").json({
    status: "success",
    message: "Logout successfully",
  });
});
module.exports = { signupUser, signinUser, logoutUser };
