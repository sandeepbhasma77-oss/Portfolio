import React from "react";
import TitleHeader from "../components/TitleHeader";
import ExpCard from "../components/ExpCard";
import { expCards, expLogos } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".curtain-card").forEach((card) => {
      gsap.to(card, {
        scaleX: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card, // ✅ Each card triggers individually
          start: "top 60%",
          //   markers: true,
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
        // markers: true,
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: -100,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text, // ✅ Each text triggers individually
          start: "top 60%",
          // markers: true,
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="work"
      className="flex-center mt-20 py-10 md:py-20 xl:px-0 md:px-10 px-5"
    >
      <div className="w-full h-full container">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 Driving Impact for Top Brands"
        />
        <div className="mt-32 relative">
          {/* timeline */}
          <div className="absolute top-0 xl:left-[39%] left-10 h-full flex justify-center">
            <div className="timeline absolute h-[110%] -top-10 w-20 z-10 bg-black"></div>
            <div className="gradient-line w-1 h-full"></div>
            <div className="absolute h-full">
              {expLogos.map((expLogo, index) => (
                <div
                  key={index}
                  className="timeline-logo common-card rounded-full md:size-20 size-10 flex-center md:-translate-y-7"
                >
                  <img src={expLogo.imgPath} alt="logo" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-50">
            {expCards.map((expCard, index) => (
              <ExpCard key={index} expCard={expCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
