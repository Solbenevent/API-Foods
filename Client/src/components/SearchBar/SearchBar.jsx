import React from "react";
//import searchImage from "../Images/busqueda.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes, getRecipeName } from "../../Redux/actions";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../SearchBar/SearchBar.css";

const SearchBar = ({ setCurrentPage }) => {
  const [input, setInput] = useState(""); //el estado input se inicializa con una cadena vacia
  const dispatch = useDispatch();

  const searchHandler = () => {
    if (input) {
      dispatch(getRecipeName(input));
      setCurrentPage(1);
    } else {
      dispatch(getRecipes());
    }
  };

  const handlerInput = (event) => {
    if (!event.target.value) {
      dispatch(getRecipes());
      setInput("");
    } else {
      setInput(event.target.value);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchHandler(event);
    }
  };
  return (
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: "100px" }}
      navbarScroll
    >
      <div>
        <input
          type="text"
          name="search"
          placeholder="Recipe"
          value={input}
          onChange={handlerInput}
          onKeyDown={handleKeyPress}
          autoComplete="off"
        />
        {/* <button onClick={searchHandler} value={input} className="search-btn"><img src={searchImage} alt="search" className="btn-search"/></button> */}
        <button onClick={() => searchHandler()} className="search-btn">
          {/* <img src={searchImage} alt="search" className="btn-search" /> */}
          Buscar
        </button>

        {/* <Link to="/create">
          <button className="create-recipe">Create a Recipe!</button>
        </Link> */}
        <Nav>
          <Nav.Link href="/create">Create a Recipe</Nav.Link>
        </Nav>
      </div>
    </Nav>
  );
};

export default SearchBar;
