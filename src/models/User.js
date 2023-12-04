const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
