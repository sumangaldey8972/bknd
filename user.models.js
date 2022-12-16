const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  passsword: { type: String },
});

const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;
