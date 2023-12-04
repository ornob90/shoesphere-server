const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  brandLogo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
  },
  shippingPrice: {
    type: Number,
    required: true,
  },
  sizes: {
    type: [Number],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  buyingCost: {
    type: Number,
    required: true,
    min: 0,
  },
  profitPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
});

// Auto-calculate sellPrice before saving
productSchema.pre("save", function (next) {
  this.sellPrice =
    this.buyingCost + (this.buyingCost * this.profitPercentage) / 100;
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
