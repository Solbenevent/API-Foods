// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getRecipes, orderAlphabetic } from "../../Redux/actions";
// import Dropdown from "react-bootstrap/Dropdown";
// import Form from "react-bootstrap/Form";
// import "./Dropdown.css";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";

// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {children}
//     &#x25bc;
//   </a>
// ));

// const CustomMenu = React.forwardRef(
//   ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
//     // Corrección aquí
//     const [value, setValue] = useState("");
//     return (
//       <div
//         ref={ref}
//         style={style}
//         className={className}
//         aria-labelledby={labeledBy}
//       >
//         <Form.Control
//           autoFocus
//           className="mx-3 my-2 w-auto"
//           placeholder="Type to order..."
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//         />
//         <ul className="list-unstyled">
//           {React.Children.toArray(children).filter(
//             (child) =>
//               !value || child.props.children.toLowerCase().startsWith(value)
//           )}
//         </ul>
//       </div>
//     );
//   }
// );

// const CustomOrder = ({ setCurrentPage, handleOrderChange }) => {
//   //HOOKS
//   const dispatch = useDispatch();

//   const handleSelectOrder = (option) => {
//     handleOrderChange(option); // Usa la función para actualizar el orden local
//     setCurrentPage(1);
//   };

//   //RENDER!!
//   return (
//     <Dropdown className="custom-dropdown1">
//       <Dropdown.Toggle as={CustomToggle}>Ordenar</Dropdown.Toggle>
//       <Dropdown.Menu as={CustomMenu}>
//         <Dropdown.Item onClick={() => handleSelectOrder("all")}>
//           All
//         </Dropdown.Item>
//         <Dropdown.Item onClick={() => handleSelectOrder("asc")}>
//           A-Z
//         </Dropdown.Item>
//         <Dropdown.Item onClick={() => handleSelectOrder("desc")}>
//           Z-A
//         </Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };

// export default CustomOrder;
