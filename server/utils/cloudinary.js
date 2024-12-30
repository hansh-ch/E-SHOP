const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const storage = new multer.memoryStorage();

async function handleImageUpload(file) {
  const result = await cloudinary.uploader.upload(file).catch((error) => {
    console.log(error);
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, handleImageUpload };
