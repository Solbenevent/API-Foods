import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import image from "../Images/verdebendito.png";
import "./NavBar.css";

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#d9d9d9" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={image} className="logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav flex-row ms-auto"
            style={{ marginLeft: "-10px" }}
          >
            <li className="nav-item margin-right-1 ml-auto w-auto">
              <SearchBar setCurrentPage={setCurrentPage} />
            </li>
            <li className="nav-item margin-right-2 ml-auto w-auto">
              <a className="nav-link" href="/create">
                Create a Recipe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
