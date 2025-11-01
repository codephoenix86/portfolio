const express = require("express");
const router = express.Router();
const { Book } = require("../models");
router.get("/", async (req, res) => {
  const data = await Book.find();
  res.status(200).json(data);
});
router.post("/", async (req, res) => {
  const { title, publisher, ISBN, year, link } = req.body;
  const data = await Book.create({ title, publisher, ISBN, year, link });
  res.status(200).json(data);
});
router.delete("/:id", async (req, res) => {
  const data = await Book.findByIdAndDelete(req.params.id);
  res.status(200).json(data);
});
module.exports = router;
