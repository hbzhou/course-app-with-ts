import React from "react";

const Logo: React.FC = () => {
  const logo = require("./logo.png");
  return (
    <div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
