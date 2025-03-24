import React from "react";
import HeroExperience from "../components/models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  return (
    <section className="">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="bg" />
      </div>
      <div className="grid md:grid-cols-2 relative z-10">
        <div className="flex-col-center">
          <div className="md:px-20 px-5 flex flex-col gap-7">
            <div className="bg-black-200 py-2 px-4 rounded-full w-fit">
              <p>🧠 Crafting Digital Solutions</p>
            </div>
            <div className="xl:text-6xl md:text-3xl text-xl font-semibold w-[33vw] xl:leading-20">
              <h1 className="">
                Transform
                <span className="inline-block mx-3">
                  <img src="/images/person.png" alt="person" />
                </span>
                Ideas into Seamless Digital Experiences
              </h1>
            </div>
            <p className="text-white-50 text-xl">
              Hi, I’m Adrian, a developer based in Croatia with a passion for
              code.
            </p>
            <div className="w-fit cursor-pointer flex items-center gap-1 bg-white-50 text-black rounded-lg px-6 py-3">
              <p>See My Work</p>
              <img src="/images/arrow-right.svg" alt="arrow" />
            </div>
          </div>
        </div>
        <div className="h-[80vh]">
          <HeroExperience />
        </div>
      </div>
      {/* counter section */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
