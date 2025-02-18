const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

const authRouter = require("./routes/authRoutes");
const adminRouter = require("./routes/adminRoutes");
const shopRouter = require("./routes/shopRoutes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const port = 3000;

mongoose
  .connect(process.env.DB_LOCAL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(() => console.log("DB connection error"));

//==> CORS CONFIG

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Cache-Control",
      "Authorization",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

//Routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/shop/products", shopRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    status: "fail",
    message,
  });
});
