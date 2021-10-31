import React from "react";
import logo from "../images/logo@2x.png";
import Input from "../components/Input";

function Footer() {
  return (
    <footer className="bg-footer w-full bg-no-repeat bg-center px-6 md:py-20">
      <div className="flex flex-col md:flex-row w-full justify-around">
        <div className="md:order-last md:w-1/3">
          <p className="font-bold py-6 mt-12 md:mt-0">Newsletter</p>
          <div className="relative ">
            <div className="absolute w-full">
              <Input
                type="text"
                className="shadow-lg pr-12"
                placeholder="Email"
              />
            </div>
            <div className="absolute top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37.347"
                height="37.347"
                viewBox="0 0 37.347 37.347"
              >
                <path
                  id="Icon_ionic-ios-send"
                  data-name="Icon ionic-ios-send"
                  d="M25.577.059.328,11.064a.579.579,0,0,0,.021,1.052l6.83,3.859a1.1,1.1,0,0,0,1.259-.124L21.9,4.241c.089-.076.3-.22.385-.138s-.048.3-.124.385L10.514,17.612a1.1,1.1,0,0,0-.11,1.314l4.464,7.16a.581.581,0,0,0,1.045-.014L26.355.823A.579.579,0,0,0,25.577.059Z"
                  transform="translate(18.672) rotate(45)"
                  fill="#3b00fe"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="py-4 md:w-1/3">
          <img src={logo} alt="Umobile Logo" />
          <p className="mt-8 text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </p>
        </div>
        <div>
          <p className="font-bold py-4">Support</p>
          <ul className="text-gray-500">
            <li className="py-3">
              <a href="/">Help Center</a>
            </li>
            <li className="py-3">
              <a href="/">Contact Us</a>
            </li>
            <li className="py-3">
              <a href="/">Securities Bulletin</a>
            </li>
            <li className="py-3">
              <a href="/">Documentation</a>
            </li>
            <li className="py-3">
              <a href="/">Partner Portal</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
