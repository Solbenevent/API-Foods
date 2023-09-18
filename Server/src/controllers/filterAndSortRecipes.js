const { Recipe, Diet } = require("../db");


const filterAndSortRecipes = async (req, res) => {
   const { diet, sortBy } = req.query; 
   const { page, recipesPerPage } = req.query; 
    try {
  
        const offset = (page - 1) * recipesPerPage;

        let recipes = await Recipe.findAll({
            include: {
                model: Diet,
                where: diet ? {name: { [Op.iLike]: `%${diet}%`}} : {},
            },
            offset: offset,
            limit: parseInt(recipesPerPage),
        });

        if(sortBy === "asc") {
            recipes.sort((a,b) => a.name.localeCompare(b.name));
        } else if(sortBy === "desc") {
            recipes.sort((a, b) => b.name.localeCompare(a.name));
        }
        res.status(200).json({ recipes });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las recetas filtradas/ordenadas"})
    }
}

module.exports = { filterAndSortRecipes }; 