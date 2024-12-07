const Recipe = require('../models/recipeModel');

exports.createRecipe = async (recipeData) => {
  const newRecipe = new Recipe(recipeData);
  await newRecipe.save();
  return newRecipe;
};

exports.getAllRecipes = async () => {
  return await Recipe.find({});
};

exports.getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

exports.updateRecipe = async (id, updateData) => {
  return await Recipe.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};
