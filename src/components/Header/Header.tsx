import React from "react";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo />
      <Profile />
    </div>
  );
};

export default Header;
