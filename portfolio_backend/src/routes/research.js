const express = require("express");
const router = express.Router();
const { Research } = require("../models");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/research-icons");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });
router.get("/", async (req, res) => {
  const data = await Research.find();
  res.status(200).json(data);
});
router.post("/", upload.single("icon"), async (req, res) => {
  const { name, description } = req.body;
  const icon = req.file.filename;
  const data = await Research.create({ name, description, icon });
  res.status(200).json(data);
});
router.delete("/:id", async (req, res) => {
  const data = await Research.findByIdAndDelete(req.params.id);
  res.status(200).json(data);
});
module.exports = router;
