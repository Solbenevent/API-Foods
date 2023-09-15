import React, { useCallback } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import MyPagination from "../Pagination/Pagination";
//import AdvancedPagination from "../Pagination/AdvancedPagination";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from "../../Redux/actions";
import "../Home/Home.css";
import { Nav } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  //const recipes = useSelector((state) => state.recipes);
  const filteredRecipe = useSelector((state) => state.filteredRecipe);

  // const [currentPage, setCurrentPage] = useState(1);
  // const recipesPerPage = 10;

  // const indexOfLastRecipe = currentPage * recipesPerPage;
  // const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  // const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  // const totalPages = Math.ceil(recipes.length / recipesPerPage);

  // const handlePaginate = (pageNumber) => {
  //   if (pageNumber >= 1 && pageNumber <= totalPages) {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  //!
  const [currentPage, setCurrentPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const recipesPerPage = 10; // Declarar recipesPerPage y asignar un valor adecuado

  let currentRecipes = [];

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/recipes?page=${currentPage}&recipesPerPage=${recipesPerPage}`
      )
      .then((response) => {
        console.log("Respuesta de la solicitud:", response.data); // Agrega esta línea para depurar
        const receivedRecipes = response.data.recipes;
        setCurrentRecipes(receivedRecipes); // Actualiza el estado currentRecipes
        setTotalRecipes(response.data.totalRecipes);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Soy el catch del useEff");
      });
  }, [currentPage]);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handlePaginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />

      <h1>¡Welcome! Here are the recipes you are looking for</h1>

      <div>
        <Pagination
          // recipesPerPage={recipesPerPage}
          // totalPages={totalPages} // Cambia esta línea
          // totalRecipes={recipes?.length}
          // currentPage={currentPage}
          // handlePaginate={handlePaginate}
          recipesPerPage={recipesPerPage}
          totalRecipes={totalRecipes}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
          currentRecipes={currentRecipes}
        />
      </div>
      <div>
        <Cards
          recipes={filteredRecipe.length > 0 ? filteredRecipe : currentRecipes}
        />
      </div>
    </div>
  );
};

export default Home;
