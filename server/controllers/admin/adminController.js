const appError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const { handleImageUpload } = require("../../utils/cloudinary");

const uploadImage = catchAsync(async (req, res, next) => {
  // console.log(req.file);
  const b64 = Buffer.from(req.file.buffer).toString("base64");
  const url = "data:" + req.file.mimetype + ";base64," + b64;
  const result = await handleImageUpload(url);
  // console.log(result);
  res.status(200).json({
    status: "success",
    data: result,
  });
});

module.exports = { uploadImage };
