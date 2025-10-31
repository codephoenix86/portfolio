const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  name: String,
  vanue: String,
  tags: [String],
});
module.exports = mongoose.model("Conference", schema);
