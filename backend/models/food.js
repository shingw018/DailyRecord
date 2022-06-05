const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  energy: {
    type: Number,
    required: true,
  },
  carbohydrates: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  sugar: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

exports.Food = Food;
exports.foodSchema = foodSchema;
