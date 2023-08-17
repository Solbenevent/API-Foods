import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav>
      <div>
        <SearchBar setCurrentPage={setCurrentPage} />
      </div>
    </nav>
  );
};

export default NavBar;
