import React from "react";
import HeroExperience from "../components/models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  return (
    <section>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="bg" />
      </div>
      <div className="grid md:grid-cols-2 relative z-10 xl:mt-0 mt-32">
        <div className="flex-col-center md:w-full w-screen">
          <div className="md:px-20 px-5 flex flex-col gap-7">
            <div className="bg-black-200 py-2 px-4 rounded-full w-fit">
              <p>🧠 Crafting Digital Solutions</p>
            </div>
            <div className="xl:text-6xl text-3xl font-semibold xl:w-[33vw] xl:leading-20">
              <h1>
                Transform
                <span className="inline-block mx-3 overflow-hidden">
                  <img src="/images/person.png" alt="person" className="size-5 md:size-10 object-contain" />
                </span>
                Ideas into Seamless Digital Experiences
              </h1>
            </div>
            <p className="text-white-50 md:text-xl">
              Hi, I’m Adrian, a developer based in Croatia with a passion for
              code.
            </p>
            <div className="w-fit cursor-pointer flex items-center gap-1 bg-white-50 text-black rounded-lg px-6 py-3">
              <p>See My Work</p>
              <img src="/images/arrow-right.svg" alt="arrow" />
            </div>
          </div>
        </div>
        <div className="xl:h-[80vh] h-[40vh] md:w-full w-screen">
          <HeroExperience />
        </div>
      </div>
      {/* counter section */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
