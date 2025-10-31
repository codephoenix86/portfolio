require("dotenv").config();
const connectDB = require('./src/config/db')
connectDB()
const app = require("./src/app");
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app listening on port", port);
});
