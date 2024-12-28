const jwt = require("jsonwebtoken");
const { promisify } = require("util");
require("dotenv").config();

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  return token;
};

const verifyToken = async (token) => {
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = { createToken, verifyToken };
