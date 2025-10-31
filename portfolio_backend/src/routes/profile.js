const express = require("express");
const router = express.Router();
const fs = require("fs/promises");

router.get("/", async (req, res) => {
  const data = await fs.readFile("profile.json", "utf-8");
  res.status(200).json(JSON.parse(data));
});
router.post("/", async (req, res) => {
  console.log(req.body)
  const { role, name, bio } = req.body;
  const data = await fs.writeFile(
    "profile.json",
    JSON.stringify({ role, name, bio }, null, 2),
    "utf8"
  );
  res.status(200).json({ success: true });
});
module.exports = router;
