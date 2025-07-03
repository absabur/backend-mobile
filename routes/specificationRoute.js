const express = require("express");
const { createLimiter } = require("../middleware/limiter");
const { createSpecification, getSpecifications, updateSpecification } = require("../controllers/specificationController");

const specificationRouter = express.Router();

specificationRouter.post("/create", createSpecification)
specificationRouter.get("/get-all", getSpecifications)
specificationRouter.put("/update/:specId", createLimiter(), updateSpecification)

module.exports = specificationRouter;