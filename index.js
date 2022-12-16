const express = require("express");
const connect = require("./db/db");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const userROuter = require("./user.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userROuter);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`server started ${PORT}`);
});
