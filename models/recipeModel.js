const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time_to_prepare: { type: Number, required: true },
  ingredients: [ingredientSchema],
  description: { type: String, required: true },
  author: { type: String, required: true },
  thumbnail_url: { type: String },
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", recipeSchema);

