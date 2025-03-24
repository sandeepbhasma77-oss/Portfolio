import React from "react";
import HeroExperience from "../components/models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="/">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="bg" />
      </div>
      <div className="grid-2-cols relative z-10 xl:mt-20 mt-32">
        <div className="flex-col-center md:w-full w-screen">
          <div className="padding-x-lg flex flex-col gap-7">
            <div className="bg-black-200 py-2 px-4 rounded-full w-fit">
              <p>🧠 Crafting Digital Solutions</p>
            </div>
            <div className="xl:text-6xl text-3xl font-semibold xl:w-[33vw] xl:leading-20">
              <h1>
                <span className="hero-text">Transform</span>
                <span className="inline-block mx-3 overflow-hidden hero-text">
                  <img
                    src="/images/person.png"
                    alt="person"
                    className="size-5 md:size-10 object-contain"
                  />
                </span>
                <span className="hero-text">
                  Ideas into Seamless Digital Experiences
                </span>
              </h1>
            </div>
            <p className="text-white-50 md:text-xl">
              Hi, I’m Adrian, a developer based in Croatia with a passion for
              code.
            </p>
            <Button text={"See My Work"} />
          </div>
        </div>
        <div className="xl:h-[80vh] h-[40vh] md:w-full w-screen">
          <HeroExperience />
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
