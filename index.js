const express = require("express");
const connect = require("./db/db");
const cors = require("cors");
const userROuter = require("./user.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userROuter);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(8080, async () => {
  await connect();
  console.log(`server started 8080`);
});
