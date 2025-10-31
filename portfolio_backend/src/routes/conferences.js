const express = require("express");
const router = express.Router();
const { Conference } = require("../models");
router.get("/", async (req, res) => {
  const data = await Conference.find();
  res.status(200).json(data);
});
router.post("/", async (req, res) => {
  const { title, year, vanue, name, tags } = req.body;
  const data = await Conference.create({ title, year, vanue, name, tags });
  res.status(200).json(data);
});
router.delete("/:id", async (req, res) => {
  const data = await Conference.findByIdAndDelete(req.params.id);
  res.status(200).json(data);
});
module.exports = router;
