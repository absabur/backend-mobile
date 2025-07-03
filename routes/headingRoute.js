const express = require("express");
const { createHeading, getHeadings, updateHeading } = require("../controllers/headingController");
const { createLimiter } = require("../middleware/limiter");

const headingRouter = express.Router();

headingRouter.post("/create", createHeading)
headingRouter.get("/get-all", getHeadings)
headingRouter.put("/update/:headingId", createLimiter(), updateHeading)

module.exports = headingRouter;