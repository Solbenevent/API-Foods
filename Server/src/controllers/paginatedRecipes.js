const { Recipe } = require("../db");

const paginateRecipes = async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const recipesPerPage = parseInt(req.query.recipesPerPage) || 12;
  const offset = (page - 1) * recipesPerPage;

    try {
      const recipes = await Recipe.findAll({
        limit: recipesPerPage,
        offset: offset,
      });
      
      const totalRecipes = await Recipe.count();
      
      res.json({
        recipes,
        totalRecipes,
      });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las recetas"})
    }
}

module.exports = {
    paginateRecipes
}