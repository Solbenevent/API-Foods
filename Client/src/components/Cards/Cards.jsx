import React from "react";
import CardRecipe from "../Card/Card";

const Cards = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 &&
        recipes?.map((recipe) => {
          return (
            <CardRecipe
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              name={recipe.name}
              diets={recipe?.diets?.map((diet) => diet.name || diet)}
            />
          );
        })}
    </div>
  );
};

export default Cards;
