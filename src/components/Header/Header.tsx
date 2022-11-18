import React from "react";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-20 border-solid border-2 border-indigo-600 mx-4">
      <Logo />
      <Profile />
    </div>
  );
};

export default Header;
