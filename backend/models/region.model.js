const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  region: { type: String, required: true },
  regionId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  image: { type: Array },
});

module.exports = mongoose.model("Region", regionSchema);
