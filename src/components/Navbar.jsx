import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import logo from "../images/logo@2x.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative bg-white md:bg-transparent p-6 drop-shadow-sm">
      <div className="flex justify-between items-center">
        <NavLink className="md:text-lg" to="/">
          <img src={logo} alt="Umobile Logo" height={19} width={69} />
        </NavLink>
        <ul
          className={` ${
            !isOpen
              ? "hidden md:flex md:w-11/12 md:justify-start md:items-center"
              : "absolute top-16 left-0 text-right bg-white w-full px-6"
          }`}
        >
          <li className="py-3 md:py-0 md:px-2">
            <NavLink
              className="md:text-lg"
              activeClassName="relative py-1 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-2/3 md:after:border-solid md:after:border-b-2 md:after:border-electric-ultramarine"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="py-3 md:py-0 md:px-2">
            <NavLink
              className="md:text-lg"
              activeClassName="relative py-1 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-2/3 md:after:border-solid md:after:border-b-2 md:after:border-electric-ultramarine"
              to="/driver"
            >
              Book a Driver
            </NavLink>
          </li>
          <li className="py-3 pb-9 md:py-0 md:px-2">
            <NavLink
              className="md:text-lg"
              activeClassName="relative py-1 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-2/3 md:after:border-solid md:after:border-b-2 md:after:border-electric-ultramarine"
              to="/rider"
            >
              Become a Driver
            </NavLink>
          </li>
        </ul>

        <Hamburger
          className="md:hidden"
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
