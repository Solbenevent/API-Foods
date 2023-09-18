import React, { useCallback } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from "../../Redux/actions";
import "../Home/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  //const recipes = useSelector((state) => state.recipes);
  const filteredRecipe = useSelector((state) => state.filteredRecipe);

  //! Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const recipesPerPage = 10; // Declarar recipesPerPage y asignar un valor adecuado

  let currentRecipes = [];
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  //! Recipes per page
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/recipes?page=${currentPage}&recipesPerPage=${recipesPerPage}`
        // `http://localhost:3001/recipes?page=${currentPage}&recipesPerPage=${recipesPerPage}&diet=${currentDiet}&order=${currentOrder}`
      )
      .then((response) => {
        const receivedData = response.data;
        setRecipes(receivedData.recipes);
        setTotalRecipes(receivedData.totalRecipes);
        console.log(receivedData);
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
          recipesPerPage={recipesPerPage}
          totalRecipes={totalRecipes}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
          currentRecipes={currentRecipes}
        />
      </div>
      <div>
        <Cards recipes={recipes.length > 0 ? recipes : currentRecipes} />
      </div>
    </div>
  );
};

export default Home;
