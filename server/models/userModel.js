const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username must be provided"],
    },
    email: {
      type: String,
      required: [true, "Email must be provided"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password must be provided"],
    },
    role: {
      type: String,
      required: [true, "role must be provided"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Hashing password
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
