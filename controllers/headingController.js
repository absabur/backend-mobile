const createError = require("http-errors");
const Heading = require("../models/headingModel");
const { successResponse } = require("./responseController");

exports.createHeading = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Heading Name");
    const heading = await Heading.create({ name });
    if (!heading) throw createError(401, "Unable To Create Heading");
    successResponse(res, 201, "Heading Successfully Created", heading);
  } catch (error) {
    next(error);
  }
};

exports.getHeadings = async (req, res, next) => {
  try {
    const categories = await Heading.find();
    if (!categories) throw createError(404, "headings Not Found");
    successResponse(res, 200, "", categories);
  } catch (error) {
    next(error);
  }
};

exports.updateHeading = async (req, res, next) => {
  try {
    const headingId = req.params.headingId;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Heading Name");
    const heading = await Heading.findByIdAndUpdate(
      headingId,
      { name },
      { new: true }
    );
    if (!heading) throw createError(404, "Heading Not Found");
    successResponse(res, 201, "", heading);
  } catch (error) {
    next(error);
  }
};
