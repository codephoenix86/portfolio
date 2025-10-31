const express = require("express");
const router = express.Router();
router.use("/research-areas", require("./research"));
router.use("/publications", require("./publications"));
router.use("/conferences", require("./conferences"));
router.use("/books", require("./books"));
router.use("/profile", require('./profile'));
module.exports = router;
