import React from "react";
import Pagination from "react-bootstrap/Pagination";

// const AdvancedPagination = ({
//   recipePerPage,
//   totalRecipes,
//   currentPage,
//   handlePaginate,
// }) => {
//   const pageNumbers = Math.ceil(totalRecipes / recipePerPage);

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       handlePaginate(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < pageNumbers) {
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

//   const pageItems = [];
//   for (let num = 1; num <= pageNumbers; num++) {
//     pageItems.push(
//       <Pagination.Item
//         key={num}
//         active={num === currentPage}
//         onClick={() => handlePaginate(num)}
//       >
//         {num}
//       </Pagination.Item>
//     );
//   }

//   return (
//     <Pagination>
//       <Pagination.First
//         onClick={handleFirstPage}
//         disabled={currentPage === 1}
//       />
//       <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />

//       {pageItems}

//       <Pagination.Next
//         onClick={handleNext}
//         disabled={currentPage === pageNumbers}
//       />
//       <Pagination.Last
//         onClick={handleLastPage}
//         disabled={currentPage === pageNumbers}
//       />
//     </Pagination>
//   );
// };

function AdvancedPagination() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default AdvancedPagination;
