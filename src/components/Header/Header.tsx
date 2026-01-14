import React from "react";
import Logo from "@/components/Logo/Logo";
import Profile from "@/components/Profile/Profile";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Header: React.FC = () => {
  const location = useLocation();
  const isCoursesTabActive =
    location.pathname === "/" || location.pathname.startsWith("/courses");

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "text-sm",
                  (isActive || isCoursesTabActive) &&
                    "bg-accent text-accent-foreground"
                )
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/authors"
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "text-sm",
                  isActive && "bg-accent text-accent-foreground"
                )
              }
            >
              Authors
            </NavLink>
          </nav>
        </div>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
