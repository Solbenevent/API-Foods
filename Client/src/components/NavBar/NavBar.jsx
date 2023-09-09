import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FiltersDropdown from "../CustomToggle/CustomToggle";
import CustomOrder from "../CustomToggle/CustomOrder";

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav>
      <SearchBar setCurrentPage={setCurrentPage} />
      <FiltersDropdown setCurrentPage={setCurrentPage} />
      <CustomOrder setCurrentPage={setCurrentPage} />
    </nav>
  );
};

export default NavBar;
