const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  publisher: String,
  year: Number,
  ISBN: String,
});
module.exports = mongoose.model("Book", schema);
