import React from "react";
import logo from "../images/logo@2x.png";
import facebook from "../images/facebook.svg";
import whiteFacebook from "../images/white-facebook@2x.png";
import twitter from "../images/twitter.svg";
import whiteTwitter from "../images/white-twitter@2x.png";
import instagram from "../images/instagram.svg";
import whiteInstagram from "../images/white-instagram@2x.png";
import linkedin from "../images/linkedin.svg";
import whiteLinkedin from "../images/white-linkIn@2x.png";
import Button from "../components/Button";

function Landing() {
  return (
    <div className="relative h-screen">
      <div className="hidden md:block absolute z-10 bg-white px-20 py-5 left-1/2 transform -translate-x-1/2 filter drop-shadow-sm border-solid rounded-b-25p">
        <img src={logo} alt="Umobile Logo" height={19} width={69} />
      </div>
      <div className="hidden md:flex flex-col h-1/4 justify-between absolute z-10 bg-black-transparent backdrop-filter backdrop-blur px-5 py-11 right-0 top-1/2 transform -translate-y-1/2 rounded-l-25p">
        <img src={whiteLinkedin} alt="linkedin" height={19} width={19} />
        <img src={whiteInstagram} alt="instagram" height={19} width={19} />
        <img src={whiteFacebook} alt="facebook" height={19} width={19} />
        <img src={whiteTwitter} alt="twitter" height={19} width={19} />
      </div>
      <div className="flex justify-between items-center p-6 md:hidden">
        <img src={logo} alt="Umobile Logo" height={19} width={69} />
        <div className="flex w-1/4 justify-between items-center">
          <img src={linkedin} alt="linkedin" className="h-5 w-5" />
          <img src={instagram} alt="instagram" className="h-5 w-5" />
          <img src={facebook} alt="facebook" className="h-5 w-5" />
          <img src={twitter} alt="twitter" className="h-5 w-5" />
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row h-90-screen">
        <div className="relative bg-ride bg-cover bg-no-repeat h-1/2 md:h-screen md:w-1/2 bg-center md:bg-left-bottom">
          <Button
            className="absolute bottom-5 left-1/2 md:bottom-1/2 md:left-full transform -translate-x-1/2 md:-translate-x-full"
            left
          >
            Ride With Us
          </Button>
        </div>
        <div className="relative bg-drive bg-cover bg-no-repeat h-1/2 md:h-screen md:w-1/2 bg-right-top md:bg-right-bottom">
          <Button
            className="absolute bottom-5 left-1/2 md:bottom-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 md:translate-y-full"
            right
          >
            Drive & Earn With Us
          </Button>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row h-90-screen">
        <div className="flex flex-col justify-end md:flex-row md:justify-end items-center bg-ride bg-cover bg-no-repeat h-1/2 md:h-screen md:w-1/2 bg-center md:bg-left-bottom">
          <Button
            className="mb-5 md:mb-0 md:transform md:-translate-y-full"
            left
          >
            Ride With Us
          </Button>
        </div>
        <div className="flex flex-col justify-end md:flex-row md:justify-start items-center bg-drive bg-cover bg-no-repeat h-1/2 md:h-screen md:w-1/2 bg-right-top md:bg-right-bottom">
          <Button className="mb-5 md:mb-0" right>
            Drive & Earn With Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
