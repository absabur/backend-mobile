const { Schema, model } = require("mongoose");

const specificationSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Heading"
  }
});

const Specification = model("Specification", specificationSchema);
module.exports = Specification;