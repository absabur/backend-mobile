const createError = require("http-errors");
const { successResponse } = require("./responseController");
const {
  OS,
  Fabrication,
  CoreCount,
  Camera,
  BatteryType,
  Brand,
  Chipset,
  DisplayType,
  Network,
  RAM,
  RefreshRate,
  Status,
  Storage,
  UsbType,
  WifiType,
  WifiVersion,
  DisplayResolution,
  Bluetooth,
} = require("../models/filterModels");

exports.createOS = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide OS Name");
    const OSinstance = await OS.create({ name });
    if (!OSinstance) throw createError(401, "Unable To Create OS");
    successResponse(res, 201, "OS Successfully Created", OSinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllOS = async (req, res, next) => {
  try {
    const allOS = await OS.find();
    if (!allOS) throw createError(404, "OS Not Found");
    successResponse(res, 200, "", allOS);
  } catch (error) {
    next(error);
  }
};

exports.updateOS = async (req, res, next) => {
  try {
    const OSId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide OS Name");
    const OSinstance = await OS.findByIdAndUpdate(
      OSId,
      { name },
      { new: true }
    );
    if (!OSinstance) throw createError(404, "OS Not Found");
    successResponse(res, 201, "", OSinstance);
  } catch (error) {
    next(error);
  }
};

exports.createFabrication = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Fabrication Name");
    const Fabricationinstance = await Fabrication.create({ name });
    if (!Fabricationinstance)
      throw createError(401, "Unable To Create Fabrication");
    successResponse(
      res,
      201,
      "Fabrication Successfully Created",
      Fabricationinstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllFabrication = async (req, res, next) => {
  try {
    const allFabrication = await Fabrication.find();
    if (!allFabrication)
      throw createError(404, "Fabrication Not Found");
    successResponse(res, 200, "", allFabrication);
  } catch (error) {
    next(error);
  }
};

exports.updateFabrication = async (req, res, next) => {
  try {
    const FabricationId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Fabrication Name");
    const Fabricationinstance = await Fabrication.findByIdAndUpdate(
      FabricationId,
      { name },
      { new: true }
    );
    if (!Fabricationinstance)
      throw createError(404, "Fabrication Not Found");
    successResponse(res, 201, "", Fabricationinstance);
  } catch (error) {
    next(error);
  }
};

exports.createCoreCount = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide CoreCount Name");
    const CoreCountinstance = await CoreCount.create({ name });
    if (!CoreCountinstance)
      throw createError(401, "Unable To Create CoreCount");
    successResponse(
      res,
      201,
      "CoreCount Successfully Created",
      CoreCountinstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllCoreCount = async (req, res, next) => {
  try {
    const allCoreCount = await CoreCount.find();
    if (!allCoreCount)
      throw createError(404, "CoreCount Not Found");
    successResponse(res, 200, "", allCoreCount);
  } catch (error) {
    next(error);
  }
};

exports.updateCoreCount = async (req, res, next) => {
  try {
    const CoreCountId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide CoreCount Name");
    const CoreCountinstance = await CoreCount.findByIdAndUpdate(
      CoreCountId,
      { name },
      { new: true }
    );
    if (!CoreCountinstance)
      throw createError(404, "CoreCount Not Found");
    successResponse(res, 201, "", CoreCountinstance);
  } catch (error) {
    next(error);
  }
};
exports.createCamera = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Camera Name");
    const Camerainstance = await Camera.create({ name });
    if (!Camerainstance) throw createError(401, "Unable To Create Camera");
    successResponse(res, 201, "Camera Successfully Created", Camerainstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllCamera = async (req, res, next) => {
  try {
    const allCamera = await Camera.find();
    if (!allCamera) throw createError(404, "Camera Not Found");
    successResponse(res, 200, "", allCamera);
  } catch (error) {
    next(error);
  }
};

exports.updateCamera = async (req, res, next) => {
  try {
    const CameraId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Camera Name");
    const Camerainstance = await Camera.findByIdAndUpdate(
      CameraId,
      { name },
      { new: true }
    );
    if (!Camerainstance) throw createError(404, "Camera Not Found");
    successResponse(res, 201, "", Camerainstance);
  } catch (error) {
    next(error);
  }
};

exports.createBatteryType = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide BatteryType Name");
    const BatteryTypeinstance = await BatteryType.create({ name });
    if (!BatteryTypeinstance)
      throw createError(401, "Unable To Create BatteryType");
    successResponse(
      res,
      201,
      "BatteryType Successfully Created",
      BatteryTypeinstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllBatteryType = async (req, res, next) => {
  try {
    const allBatteryType = await BatteryType.find();
    if (!allBatteryType) throw createError(404, "BatteryType Not Found");
    successResponse(res, 200, "", allBatteryType);
  } catch (error) {
    next(error);
  }
};

exports.updateBatteryType = async (req, res, next) => {
  try {
    const BatteryTypeId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide BatteryType Name");
    const BatteryTypeinstance = await BatteryType.findByIdAndUpdate(
      BatteryTypeId,
      { name },
      { new: true }
    );
    if (!BatteryTypeinstance) throw createError(404, "BatteryType Not Found");
    successResponse(res, 201, "", BatteryTypeinstance);
  } catch (error) {
    next(error);
  }
};

exports.createBrand = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Brand Name");
    const Brandinstance = await Brand.create({ name });
    if (!Brandinstance) throw createError(401, "Unable To Create Brand");
    successResponse(res, 201, "Brand Successfully Created", Brandinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllBrand = async (req, res, next) => {
  try {
    const allBrand = await Brand.find();
    if (!allBrand) throw createError(404, "Brand Not Found");
    successResponse(res, 200, "", allBrand);
  } catch (error) {
    next(error);
  }
};

exports.updateBrand = async (req, res, next) => {
  try {
    const BrandId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Brand Name");
    const Brandinstance = await Brand.findByIdAndUpdate(
      BrandId,
      { name },
      { new: true }
    );
    if (!Brandinstance) throw createError(404, "Brand Not Found");
    successResponse(res, 201, "", Brandinstance);
  } catch (error) {
    next(error);
  }
};

exports.createChipset = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Chipset Name");
    const Chipsetinstance = await Chipset.create({ name });
    if (!Chipsetinstance) throw createError(401, "Unable To Create Chipset");
    successResponse(res, 201, "Chipset Successfully Created", Chipsetinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllChipset = async (req, res, next) => {
  try {
    const allChipset = await Chipset.find();
    if (!allChipset) throw createError(404, "Chipset Not Found");
    successResponse(res, 200, "", allChipset);
  } catch (error) {
    next(error);
  }
};

exports.updateChipset = async (req, res, next) => {
  try {
    const ChipsetId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Chipset Name");
    const Chipsetinstance = await Chipset.findByIdAndUpdate(
      ChipsetId,
      { name },
      { new: true }
    );
    if (!Chipsetinstance) throw createError(404, "Chipset Not Found");
    successResponse(res, 201, "", Chipsetinstance);
  } catch (error) {
    next(error);
  }
};

exports.createDisplayType = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide DisplayType Name");
    const DisplayTypeinstance = await DisplayType.create({ name });
    if (!DisplayTypeinstance)
      throw createError(401, "Unable To Create DisplayType");
    successResponse(
      res,
      201,
      "DisplayType Successfully Created",
      DisplayTypeinstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllDisplayType = async (req, res, next) => {
  try {
    const allDisplayType = await DisplayType.find();
    if (!allDisplayType) throw createError(404, "DisplayType Not Found");
    successResponse(res, 200, "", allDisplayType);
  } catch (error) {
    next(error);
  }
};

exports.updateDisplayType = async (req, res, next) => {
  try {
    const DisplayTypeId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide DisplayType Name");
    const DisplayTypeinstance = await DisplayType.findByIdAndUpdate(
      DisplayTypeId,
      { name },
      { new: true }
    );
    if (!DisplayTypeinstance) throw createError(404, "DisplayType Not Found");
    successResponse(res, 201, "", DisplayTypeinstance);
  } catch (error) {
    next(error);
  }
};

exports.createDisplayResolution = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide DisplayResolution Name");
    const DisplayResolutioninstance = await DisplayResolution.create({ name });
    if (!DisplayResolutioninstance)
      throw createError(401, "Unable To Create DisplayResolution");
    successResponse(
      res,
      201,
      "DisplayResolution Successfully Created",
      DisplayResolutioninstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllDisplayResolution = async (req, res, next) => {
  try {
    const allDisplayType = await DisplayResolution.find();
    if (!allDisplayType) throw createError(404, "DisplayResolution Not Found");
    successResponse(res, 200, "", allDisplayType);
  } catch (error) {
    next(error);
  }
};

exports.updateDisplayResolution = async (req, res, next) => {
  try {
    const DisplayTypeId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide DisplayResolution Name");
    const DisplayResolutioninstance = await DisplayResolution.findByIdAndUpdate(
      DisplayTypeId,
      { name },
      { new: true }
    );
    if (!DisplayResolutioninstance) throw createError(404, "DisplayResolution Not Found");
    successResponse(res, 201, "", DisplayResolutioninstance);
  } catch (error) {
    next(error);
  }
};

exports.createNetwork = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Network Name");
    const Networkinstance = await Network.create({ name });
    if (!Networkinstance) throw createError(401, "Unable To Create Network");
    successResponse(res, 201, "Network Successfully Created", Networkinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllNetwork = async (req, res, next) => {
  try {
    const allNetwork = await Network.find();
    if (!allNetwork) throw createError(404, "Network Not Found");
    successResponse(res, 200, "", allNetwork);
  } catch (error) {
    next(error);
  }
};

exports.updateNetwork = async (req, res, next) => {
  try {
    const NetworkId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Network Name");
    const Networkinstance = await Network.findByIdAndUpdate(
      NetworkId,
      { name },
      { new: true }
    );
    if (!Networkinstance) throw createError(404, "Network Not Found");
    successResponse(res, 201, "", Networkinstance);
  } catch (error) {
    next(error);
  }
};

exports.createRAM = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide RAM Name");
    const RAMinstance = await RAM.create({ name });
    if (!RAMinstance) throw createError(401, "Unable To Create RAM");
    successResponse(res, 201, "RAM Successfully Created", RAMinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllRAM = async (req, res, next) => {
  try {
    const allRAM = await RAM.find();
    if (!allRAM) throw createError(404, "RAM Not Found");
    successResponse(res, 200, "", allRAM);
  } catch (error) {
    next(error);
  }
};

exports.updateRAM = async (req, res, next) => {
  try {
    const RAMId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide RAM Name");
    const RAMinstance = await RAM.findByIdAndUpdate(
      RAMId,
      { name },
      { new: true }
    );
    if (!RAMinstance) throw createError(404, "RAM Not Found");
    successResponse(res, 201, "", RAMinstance);
  } catch (error) {
    next(error);
  }
};

exports.createRefreshRate = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide RefreshRate Name");
    const RefreshRateinstance = await RefreshRate.create({ name });
    if (!RefreshRateinstance)
      throw createError(401, "Unable To Create RefreshRate");
    successResponse(
      res,
      201,
      "RefreshRate Successfully Created",
      RefreshRateinstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllRefreshRate = async (req, res, next) => {
  try {
    const allRefreshRate = await RefreshRate.find();
    if (!allRefreshRate) throw createError(404, "RefreshRate Not Found");
    successResponse(res, 200, "", allRefreshRate);
  } catch (error) {
    next(error);
  }
};

exports.updateRefreshRate = async (req, res, next) => {
  try {
    const RefreshRateId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide RefreshRate Name");
    const RefreshRateinstance = await RefreshRate.findByIdAndUpdate(
      RefreshRateId,
      { name },
      { new: true }
    );
    if (!RefreshRateinstance) throw createError(404, "RefreshRate Not Found");
    successResponse(res, 201, "", RefreshRateinstance);
  } catch (error) {
    next(error);
  }
};

exports.createStatus = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Status Name");
    const Statusinstance = await Status.create({ name });
    if (!Statusinstance) throw createError(401, "Unable To Create Status");
    successResponse(res, 201, "Status Successfully Created", Statusinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllStatus = async (req, res, next) => {
  try {
    const allStatus = await Status.find();
    if (!allStatus) throw createError(404, "Status Not Found");
    successResponse(res, 200, "", allStatus);
  } catch (error) {
    next(error);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const StatusId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Status Name");
    const Statusinstance = await Status.findByIdAndUpdate(
      StatusId,
      { name },
      { new: true }
    );
    if (!Statusinstance) throw createError(404, "Status Not Found");
    successResponse(res, 201, "", Statusinstance);
  } catch (error) {
    next(error);
  }
};

exports.createStorage = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Storage Name");
    const Storageinstance = await Storage.create({ name });
    if (!Storageinstance) throw createError(401, "Unable To Create Storage");
    successResponse(res, 201, "Storage Successfully Created", Storageinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllStorage = async (req, res, next) => {
  try {
    const allStorage = await Storage.find();
    if (!allStorage) throw createError(404, "Storage Not Found");
    successResponse(res, 200, "", allStorage);
  } catch (error) {
    next(error);
  }
};

exports.updateStorage = async (req, res, next) => {
  try {
    const StorageId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Storage Name");
    const Storageinstance = await Storage.findByIdAndUpdate(
      StorageId,
      { name },
      { new: true }
    );
    if (!Storageinstance) throw createError(404, "Storage Not Found");
    successResponse(res, 201, "", Storageinstance);
  } catch (error) {
    next(error);
  }
};

exports.createUsbType = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide UsbType Name");
    const UsbTypeinstance = await UsbType.create({ name });
    if (!UsbTypeinstance) throw createError(401, "Unable To Create UsbType");
    successResponse(res, 201, "UsbType Successfully Created", UsbTypeinstance);
  } catch (error) {
    next(error);
  }
};

exports.getAllUsbType = async (req, res, next) => {
  try {
    const allUsbType = await UsbType.find();
    if (!allUsbType) throw createError(404, "UsbType Not Found");
    successResponse(res, 200, "", allUsbType);
  } catch (error) {
    next(error);
  }
};

exports.updateUsbType = async (req, res, next) => {
  try {
    const UsbTypeId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide UsbType Name");
    const UsbTypeinstance = await UsbType.findByIdAndUpdate(
      UsbTypeId,
      { name },
      { new: true }
    );
    if (!UsbTypeinstance) throw createError(404, "UsbType Not Found");
    successResponse(res, 201, "", UsbTypeinstance);
  } catch (error) {
    next(error);
  }
};

exports.createBluetooth = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Bluetooth Name");
    const bluetoothInstance = await Bluetooth.create({ name });
    if (!bluetoothInstance) throw createError(401, "Unable To Create Bluetooth");
    successResponse(
      res,
      201,
      "Bluetooth Successfully Created",
      bluetoothInstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllBluetooth = async (req, res, next) => {
  try {
    const allBluetooth = await Bluetooth.find();
    if (!allBluetooth) throw createError(404, "Bluetooth Not Found");
    successResponse(res, 200, "", allBluetooth);
  } catch (error) {
    next(error);
  }
};

exports.updateBluetooth = async (req, res, next) => {
  try {
    const BluetoothId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Bluetooth Name");
    const bluetoothInstance = await Bluetooth.findByIdAndUpdate(
      BluetoothId,
      { name },
      { new: true }
    );
    if (!bluetoothInstance) throw createError(404, "Bluetooth Not Found");
    successResponse(res, 201, "", bluetoothInstance);
  } catch (error) {
    next(error);
  }
};

exports.createWifiType = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide WifiType Name");
    const WifiTypeinstance = await WifiType.create({ name });
    if (!WifiTypeinstance) throw createError(401, "Unable To Create WifiType");
    successResponse(
      res,
      201,
      "WifiType Successfully Created",
      WifiTypeinstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllWifiType = async (req, res, next) => {
  try {
    const allWifiType = await WifiType.find();
    if (!allWifiType) throw createError(404, "WifiType Not Found");
    successResponse(res, 200, "", allWifiType);
  } catch (error) {
    next(error);
  }
};

exports.updateWifiType = async (req, res, next) => {
  try {
    const WifiTypeId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide WifiType Name");
    const WifiTypeinstance = await WifiType.findByIdAndUpdate(
      WifiTypeId,
      { name },
      { new: true }
    );
    if (!WifiTypeinstance) throw createError(404, "WifiType Not Found");
    successResponse(res, 201, "", WifiTypeinstance);
  } catch (error) {
    next(error);
  }
};

exports.createWifiVersion = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide WifiVersion Name");
    const WifiVersioninstance = await WifiVersion.create({ name });
    if (!WifiVersioninstance)
      throw createError(401, "Unable To Create WifiVersion");
    successResponse(
      res,
      201,
      "WifiVersion Successfully Created",
      WifiVersioninstance
    );
  } catch (error) {
    next(error);
  }
};

exports.getAllWifiVersion = async (req, res, next) => {
  try {
    const allWifiVersion = await WifiVersion.find();
    if (!allWifiVersion) throw createError(404, "WifiVersion Not Found");
    successResponse(res, 200, "", allWifiVersion);
  } catch (error) {
    next(error);
  }
};

exports.updateWifiVersion = async (req, res, next) => {
  try {
    const WifiVersionId = req.params.id;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide WifiVersion Name");
    const WifiVersioninstance = await WifiVersion.findByIdAndUpdate(
      WifiVersionId,
      { name },
      { new: true }
    );
    if (!WifiVersioninstance) throw createError(404, "WifiVersion Not Found");
    successResponse(res, 201, "", WifiVersioninstance);
  } catch (error) {
    next(error);
  }
};
