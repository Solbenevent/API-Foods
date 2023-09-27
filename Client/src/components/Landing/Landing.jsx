import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../Landing/Landing.css";
const Landing = () => {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    navigate("/home");
  };

  return (
    <div className="bg-image">
      <div className="container">
        <div className="animated-text">
          <h1>¡Bienvenidos a Cocina Creativa!</h1>
          <p className="get-started" onClick={handleGetStartedClick}>
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
