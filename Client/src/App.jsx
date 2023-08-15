import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRecipes } from './Redux/actions';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
//import CreateRecipe from './components/Form/CreateRecipe';
import CreateRecipe from './components/Form/Form';

function App() {
  const dispatch = useDispatch();

  const getAllRecipes = async () => {
    try {
      dispatch(getRecipes())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllRecipes()
  }, [])


  return (
    <div className="App">
      <Routes>
     <Route path = "/" element = {<Landing />} />
     <Route path = "/home" element = {<Home />} />
     <Route path = "/detail/:id" element = {<Detail />} />
     <Route path = "/create" element = {<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;

