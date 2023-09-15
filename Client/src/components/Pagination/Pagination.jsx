import React from "react";
import { render } from "react-dom";

// import "../Pagination/Pagination.css";

// const Pagination = ({
//   recipePerPage,
//   totalRecipes,
//   totalPages,
//   currentPage,
//   handlePaginate,
// }) => {
//   const pageNumbers = Math.ceil(totalRecipes / recipePerPage);
//   console.log(pageNumbers);

//   const renderPageNumbers = () => {
//     const buttons = [];
//     for (let i = 1; i <= totalPages; i++) {
//       buttons.push(
//         <button key={i} onClick={() => handlePaginate(i)}>
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       handlePaginate(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       // Cambia de pageNumbers a totalPages
//       handlePaginate(currentPage + 1);
//     }
//   };

//   const handleFirstPage = () => {
//     if (currentPage !== 1) {
//       handlePaginate(1);
//     }
//   };

//   const handleLastPage = () => {
//     if (currentPage !== pageNumbers) {
//       handlePaginate(pageNumbers);
//     }
//   };

//   return (
//     <div className="container-pag">
//       <ul className="container-btn">
//         <li>
//           <button onClick={handleFirstPage} className="btn-pag">
//             First
//           </button>
//         </li>
//         <li>
//           <button onClick={handlePrev} className="btn-pag">
//             Prev
//           </button>
//         </li>
//         {renderPageNumbers()}
//         <li>
//           <button onClick={handleNext} className="btn-pag">
//             Last
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
//!
const Pagination = ({
  recipesPerPage,
  totalRecipes,
  currentPage,
  handlePaginate,
}) => {
  console.log(totalRecipes);
  console.log("chau");
  console.log(recipesPerPage);
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const renderPageNumbers = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <a className="page-link" href="#" onClick={() => handlePaginate(i)}>
            {i}
          </a>
        </li>
      );
    }
    return buttons;
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePaginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePaginate(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page Navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={handlePrev}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {renderPageNumbers()}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={handleNext}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
