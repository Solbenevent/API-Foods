import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const CardRecipe = ({ id, name, image, diets }) => {
  const navigate = useNavigate();

  return (
    // <div onClick={() => navigate(`/detail/${id}`)} className="card-container">
    //     <div className="card-name">
    //     <h1 className="name-card">{name}</h1>
    //     </div>
    //     <div className="card-image">
    //         <img src={image} className="image-card"/>
    //     </div>
    //     <div className="card-diets">
    //       {diets?.map((diet, index) => (
    //         <p key={index} className="diets-card">{diet}</p>
    //       ))}
    //     </div>
    // </div>
    <Card style={{ width: "19rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {diets?.map((diet, index) => (
            <ListGroup.Item key={index}>{diet}</ListGroup.Item>
          ))}
        </Card.Text>
        <Card.Link href={`/detail/{id}`}>Go!</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardRecipe;
