// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getRecipeName, getRecipes } from "../../Redux/actions";

// const SearchBar = ({ setCurrentPage }) => {
//   const dispatch = useDispatch();

//   const [input, setInput] = useState("");

//   const handlerInput = (e) => {
//     setInput(e.target.value);
//   };

//   const searchHandler = (inputName) => {
//     // Tu lógica de búsqueda aquí
//     // setCurrentPage("search"); // Si deseas actualizar la página
//     if (name) console.log("Entre a este handler", inputName);
//     dispatch(getRecipeName(inputName));
//     dispatch(getRecipes());
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       searchHandler();
//     }
//   };

//   return (
//     <div className="d-flex align-items-center ml-auto">
//       <input
//         type="text"
//         name="search"
//         placeholder="Search..."
//         value={input}
//         onChange={handlerInput}
//         onKeyDown={handleKeyPress}
//         autoComplete="on"
//       />
//       <button
//         onClick={() => searchHandler(inputName)}
//         className="btn btn-primary ml-2"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="1em"
//           viewBox="0 0 512 512"
//         >
//           <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName, getRecipes } from "../../Redux/actions";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handlerInput = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = (inputName) => {
    // Tu lógica de búsqueda aquí
    // setCurrentPage("search"); // Si deseas actualizar la página
    if (inputName) console.log("Entre a este handler", inputName);
    dispatch(getRecipeName(inputName));
    dispatch(getRecipes());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchHandler(input); // Pasar 'input' como argumento
    }
  };

  return (
    <div className="d-flex align-items-center ml-auto">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={input}
        onChange={handlerInput}
        onKeyDown={handleKeyPress}
        autoComplete="on"
      />
      <button
        onClick={() => searchHandler(input)} // Pasar 'input' como argumento
        className="btn btn-primary ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
