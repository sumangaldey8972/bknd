const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sd:sd@cluster0.tzevcc0.mongodb.net/bknd"
  );
};

module.exports = connect;
