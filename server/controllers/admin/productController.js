const Product = require("../../models/productModel");
const appError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const { handleImageUpload } = require("../../utils/cloudinary");

//@desc==> upload image
//@api ==> /admin/upload
//@access==> private->Admin
const uploadImage = catchAsync(async (req, res, next) => {
  // console.log(req.file);
  const b64 = Buffer.from(req.file.buffer).toString("base64");
  const url = "data:" + req.file.mimetype + ";base64," + b64;
  const result = await handleImageUpload(url);
  if (!result) {
    return next(appError("Image upload failed"));
  }
  // console.log(result);
  res.status(200).json({
    status: "success",
    data: result,
  });
});

//@desc==> Create a new product
//@api ==> /admin/create
//@access==> private->Admin
const createProduct = catchAsync(async (req, res, next) => {
  const { title, description, category, brand, price, inStock, imageUrl } =
    req.body;

  if (!req.body) {
    return;
  }
  const product = await Product.create({
    title,
    description,
    category,
    brand,
    price,
    inStock,
    imageUrl,
  });

  if (!product) return next(appError("Cannot create product", 500));

  res.status(200).json({
    status: "success",
    message: "Product created successfully",
    data: product,
  });
});

//@desc==> Get all products
//@api ==> /shop
//@access==> private->Users/admins
const getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  if (!products) return next(appError("Cannot find products", 500));

  res.status(200).json({
    status: "success",
    message: "Products fetched successfully",
    data: products,
  });
});

//@desc==>Update product
//@api ==> /admin/update:id
//@access==> private->admin
const updateProduct = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) return next(appError("Cannot find product", 500));

  res.status(200).json({
    status: "success",
    message: "Product update successfully",
    data: product,
  });
});

//@desc==>Delete product
//@api ==> /admin/delete:id
//@access==> private->admin
const deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return next(appError("Cannot find product", 500));

  res.status(200).json({
    status: "success",
    message: "Product deleted successfully",
  });
});
module.exports = {
  uploadImage,
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
