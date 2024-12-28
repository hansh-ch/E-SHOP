const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");
const { verifyToken } = require("../utils/jwtToken");
const User = require("../models/userModel");

const verifyAuth = catchAsync(async (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return next(appError("You are not logged in !", 401));
  }

  //1) Verification token
  const decoded = await verifyToken(token);
  // 2) Check if user still exists
  const currentUser = await User.findById(decoded.id).select(
    "-password -__v -createdAt -updatedAt"
  );

  if (!currentUser) {
    return next(
      new appError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }
  req.user = currentUser;
  next();
});

module.exports = verifyAuth;
