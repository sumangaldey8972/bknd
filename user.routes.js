const express = require("express");
const userModel = require("./user.models");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allUser = await userModel.find();
    res.status(200).send({ data: allUser });
  } catch (err) {
    res.status(500).send({ message: "server error from get user" });
  }
});

app.post("/", async (req, res) => {
  try {
    let { email } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      res.status(401).send({ message: "Email already exist" });
    } else {
      let newUser = await userModel.create(req.body);
      res
        .status(200)
        .send({ message: "User added successfull", data: newUser });
    }
  } catch (err) {
    res.status(500).send({ massage: "Server error from post user" });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let user = await userModel.findOne({ _id: id });
    await user.deleteOne({ _id: id });
    res.status(200).send({ message: "user deleted" });
  } catch (err) {
    res.status(500).send({ massage: "Server error from post user" });
  }
});

module.exports = app;
