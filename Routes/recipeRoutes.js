const express = require('express');
const { createRecipe, getAllRecipes } = require('../controllers/recipeController');
const { updateRecipe, deleteRecipe,getRecipeById } = require('../controllers/recipeController');
const {validateToken}=require('../middlewares/validateTokenHandler')
const router = express.Router();

router.use(validateToken)

router.route('/').get(getAllRecipes)

router.route('/').post(createRecipe)

router.route('/:id').put(updateRecipe)

router.route('/:id').delete(deleteRecipe)

router.route('/:id').get(getRecipeById)

module.exports = router;
