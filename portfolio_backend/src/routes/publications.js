const express = require("express");
const router = express.Router();
const { Publication } = require("../models");
router.get("/", async (req, res) => {
  const data = await Publication.find();
  res.status(200).json(data);
});
router.post("/", async (req, res) => {
  const { year, title, vanue, tags, citations, link } = req.body;
  const data = await Publication.create({
    year,
    title,
    vanue,
    tags,
    citations,
    link,
  });
  res.status(200).json(data);
});
router.delete("/:id", async (req, res) => {
  const data = await Publication.findByIdAndDelete(req.params.id);
  res.status(200).json(data);
});
module.exports = router;
