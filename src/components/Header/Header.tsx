import React from "react";
import Logo from "@/components/Logo/Logo";
import Profile from "@/components/Profile/Profile";

const Header: React.FC = () => {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <Logo />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
