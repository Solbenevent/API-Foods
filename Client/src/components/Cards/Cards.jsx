import React from "react";
import CardRecipe from "../Card/Card";
import { Row, Col } from "react-bootstrap";

const Cards = ({ recipes }) => {
  return (
    <Row xs={1} md={3} className="g-4">
      {recipes.length > 0 &&
        recipes?.map((recipe) => {
          return (
            <Col key={recipe.id}>
              <CardRecipe
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                name={recipe.name}
                diets={recipe?.diets?.map((diet) => diet.name || diet)}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default Cards;
