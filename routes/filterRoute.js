const express = require("express");
const { createLimiter } = require("../middleware/limiter");
const {
  createOS,
  createChargingSupport,
  createCamera,
  createBatteryType,
  createBrand,
  createChipset,
  createDisplayType,
  createNetwork,
  createRAM,
  createRefreshRate,
  createStatus,
  createStorage,
  createUsbType,
  createWifiType,
  createWifiVersion,

  getAllOS,
  getAllChargingSupport,
  getAllCamera,
  getAllBatteryType,
  getAllBrand,
  getAllChipset,
  getAllDisplayType,
  getAllNetwork,
  getAllRAM,
  getAllRefreshRate,
  getAllStatus,
  getAllStorage,
  getAllUsbType,
  getAllWifiType,
  getAllWifiVersion,

  updateOS,
  updateChargingSupport,
  updateCamera,
  updateBatteryType,
  updateBrand,
  updateChipset,
  updateDisplayType,
  updateNetwork,
  updateRAM,
  updateRefreshRate,
  updateStatus,
  updateStorage,
  updateUsbType,
  updateWifiType,
  updateWifiVersion,
} = require("../controllers/filterController");

const OSRouter = express.Router();

OSRouter.post("/create", createLimiter(), createOS);
OSRouter.get("/get-all", getAllOS);
OSRouter.put("/update/:id", createLimiter(), updateOS);

const ChargingSupportRouter = express.Router();

ChargingSupportRouter.post("/create", createLimiter(), createChargingSupport);
ChargingSupportRouter.get("/get-all", getAllChargingSupport);
ChargingSupportRouter.put(
  "/update/:id",
  createLimiter(),
  updateChargingSupport
);

const CameraRouter = express.Router();

CameraRouter.post("/create", createLimiter(), createCamera);
CameraRouter.get("/get-all", getAllCamera);
CameraRouter.put("/update/:id", createLimiter(), updateCamera);

const BatteryTypeRouter = express.Router();

BatteryTypeRouter.post("/create", createLimiter(), createBatteryType);
BatteryTypeRouter.get("/get-all", getAllBatteryType);
BatteryTypeRouter.put("/update/:id", createLimiter(), updateBatteryType);

const BrandRouter = express.Router();

BrandRouter.post("/create", createLimiter(), createBrand);
BrandRouter.get("/get-all", getAllBrand);
BrandRouter.put("/update/:id", createLimiter(), updateBrand);

const ChipsetRouter = express.Router();

ChipsetRouter.post("/create", createLimiter(), createChipset);
ChipsetRouter.get("/get-all", getAllChipset);
ChipsetRouter.put("/update/:id", createLimiter(), updateChipset);

const DisplayTypeRouter = express.Router();

DisplayTypeRouter.post("/create", createLimiter(), createDisplayType);
DisplayTypeRouter.get("/get-all", getAllDisplayType);
DisplayTypeRouter.put("/update/:id", createLimiter(), updateDisplayType);

const NetworkRouter = express.Router();

NetworkRouter.post("/create", createLimiter(), createNetwork);
NetworkRouter.get("/get-all", getAllNetwork);
NetworkRouter.put("/update/:id", createLimiter(), updateNetwork);

const RAMRouter = express.Router();

RAMRouter.post("/create", createLimiter(), createRAM);
RAMRouter.get("/get-all", getAllRAM);
RAMRouter.put("/update/:id", createLimiter(), updateRAM);

const RefreshRateRouter = express.Router();

RefreshRateRouter.post("/create", createLimiter(), createRefreshRate);
RefreshRateRouter.get("/get-all", getAllRefreshRate);
RefreshRateRouter.put("/update/:id", createLimiter(), updateRefreshRate);

const StatusRouter = express.Router();

StatusRouter.post("/create", createLimiter(), createStatus);
StatusRouter.get("/get-all", getAllStatus);
StatusRouter.put("/update/:id", createLimiter(), updateStatus);

const StorageRouter = express.Router();

StorageRouter.post("/create", createLimiter(), createStorage);
StorageRouter.get("/get-all", getAllStorage);
StorageRouter.put("/update/:id", createLimiter(), updateStorage);

const UsbTypeRouter = express.Router();

UsbTypeRouter.post("/create", createLimiter(), createUsbType);
UsbTypeRouter.get("/get-all", getAllUsbType);
UsbTypeRouter.put("/update/:id", createLimiter(), updateUsbType);

const WifiTypeRouter = express.Router();

WifiTypeRouter.post("/create", createLimiter(), createWifiType);
WifiTypeRouter.get("/get-all", getAllWifiType);
WifiTypeRouter.put("/update/:id", createLimiter(), updateWifiType);

const WifiVersionRouter = express.Router();

WifiVersionRouter.post("/create", createLimiter(), createWifiVersion);
WifiVersionRouter.get("/get-all", getAllWifiVersion);
WifiVersionRouter.put("/update/:id", createLimiter(), updateWifiVersion);

module.exports = {
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
};
