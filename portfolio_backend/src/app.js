const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use((req, res, next) => {
  console.log(req.url);
  next()
});
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(routes);
module.exports = app;
