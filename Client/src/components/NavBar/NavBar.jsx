import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav>
      <SearchBar setCurrentPage={setCurrentPage} />
    </nav>
  );
};

export default NavBar;
