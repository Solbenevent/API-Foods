import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, getRecipes, filterByDiets } from "../../Redux/actions";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import "./Dropdown.css";

import DropdownItem from "react-bootstrap/esm/DropdownItem";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    // Corrección aquí
    const [value, setValue] = useState("");
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const FiltersDropdown = ({ setCurrentPage }) => {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  //const [selectedDiet, setSelectedDiet] = useState(null);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleAllRecipes = (selectedValue) => {
    if (selectedValue === "all") {
      dispatch(getRecipes());
      setCurrentPage(1);
    }
  };

  const handleSelectedDiet = (diet) => {
    // dispatch(filterByDiets(diet));
    // setCurrentPage(1);
    // if (!diet) return dispatch(getRecipes());
    if (diet) {
      dispatch(filterByDiets(diet));
      setCurrentPage(1);
    }
  };

  return (
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Dietas
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item onClick={() => handleSelectedDiet("all")}>
          All
        </Dropdown.Item>
        {diets?.map((diet, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelectedDiet(diet)}>
            {diet}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FiltersDropdown;
