const createError = require("http-errors");
const Phone = require("../models/phoneModel");
const { successResponse } = require("./responseController");

exports.createPhone = async (req, res, next) => {
  try {
    const data = req.body;
    if (!req.files || req.files.length === 0) {
      throw createError(400, "At least one image is required");
    }

    let slug = makeSlug(bookName, bookAuthor);
    let exists = await Phone.findOne({ slug: slug });
    if (exists) {
      throw createError(404, "This Phone Already Exists");
    }
    const images = [];
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "phone",
      });
      images.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    const phone = await Phone.create({ ...data, slug, images })
      .populate("brand")
      .populate("category")
      .populate("status")
      .populate("refreshRate")
      .populate("displayType")
      .populate("os")
      .populate("chipset")
      .populate("batteryType")
      .populate("storage")
      .populate("ram")
      .populate("wifiVersion")
      .populate("wifiType")
      .populate("usbType")
      .populate("network")
      .populate("charginSupport")
      .populate("backCamera")
      .populate("frontCamera")
      .populate("specifications.key")
      .lean();

    if (!phone) throw createError(401, "Unable To Create Phone");
    successResponse(res, 201, "Phone Successfully Created", phone);
  } catch (error) {
    next(error);
  }
};

exports.getPhones = async (req, res, next) => {
  try {
    const phones = await Phone.find()
      .populate("brand")
      .populate("category")
      .populate("status")
      .populate("refreshRate")
      .populate("displayType")
      .populate("os")
      .populate("chipset")
      .populate("batteryType")
      .populate("storage")
      .populate("ram")
      .populate("wifiVersion")
      .populate("wifiType")
      .populate("usbType")
      .populate("network")
      .populate("charginSupport")
      .populate("backCamera")
      .populate("frontCamera")
      .populate("specifications.key")
      .lean();

    if (!phones) throw createError(404, "Phones Not Found");
    successResponse(res, 200, "", phones);
  } catch (error) {
    next(error);
  }
};

// exports.updatePhone = async (req, res, next) => {
//   try {
//     const phoneId = req.params.phoneId;
    
//     let slug = makeSlug(bookName, bookAuthor);
//     let exists = await Phone.findOne({ slug: slug });
//     if (exists) {
//       throw createError(404, "This Phone Already Exists");
//     }
//     const images = [];
//     for (const file of req.files) {
//       const result = await cloudinary.uploader.upload(file.path, {
//         folder: "phone",
//       });
//       images.push({
//         public_id: result.public_id,
//         url: result.secure_url,
//       });
//     }
//     const phone = await Phone.findByIdAndUpdate(
//       phoneId,
//       { ...req.body, images, slug },
//       { new: true }
//     );
//     if (!phone) throw createError(404, "Phone Not Found");
//     successResponse(res, 201, "", phone);
//   } catch (error) {
//     next(error);
//   }
// };
