
const { Recipe, Diet } = require("../db");
const results = require("../../apiResults");
const { Op } = require("sequelize");
const { getAllInfo, getDBInfo } = require("../controllers/getAllRecipes");

const getDBByName = async (name) => {
    try {
        const recipes = await Recipe.findAll({
            include: Diet,
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        return recipes;
    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}


const searchRecipesNames = async (req, res) => {
    const { name } = req.query;
    try {
        if(name) {
            const infoNames = await getDBByName(name);
            const simplifiedRecipes = infoNames.map(recipe => ({
                id: recipe.id,
                name: recipe.name,
                image: recipe.image,
                diets: recipe.diets?.map(diet => diet.name),
                // Otros campos necesarios
            }));
            res.status(200).json(simplifiedRecipes);
        } else res.status(404).json({ message: "Receta no encontrada"});
        
    } catch (error) {
        res.status(400).json({ message: "Name parameter is missing" });
    }
}

module.exports = {
     searchRecipesNames,
}