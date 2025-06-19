const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const createError = require("http-errors");
require("dotenv").config();

const { errorResponse } = require("./controllers/responseController");
const categoryRouter = require("./routes/categoryRoute");
const {
  OSRouter,
  ChargingSupportRouter,
  CameraRouter,
  BatteryTypeRouter,
  BrandRouter,
  ChipsetRouter,
  DisplayTypeRouter,
  NetworkRouter,
  RAMRouter,
  RefreshRateRouter,
  StatusRouter,
  StorageRouter,
  UsbTypeRouter,
  WifiTypeRouter,
  WifiVersionRouter,
} = require("./routes/filterRoute");
const specificationRouter = require("./routes/specificationRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONT_END_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/category", categoryRouter);
app.use("/api/specification", specificationRouter);

app.use("/api/OS", OSRouter);
app.use("/api/ChargingSupport", ChargingSupportRouter);
app.use("/api/Camera", CameraRouter);
app.use("/api/BatteryType", BatteryTypeRouter);
app.use("/api/Brand", BrandRouter);
app.use("/api/Chipset", ChipsetRouter);
app.use("/api/DisplayType", DisplayTypeRouter);
app.use("/api/Network", NetworkRouter);
app.use("/api/RAM", RAMRouter);
app.use("/api/RefreshRate", RefreshRateRouter);
app.use("/api/Status", StatusRouter);
app.use("/api/Storage", StorageRouter);
app.use("/api/UsbType", UsbTypeRouter);
app.use("/api/WifiType", WifiTypeRouter);
app.use("/api/WifiVersion", WifiVersionRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.use((req, res, next) => {
  next(createError(404, "route not found."));
});

app.use((err, req, res, next) => {
  if (err.name === "CastError") {
    return errorResponse(res, {
      statusCode: err.status,
      error: `Resource not found, invalid: ${err.path}`,
    });
  }
  return errorResponse(res, {
    statusCode: err.status,
    error: err.message,
  });
});

module.exports = app;
