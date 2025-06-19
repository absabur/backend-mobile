const createError = require("http-errors");
const Category = require("../models/categoryModel");
const { successResponse } = require("./responseController");

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw createError(400, "Please Provide Category Name");
    const category = await Category.create({ name });
    if (!category) throw createError(401, "Unable To Create Category");
    successResponse(res, 201, "Category Successfully Created", category);
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    if (!categories) throw createError(404, "Categories Not Found");
    successResponse(res, 200, "", categories);
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const name = req.body.name;
    if (!name) throw createError(404, "Please Provide Category Name");
    const category = await Category.findByIdAndUpdate(
      categoryId,
      { name },
      { new: true }
    );
    if (!category) throw createError(404, "Category Not Found");
    successResponse(res, 201, "", category);
  } catch (error) {
    next(error);
  }
};
