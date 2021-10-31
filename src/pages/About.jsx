import React from "react";
import Navbar from "../components/Navbar";
import { CircularCard, StepCard } from "../components/Card";
import ShieldSVG from "../images/shield.png";
import ClockSVG from "../images/clock.png";
import DiamondSVG from "../images/diamond.png";

function About() {
  return (
    <section>
      <section className="bg-map text-center md:px-16">
        <Navbar />
        <div className="flex flex-wrap p-6 text-center">
          <div className="flex flex-col items-center justify-center w-full md:mx-48">
            <h1 className="text-black font-bold text-5xl capitalize md:tracking-wide xl:text-6xl md:text-left">
              About <span className="text-electric-ultramarine">US</span>!
            </h1>
            <p className="capitalize text-sm text-dark-silver mt-10">
              We provide an avenue for you to ride, in the comfort of your own
              car. As we provide well equipped drivers to keep you moving at all
              times.We provide an avenue for you to ride, in the comfort of your
              own car. As we provide well equipped drivers to keep you. We
              provide an avenue for you to ride, in the comfort of your own car.
              As we provide well equipped drivers to keep you moving at all
              times.We provide an avenue for you to ride, in the comfort of your
              own car. As we provide well equipped drivers to keep you
            </p>
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="my-6 md:my-10 md:mr-24">
                <StepCard
                  iconLeft={true}
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
                />
              </div>
              <div className="my-6 md:my-10 md:ml-24">
                <StepCard
                  iconLeft={true}
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
                />
              </div>
              {/* <StepCard content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet" /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-y-auto text-center xl:overflow-y-hidden">
        <h1 className="mt-8 text-lg text-black font-bold">Our Core Values</h1>
        <div className="flex flex-wrap w-4/5 mx-auto md:h-screen justify-center md:justify-around items-center bg-none md:bg-corevalues md:bg-opacity-10 xl: bg-no-repeat bg-center bg-contain">
          <CircularCard
            className="mt-8 mb-4 self-center"
            svg={ShieldSVG}
            title="We Prioritise Your Safety"
            content="We’re commited to keeping you safe, that’s why we take our drivers through an intensive process oftraining and retraining."
          />
          <CircularCard
            className="my-8 self-end"
            svg={ClockSVG}
            title="Your Convience is key"
            content="Our drivers are readily available, so you never have to worry over driving yourself. Arrive at your destination clear headed"
          />
          <CircularCard
            className="mt-4 my-8 self-start"
            svg={DiamondSVG}
            title="Luxury you can afford"
            content="Arriving in style with any of our driver, shows that there are levels to these things you even get to choose how your driver arrives in flex."
          />
          {/* <div className="flex flex-wrap w-full md:w-1/2 xl:w-1/3">
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
          </div> */}
        </div>
      </section>
    </section>
  );
}

export default About;
