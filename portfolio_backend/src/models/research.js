const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: String,
});
module.exports = mongoose.model("Research", schema);
