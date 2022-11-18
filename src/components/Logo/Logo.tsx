import React from "react";

const Logo: React.FC = () => {
  const logo = require("./logo.png");
  return (
    <div>
      <img className="max-h-10 ml-4" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
