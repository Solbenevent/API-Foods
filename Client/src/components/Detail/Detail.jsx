import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { detailRecipe, clearDetail } from "../../Redux/actions";
import leftArrow from "../Images/leftArrow.png";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../Detail/Detail.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.detailRecipes);

  useEffect(() => {
    dispatch(detailRecipe(id));
    dispatch(clearDetail());
  }, [dispatch, id]);

  return (
    // <div className="detail-container">
    //   <div>
    //     <Link to="/home">
    //       <button className="btn-detail">
    //         <img src={leftArrow} className="back-detail" alt="Back" />
    //       </button>
    //     </Link>

    //     <div className="detail-name">
    //       <h1>{recipe?.name}</h1>
    //     </div>

    //     <div className="container-img">
    //       <img src={recipe?.image} alt={recipe?.name} className="detail-img" />
    //     </div>

    //     <div className="container-detail-score">
    //       <h3 className="detail-score">{recipe?.healthScore}</h3>
    //     </div>

    //     <div className="container-detail-diets">
    //       {recipe?.diets && recipe.diets.length > 0
    //         ? recipe.diets.join(", ")
    //         : ""}
    //     </div>

    //     <hr />

    //     <div
    //       className="detail-summary"
    //       dangerouslySetInnerHTML={{ __html: recipe?.summary }}
    //     ></div>

    //     <hr />

    //     <div className="container-detail-steps">
    //       {recipe.steps?.map((step, index) => (
    //         <div key={index}>
    //           <p className="detail-steps">{step}</p>
    //         </div>
    //       ))}
    //     </div>

    //     <hr />

    //     <div className="id">
    //       <p className="detail-id">{recipe?.id}</p>
    //     </div>
    //   </div>
    // </div>
    // <Container fluid>
    //   <Card style={{ width: "50rem" }}>
    //     <Card.Body>
    //       <Card.Title>Nombre {recipe?.name}</Card.Title>
    //       <Card.Img variant="top" src={recipe?.image} />
    //       <Card.Text>
    //         {recipe?.id && <ListGroup>ID: #{recipe.id}</ListGroup>}
    //         {recipe?.diets?.map((diet, index) => (
    //           <ListGroup.Item key={index}>
    //             Dietas incluídas {diet}
    //           </ListGroup.Item>
    //         ))}
    //         {recipe?.summary && (
    //           <ListGroup>Descripción {recipe.summary}</ListGroup>
    //         )}
    //         {recipe?.steps?.map((step, index) => (
    //           <ListGroup.Item key={index}>Paso a paso {step}</ListGroup.Item>
    //         ))}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Container>

    // ...

    <Container
      fluid
      className="center-container"
      style={{ backgroundColor: "#8c8c8c" }}
    >
      <Card className="detail-card" style={{ backgroundColor: "#dcdcdc" }}>
        {" "}
        {/* Aplica estilos al Card */}
        <Card.Body>
          <Card.Title className="detail-title">{recipe?.name}</Card.Title>{" "}
          {/* Aplica estilos al título */}
          <div className="detail-image">
            <Card.Img
              className="detail-image"
              variant="top"
              src={recipe?.image}
              style={{ width: "30rem" }}
            />
          </div>
          {/* Aplica estilos a la imagen */}
          <Card.Text>
            {/* <FloatingLabel>ID</FloatingLabel>
            {recipe?.id && (
              <ListGroup className="detail-info">{recipe.id}</ListGroup>
            )} */}
            <FloatingLabel htmlFor="idInput" className="detail-info">
              ID
            </FloatingLabel>
            {recipe?.id && (
              <ListGroup className="detail-info" id="idInput">
                #{recipe.id}
              </ListGroup>
            )}
            <hr />
            <FloatingLabel htmlFor="diets" className="detail-diets">
              DIETAS INCLUÍDAS
            </FloatingLabel>
            {recipe?.diets?.map((diet, index) => (
              <ListGroup.Item className="content-diets" key={index} id="diets">
                {diet}
              </ListGroup.Item>
            ))}
            <hr />
            <FloatingLabel htmlFor="summary" className="detail-info">
              DESCRIPCIÓN
            </FloatingLabel>
            {recipe?.summary && (
              <ListGroup id="summary">
                {/* {recipe.summary} */}
                <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
              </ListGroup>
            )}
            <hr />
            <FloatingLabel htmlFor="steps" className="detail-steps">
              PASO A PASO
            </FloatingLabel>
            {recipe?.steps?.map((step, index) => (
              <ListGroup.Item key={index} id="steps" className="content-steps">
                {step}
              </ListGroup.Item>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Detail;
