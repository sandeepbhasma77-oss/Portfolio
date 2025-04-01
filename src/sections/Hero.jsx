import React from "react";
import HeroExperience from "../components/models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Badge from "../components/Badge";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
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
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <Badge text="🧠 Crafting Digital Solutions" />

            <div className="hero-text">
              <h1>
                Transform
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img src="/images/person.png" alt="person" />
                        <span>{word}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Seamless</h1>
              <h1>Digital Experiences</h1>
            </div>

            <p className="text-white-50 md:text-xl">
              Hi, I’m Adrian, a developer based in Croatia with a passion for
              code.
            </p>

            <Button text="See My Work" className="md:w-80 md:h-16 w-60 h-12" />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="w-full h-full">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
