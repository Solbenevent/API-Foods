import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FiltersDropdown from "../CustomToggle/CustomToggle";

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav>
      <SearchBar setCurrentPage={setCurrentPage} />
      <FiltersDropdown setCurrentPage={setCurrentPage} />
    </nav>
  );
};

export default NavBar;
