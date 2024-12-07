const recipeService = require('../services/recipeService');
const asyncHandler = require("express-async-handler")
const mongoose=require('mongoose')

exports.createRecipe = asyncHandler(async (req, res) => {
  const recipe = await recipeService.createRecipe(req.body);
  res.status(201).json(recipe);
});

exports.getAllRecipes = asyncHandler(async (req, res) => {
  const recipes = await recipeService.getAllRecipes();
  res.status(200).json(recipes);
});


  
exports.getRecipeById = asyncHandler(async (req, res) => {
    const recipeId=req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        res.status(400).json({ error: "Invalid recipe ID format" });
      }
    const recipes = await recipeService.getRecipeById(recipeId);
   
    if (!recipes) {
      res.status(404).json({error: "Recipe not found."})
     
    }
    res.status(200).json(recipes);
  });


exports.updateRecipe = asyncHandler(async (req, res) => {
    const { id } = req.params; 
    const updatedRecipe = await recipeService.updateRecipe(id, req.body);
    
    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found." }); 
    }
    
    res.status(200).json(updatedRecipe);
  });
  
 
  exports.deleteRecipe = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const recipe = await recipeService.getRecipeById(id);
    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }
    await recipeService.deleteRecipe(id);
    res.status(200).json({message:"Recipe deleted successfully"}); 
});
