import React from "react";
import "./logo.css";

const Logo: React.FC = () => {
  const logo = require("./logo.png");
  return (
    <div className="logo">
      <img className="img" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
