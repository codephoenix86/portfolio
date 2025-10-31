const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  vanue: { type: String, required: true },
  citations: Number,
  tags: [String],
});
module.exports = mongoose.model("Publication", schema);
