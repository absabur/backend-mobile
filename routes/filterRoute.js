const express = require("express");
const { createLimiter } = require("../middleware/limiter");
const {
  createOS,
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
  getAllDisplayResolution,
  updateDisplayResolution,
  createDisplayResolution,
  createFabrication,
  getAllFabrication,
  updateFabrication,
  createCoreCount,
  getAllCoreCount,
  updateCoreCount,
  createBluetooth,
  getAllBluetooth,
  updateBluetooth,
} = require("../controllers/filterController");

const OSRouter = express.Router();

OSRouter.post("/create", createOS);
OSRouter.get("/get-all", getAllOS);
OSRouter.put("/update/:id", updateOS);

const FabricationRouter = express.Router();

FabricationRouter.post("/create", createFabrication);
FabricationRouter.get("/get-all", getAllFabrication);
FabricationRouter.put(
  "/update/:id",

  updateFabrication
);

const CoreCountRouter = express.Router();

CoreCountRouter.post("/create", createCoreCount);
CoreCountRouter.get("/get-all", getAllCoreCount);
CoreCountRouter.put(
  "/update/:id",

  updateCoreCount
);

const CameraRouter = express.Router();

CameraRouter.post("/create", createCamera);
CameraRouter.get("/get-all", getAllCamera);
CameraRouter.put("/update/:id", updateCamera);

const BatteryTypeRouter = express.Router();

BatteryTypeRouter.post("/create", createBatteryType);
BatteryTypeRouter.get("/get-all", getAllBatteryType);
BatteryTypeRouter.put("/update/:id", updateBatteryType);

const BrandRouter = express.Router();

BrandRouter.post("/create", createBrand);
BrandRouter.get("/get-all", getAllBrand);
BrandRouter.put("/update/:id", updateBrand);

const ChipsetRouter = express.Router();

ChipsetRouter.post("/create", createChipset);
ChipsetRouter.get("/get-all", getAllChipset);
ChipsetRouter.put("/update/:id", updateChipset);

const DisplayTypeRouter = express.Router();

DisplayTypeRouter.post("/create", createDisplayType);
DisplayTypeRouter.get("/get-all", getAllDisplayType);
DisplayTypeRouter.put("/update/:id", updateDisplayType);

const DisplayResolutionRouter = express.Router();

DisplayResolutionRouter.post("/create", createDisplayResolution);
DisplayResolutionRouter.get("/get-all", getAllDisplayResolution);
DisplayResolutionRouter.put("/update/:id", updateDisplayResolution);

const NetworkRouter = express.Router();

NetworkRouter.post("/create", createNetwork);
NetworkRouter.get("/get-all", getAllNetwork);
NetworkRouter.put("/update/:id", updateNetwork);

const RAMRouter = express.Router();

RAMRouter.post("/create", createRAM);
RAMRouter.get("/get-all", getAllRAM);
RAMRouter.put("/update/:id", updateRAM);

const RefreshRateRouter = express.Router();

RefreshRateRouter.post("/create", createRefreshRate);
RefreshRateRouter.get("/get-all", getAllRefreshRate);
RefreshRateRouter.put("/update/:id", updateRefreshRate);

const StatusRouter = express.Router();

StatusRouter.post("/create", createStatus);
StatusRouter.get("/get-all", getAllStatus);
StatusRouter.put("/update/:id", updateStatus);

const StorageRouter = express.Router();

StorageRouter.post("/create", createStorage);
StorageRouter.get("/get-all", getAllStorage);
StorageRouter.put("/update/:id", updateStorage);

const UsbTypeRouter = express.Router();

UsbTypeRouter.post("/create", createUsbType);
UsbTypeRouter.get("/get-all", getAllUsbType);
UsbTypeRouter.put("/update/:id", updateUsbType);

const BluetoothRouter = express.Router();

BluetoothRouter.post("/create", createBluetooth);
BluetoothRouter.get("/get-all", getAllBluetooth);
BluetoothRouter.put("/update/:id", updateBluetooth);

const WifiTypeRouter = express.Router();

WifiTypeRouter.post("/create", createWifiType);
WifiTypeRouter.get("/get-all", getAllWifiType);
WifiTypeRouter.put("/update/:id", updateWifiType);

const WifiVersionRouter = express.Router();

WifiVersionRouter.post("/create", createWifiVersion);
WifiVersionRouter.get("/get-all", getAllWifiVersion);
WifiVersionRouter.put("/update/:id", updateWifiVersion);

module.exports = {
  OSRouter,
  CameraRouter,
  BatteryTypeRouter,
  BrandRouter,
  ChipsetRouter,
  DisplayResolutionRouter,
  DisplayTypeRouter,
  NetworkRouter,
  RAMRouter,
  RefreshRateRouter,
  StatusRouter,
  StorageRouter,
  UsbTypeRouter,
  BluetoothRouter,
  WifiTypeRouter,
  WifiVersionRouter,
  FabricationRouter,
  CoreCountRouter,
};
