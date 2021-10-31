import React from "react";

import Navbar from "./../components/Navbar";

import DriverGroup from "./../images/drive_group.png";
import PhoneDriver from "./../images/phone_driver.png";
import PhoneDouble from "./../images/phone_double.png";
import SignInWithGoogle from "./../images/signin@2x.png";
import { AppStoreBadge, PlayStoreBadge } from "./../components/Badge";
import { Card, StepCard } from "./../components/Card";

import Input from "../components/Input";

function Driver() {
  return (
    <section>
      <section className="bg-map text-center md:px-16">
        <Navbar />
        <div className="flex flex-wrap p-6">
          <div className="flex items-center justify-center md:justify-end md:w-1/2 xl:w-3/4 md:order-last">
            <img src={DriverGroup} alt="DriverGroup" />
          </div>
          <div className="flex items-center justify-center flex-col w-full md:items-start md:w-1/2 xl:w-1/4">
            <h1 className="text-black font-bold text-5xl capitalize md:tracking-wide xl:text-6xl md:text-left">
              drive and earn with{" "}
              <span className="text-electric-ultramarine">US</span>!
            </h1>
            <p className="capitalize text-sm md:text-lg text-dark-silver">
              got no car but you want to drive and earn?
            </p>
            <p className="capitalize text-sm md:text-lg text-dark-silver">
              let's keep you moving
            </p>
            <div className="flex w-full justify-center md:justify-start">
              <PlayStoreBadge />
              <AppStoreBadge />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-y-auto text-center xl:overflow-y-hidden">
        <h1 className="mt-8 text-lg text-black font-bold">Why US?</h1>
        <div className="flex flex-wrap bg-phone z-10 relative before:-z-10 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-white-transparent md:before:bg-none md:bg-opacity-10 xl:bg-none bg-no-repeat bg-center bg-contain">
          <div className="flex flex-wrap w-full md:w-1/2 xl:w-1/3">
            <Card
              number={1}
              content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            deserunt soluta amet`}
            />
            <Card
              number={2}
              content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            deserunt soluta amet`}
            />
          </div>
          <div className="hidden xl:flex w-1/3 items-center justify-center">
            <img src={PhoneDriver} alt="Phone" className="w-1/2" />
          </div>
          <div className="flex flex-wrap w-full md:w-1/2 xl:w-1/3">
            <Card
              number={3}
              content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            deserunt soluta amet`}
            />
            <Card
              number={4}
              content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            deserunt soluta amet`}
            />
          </div>
        </div>
      </section>
      <section className="text-center">
        <h1 className="mt-8 text-lg text-black font-bold">
          Keep Moving In 3 Steps
        </h1>
        <div className="md:bg-stepmap md:bg-no-repeat md:bg-center md:bg-contain">
          <div className="flex flex-col md:flex-row md:py-20 items-start md:h-[500px]">
            <StepCard
              className="mx-8 my-6 md:mx-16 md:my-12 "
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
            />
            <StepCard
              className="mx-8 my-6 md:mx-16 md:my-12  self-end"
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
            />
            <StepCard
              className="mx-8 my-6 md:mx-16 md:my-12 "
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap bg-mappath bg-top bg-cover bg-no-repeat p-6 md:p-8 md:my-16">
        <div className="w-full lg:w-1/2">
          <img src={PhoneDouble} alt="Phone" />
        </div>
        <div className="flex w-full lg:w-1/2 justify-center">
          <div className="px-6 bg-white xl:w-1/2">
            <h1 className="font-bold text-center text-gray-700 mb-4 mt-8">
              Sign Up
            </h1>
            <div>
              <Input
                placeholder="Your Email"
                type="text"
                className="border-2 border-solid border-grey-400 my-2"
              />
              <Input
                placeholder="Password"
                type="text"
                className="border-2 border-solid border-grey-400 my-2"
              />
              <Input
                placeholder="Re-Type Password"
                type="text"
                className="border-2 border-solid border-grey-400 my-2"
              />
              <Input
                type="submit"
                value="Confirm"
                className="my-2 bg-blue-violet text-white rounded"
              />
            </div>
            <p className="text-center my-8">OR</p>
            <div className="border-solid border-b-2 border-gray-300 flex justify-center py-6">
              <img src={SignInWithGoogle} alt="SignInWithGoogle" />
            </div>
            <p className="text-gray-500 text-center my-4">
              Already Have an Account{" "}
              <span className="text-blue-500 underline font-bold text-sm">
                Login?
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Driver;
