const { Schema, model } = require("mongoose");

const headingSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

const Heading = model("Heading", headingSchema);
module.exports = Heading;