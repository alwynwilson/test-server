const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    quantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product