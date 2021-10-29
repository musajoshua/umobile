import React, { useState } from "react";
import Hamburger from "./Hamburger";
import logo from "../images/logo@2x.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative bg-white md:bg-transparent p-6 drop-shadow-sm">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Umobile Logo" height={19} width={69} />
        <ul
          className={` ${
            !isOpen
              ? "hidden md:flex md:w-11/12 md:justify-start md:items-center"
              : "absolute top-16 left-0 text-right bg-white w-full px-6"
          }`}
        >
          <li className="py-3 md:py-0 md:px-2">About</li>
          <li className="py-3 md:py-0 md:px-2">Book a Driver</li>
          <li className="pt-3 pb-9 md:py-0 md:px-2">Become a Driver</li>
        </ul>

        <Hamburger
          className="md:hidden"
          open={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
