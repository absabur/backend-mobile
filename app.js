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
  DisplayResolutionRouter,
  FabricationRouter,
  CoreCountRouter,
  BluetoothRouter,
} = require("./routes/filterRoute");
const specificationRouter = require("./routes/specificationRoute");
const phoneRouter = require("./routes/phoneRoute");
const headingRouter = require("./routes/headingRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [
      process.env.FRONT_END_URL,
      "http://localhost:3000",
      "http://192.168.31.39:3000",
    ],
    credentials: true,
  })
);

app.use("/api/heading", headingRouter);
app.use("/api/category", categoryRouter);
app.use("/api/specification", specificationRouter);
app.use("/api/phone", phoneRouter);

app.use("/api/OS", OSRouter);
app.use("/api/Fabrication", FabricationRouter);
app.use("/api/CoreCount", CoreCountRouter);
app.use("/api/Camera", CameraRouter);
app.use("/api/BatteryType", BatteryTypeRouter);
app.use("/api/Brand", BrandRouter);
app.use("/api/Chipset", ChipsetRouter);
app.use("/api/DisplayType", DisplayTypeRouter);
app.use("/api/DisplayResolution", DisplayResolutionRouter);
app.use("/api/Network", NetworkRouter);
app.use("/api/RAM", RAMRouter);
app.use("/api/RefreshRate", RefreshRateRouter);
app.use("/api/Status", StatusRouter);
app.use("/api/Storage", StorageRouter);
app.use("/api/UsbType", UsbTypeRouter);
app.use("/api/WifiType", WifiTypeRouter);
app.use("/api/Bluetooth", BluetoothRouter);
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
