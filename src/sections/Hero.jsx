import React from "react";
import HeroExperience from "../components/models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Badge from "../components/Badge";

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
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="col-span-3 flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <Badge text="🧠 Crafting Digital Solutions" />

            <h1 className="hero-heading">
              <span className="hero-text">Transform</span>
              <span className="inline-block mx-3 overflow-hidden hero-text">
                <img src="/images/person.png" className="hero-img" />
              </span>
              <span className="hero-text">
                Ideas into Seamless Digital Experiences
              </span>
            </h1>

            <p className="text-white-50 md:text-xl">
              Hi, I’m Adrian, a developer based in Croatia with a passion for
              code.
            </p>

            <Button text="See My Work" />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure className="hero-visual col-span-2">
          <HeroExperience />
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
