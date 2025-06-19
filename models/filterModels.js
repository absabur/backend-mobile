const { Schema, model } = require("mongoose");

const osSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.OS = model("OS", osSchema);



const chargingSupportSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.ChargingSupport = model("ChargingSupport", chargingSupportSchema);



const cameraSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.Camera = model("Camera", cameraSchema);



const batterySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.BatteryType = model("BatteryType", batterySchema);



const brandSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.Brand = model("Brand", brandSchema);



const chipsetSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.Chipset = model("Chipset", chipsetSchema);



const displayTypeSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.DisplayType = model("DisplayType", displayTypeSchema);



const networkSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.Network = model("Network", networkSchema);



const ramSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.RAM = model("RAM", ramSchema);



const refreshRateSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.RefreshRate = model("RefreshRate", refreshRateSchema);



const statusSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.Status = model("Status", statusSchema);



const storageSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.Storage = model("Storage", storageSchema);



const usbTypeSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.UsbType = model("UsbType", usbTypeSchema);



const WifiTypeSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.WifiType = model("WifiType", WifiTypeSchema);



const WifiVersionSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

exports.WifiVersion = model("WifiVersion", WifiVersionSchema);
