import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <NavLink to="/"></NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/web"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Web
        </NavLink>
        <NavLink
          to="/cloud"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Cloud
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
