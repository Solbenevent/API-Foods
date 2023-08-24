import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FiltersDropdown from "../CustomToggle/CustomToggle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav>
      <SearchBar setCurrentPage={setCurrentPage} />
      <FiltersDropdown />
    </nav>
  );
};

export default NavBar;
