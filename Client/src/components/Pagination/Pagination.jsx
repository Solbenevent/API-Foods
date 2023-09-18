import React from "react";
import "./Pagination.css";

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
    <nav aria-label="Page Navigation example" className="pagination-container">
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
