const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");
const Product = require("../models/productModel");

const getFilteredProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  if (!products) {
    return next(appError("No Product found", 500));
  }
  res.status(200).json({
    status: "success",
    message: "Product found sucessfully",
    data: products,
  });
});

module.exports = { getFilteredProducts };
