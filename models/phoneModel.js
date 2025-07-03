const { Schema, model } = require("mongoose");

const phoneSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
  },
  price: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
  },
  official: {
    type: Boolean,
  },
  unofficial: {
    type: Boolean,
  },
  weight: {
    type: Number,
  },
  refreshRate: {
    type: Schema.Types.ObjectId,
    ref: "RefreshRate",
  },
  displayType: {
    type: Schema.Types.ObjectId,
    ref: "DisplayType",
  },
  displaySize: {
    type: Number,
  },
  screenBodyRatio: {
    type: Number,
  },
  ppi: {
    type: Number,
  },
  displayResolution: {
    type: Schema.Types.ObjectId,
    ref: "Resolution",
  },
  os: {
    type: Schema.Types.ObjectId,
    ref: "OS",
  },
  chipset: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chipset",
    },
  ],
  fabrication: {
    type: Schema.Types.ObjectId,
    ref: "Fabrication",
  },
  coreCount: {
    type: Schema.Types.ObjectId,
    ref: "CoreCount",
  },
  stereo: {
    type: Boolean,
  },
  gps: {
    type: Boolean,
  },
  nfc: {
    type: Boolean,
  },
  fm: {
    type: Boolean,
  },
  batteryType: {
    type: Schema.Types.ObjectId,
    ref: "BatteryType",
  },
  batteryCapacity: {
    type: Number,
  },
  storage: [
    {
      type: Schema.Types.ObjectId,
      ref: "Storage",
    },
  ],
  ram: [
    {
      type: Schema.Types.ObjectId,
      ref: "RAM",
    },
  ],
  threePointFive: {
    type: Boolean,
  },
  bluetooth: {
    type: Schema.Types.ObjectId,
    ref: "Bluetooth",
  },
  wifiVersion: {
    type: Schema.Types.ObjectId,
    ref: "WifiVersion",
  },
  wifiType: {
    type: Schema.Types.ObjectId,
    ref: "WifiType",
  },
  usbType: {
    type: Schema.Types.ObjectId,
    ref: "UsbType",
  },
  network: [
    {
      type: Schema.Types.ObjectId,
      ref: "Network",
    },
  ],
  chargingSupport: {
    type: Number,
  },
  fabrication: {
    type: Schema.Types.ObjectId,
    ref: "Fabrication",
  },
  coreCount: {
    type: Schema.Types.ObjectId,
    ref: "CoreCount",
  },
  backCamera: [
    {
      type: Schema.Types.ObjectId,
      ref: "Camera",
    },
  ],
  frontCamera: [
    {
      type: Schema.Types.ObjectId,
      ref: "Camera",
    },
  ],
  specifications: [
    {
      key: {
        type: Schema.Types.ObjectId,
        ref: "Specification",
      },
      value: String,
    },
  ],
  general: [
    {
      key: String,
      value: String,
    },
  ],
  features: [
    {
      key: String,
      value: String,
    },
  ],
  ratings: [
    {
      key: String,
      value: String,
    },
  ],
  table: [
    {
      key: String,
      value: String,
    },
  ],
  pros: [String],
  cons: [String],
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

const Phone = model("Phone", phoneSchema);
module.exports = Phone;
