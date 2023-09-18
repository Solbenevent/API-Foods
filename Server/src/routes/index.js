const { Router } = require('express');
const multer = require("multer");

const { getRecipeById  } = require("../controllers/getRecipeById");
//const  { getRecipes }  = require("../controllers/getAllRecipes");
//const { fetchAndSaveRecipes } = require("../controllers/getAllRecipes");
const { paginateRecipes } = require("../controllers/paginatedRecipes");
const { searchRecipesNames} = require("../controllers/getRecipeByName");
const {fetchAndSavedDiets } = require("../controllers/getAllDiets");
const { createRecipes } = require("../controllers/createRecipes");
const { deleteRecipe } = require("../controllers/deleteRecipe");
const { filterAndSortRecipes } = require('../controllers/filterAndSortRecipes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//router.get("/recipes", fetchAndSaveRecipes)
router.get("/recipes", paginateRecipes)
router.get("/recipes/name", searchRecipesNames);
router.get("/recipes/filter", filterAndSortRecipes)
router.get("/recipes/:id", getRecipeById );
router.get("/diets", fetchAndSavedDiets);
router.post("/recipes", upload.single("image"), createRecipes);


module.exports = router;