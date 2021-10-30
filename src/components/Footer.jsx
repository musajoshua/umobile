import React from "react";
import logo from "../images/logo@2x.png";

function Footer() {
  return (
    <footer className="bg-footer w-full bg-no-repeat bg-center px-6 py-20">
      <div className="flex flex-col md:flex-row w-full justify-around">
        <div className="md:order-last md:w-1/3">
          <p className="font-bold py-4 mt-12 md:mt-0">Newsletter</p>
          <div>
            <input
              type="text"
              className="shadow-lg p-4 w-full"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="py-4 md:w-1/3">
          <img src={logo} alt="Umobile Logo" />
          <p className="mt-7 text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </p>
        </div>
        <div>
          <p className="font-bold py-4">Support</p>
          <ul className="text-gray-500">
            <li className="py-2">
              <a href="/">Help Center</a>
            </li>
            <li className="py-2">
              <a href="/">Contact Us</a>
            </li>
            <li className="py-2">
              <a href="/">Securities Bulletin</a>
            </li>
            <li className="py-2">
              <a href="/">Documentation</a>
            </li>
            <li className="py-2">
              <a href="/">Partner Portal</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
