const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title cannot be empty"],
    },
    description: {
      type: String,
      required: [true, "Description cannot be empty"],
    },
    category: {
      type: String,
      required: [true, "Category cannot be empty"],
    },
    brand: {
      type: String,
      required: [true, "Brand cannot be empty"],
    },
    price: {
      type: Number,
      required: [true, "Price cannot be empty"],
      default: 0,
    },
    inStock: {
      type: Number,
      required: [true, "Stock cannot be empty"],
      default: 1,
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
