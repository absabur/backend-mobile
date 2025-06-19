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
    type: Number,
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
  charginSupport: {
    type: Schema.Types.ObjectId,
    ref: "ChargingSupport",
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
        ref: "Specification"
      },
      value: String,
    }
  ],
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