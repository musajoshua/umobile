import React from "react";

import Navbar from "./../components/Navbar";

import RideGroup from "./../images/ride_group.png";
import PhoneRider from "./../images/phone_rider.png";
import PhoneDouble from "./../images/phone_double.png";
import { AppStoreBadge, PlayStoreBadge } from "./../components/Badge";
import { Card, StepCard } from "./../components/Card";

function Rider() {
  return (
    <section>
      <section className="bg-map text-center md:px-16">
        <Navbar />
        <div className="flex flex-wrap p-6">
          <div className="flex items-center justify-center md:justify-end md:w-1/2 xl:w-3/4 md:order-last">
            <img src={RideGroup} alt="RideGroup" />
          </div>
          <div className="flex items-center justify-center flex-col w-full md:items-start md:w-1/2 xl:w-1/4">
            <h1 className="text-black font-bold text-5xl capitalize md:tracking-wide xl:text-6xl">
              book a <span className="text-electric-ultramarine">driver</span>!
            </h1>
            <p className="capitalize text-sm text-dark-silver">
              got a car but you're too tired to drive?
            </p>
            <p className="capitalize text-sm text-dark-silver">
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
        <div className="flex flex-wrap bg-phone md:bg-opacity-10 xl:bg-none bg-no-repeat bg-center bg-contain">
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
            <img src={PhoneRider} alt="Phone" className="w-1/2" />
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
              className="mx-16 my-12"
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
            />
            <StepCard
              className="mx-16 my-12 self-end"
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
            />
            <StepCard
              className="mx-16 my-12"
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap min-h-2/3 bg-mappath bg-top bg-cover bg-no-repeat p-6">
        <div className="w-full lg:w-1/2 lg:order-last">
          <img src={PhoneDouble} alt="Phone" />
        </div>
        <div className="text-center mt-4 md:p-8 lg:text-left lg:w-1/2">
          <p className="text-3xl text-black font-bold my-2">
            Move with Umobile
          </p>
          <p className="text-3xl text-black font-bold">Anytime, Anyday</p>
          <p className="text-gray-500 mt-5 text-sm lg:w-3/4">
            Let’s paint you a picture, you’ve got tons of meetings planned out
            for the day, and maybe a hangout or two with the besties, Driving
            yourself around can be a tad bit stressful. Our suggestion? kick it
            in the backseat of your car, while our driver takes you everywhere
            you need to be safely.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Rider;
