const express = require("express");
const { createCategory, getCategories, updateCategory } = require("../controllers/categoryController");
const { createLimiter } = require("../middleware/limiter");

const categoryRouter = express.Router();

categoryRouter.post("/create", createCategory)
categoryRouter.get("/get-all", getCategories)
categoryRouter.put("/update/:categoryId", createLimiter(), updateCategory)

module.exports = categoryRouter;