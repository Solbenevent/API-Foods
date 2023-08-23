import React from "react";
import "../Pagination/Pagination.css";

const Pagination = ({
  recipePerPage,
  totalRecipes,
  currentPage,
  handlePaginate,
}) => {
  const pageNumbers = Math.ceil(totalRecipes / recipePerPage);

  const renderPageNumbers = () => {
    const buttons = [];
    for (let i = 1; i <= pageNumbers; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePaginate(i)}>
          {i}
        </button>
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
    if (currentPage < pageNumbers) {
      handlePaginate(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      handlePaginate(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== pageNumbers) {
      handlePaginate(pageNumbers);
    }
  };

  return (
    // <div className="container-pag">
    //   <ul className="container-btn">
    //     <li>
    //       <button onClick={handleFirstPage} className="btn-pag">
    //         First
    //       </button>
    //     </li>
    //     <li>
    //       <button onClick={handlePrev} className="btn-pag">
    //         Prev
    //       </button>
    //     </li>
    //     <li>{renderPageNumbers()}</li>
    //     <li>
    //       <button onClick={handleNext} className="btn-pag">
    //         last
    //       </button>
    //     </li>
    //   </ul>
    // </div>

    <div className="container-pag">
      <ul className="container-btn">
        <li>
          <button onClick={handleFirstPage} className="btn-pag">
            First
          </button>
        </li>
        <li>
          <button onClick={handlePrev} className="btn-pag">
            Prev
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button onClick={handleNext} className="btn-pag">
            Last
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
