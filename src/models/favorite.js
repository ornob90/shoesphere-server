const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
