import React from "react";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-20 border-solid border-2 border-orange-200 mx-4">
      <Logo />
      <Profile />
    </header>
  );
};

export default Header;
