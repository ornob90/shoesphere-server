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

  rating: {
    type: Number,
  },
  sellCount: {
    type: Number,
    default: 0,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

// Auto-calculate sellPrice before saving
// productSchema.pre("save", function (next) {
//   this.price =
//     this.buyingCost + (this.buyingCost * this.profitPercentage) / 100;
//   next();
// });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
