const express = require("express");
const { createPhone, getPhones, createAllPhone } = require("../controllers/phoneController");
const upload = require("../utils/multer.js");

const phoneRouter = express.Router();

phoneRouter.post("/create", upload.array('images', 10), createPhone)
phoneRouter.get("/get-all", getPhones)

module.exports = phoneRouter;