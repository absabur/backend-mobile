const createError = require("http-errors");
const { successResponse } = require("./responseController");
const Specification = require("../models/specificationModel");

exports.createSpecification = async (req, res, next) => {
  try {
    const { name, heading } = req.body;
    if (!name) throw createError(400, "Please Provide Specification Name");
    if (!heading)
      throw createError(400, "Please Provide Specification Heading");
    const spacification = await Specification.create({ name, heading });
    if (!spacification)
      throw createError(401, "Unable To Create Specification");
    successResponse(
      res,
      201,
      "Specification Successfully Created",
      spacification
    );
  } catch (error) {
    next(error);
  }
};

exports.getSpecifications = async (req, res, next) => {
  try {
    const specifications = await Specification.find().populate(
      "heading",
      "name"
    );
    if (!specifications) throw createError(404, "Specification Not Found");
    successResponse(res, 200, "", specifications);
  } catch (error) {
    next(error);
  }
};

exports.updateSpecification = async (req, res, next) => {
  try {
    const specId = req.params.specId;
    const { name, heading } = req.body;
    if (!name) throw createError(404, "Please Provide Specification Name");
    if (!heading)
      throw createError(404, "Please Provide Specification Heading");
    const specification = await Specification.findByIdAndUpdate(
      specId,
      { name, heading },
      { new: true }
    );
    if (!specification) throw createError(404, "Specification Not Found");
    successResponse(res, 201, "", specification);
  } catch (error) {
    next(error);
  }
};
