import React from "react";
import TitleHeader from "../components/TitleHeader";
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
      id="experience"
      className="flex-center mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full container">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 Driving Impact for Top Brands"
        />
        <div className="mt-32 relative">
          {/* timeline */}
          <div className="timeline-wrapper">
            <div className="timeline" />
            <div className="gradient-line w-1 h-full" />
            <div className="absolute h-full">
              {expLogos.map((expLogo, index) => (
                <div key={index} className="timeline-logo">
                  <img src={expLogo.imgPath} alt="logo" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-50">
            {expCards.map((expCard, index) => (
              <div key={index} className="exp-card-wrapper">
                <div className="exp-card">
                  <div className="absolute top-0 left-0 w-full h-full bg-black curtain-card" />
                  <div className="common-card rounded-xl md:p-10 p-5 mb-5">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <img
                          key={i}
                          src="/images/silver-star.png"
                          alt="star"
                          className="size-12 -ms-3"
                        />
                      ))}
                    </div>
                    <div className="mb-5">
                      <p className="text-white-50 md:text-lg">{expCard.desc}</p>
                    </div>
                    <div>
                      <img src={expCard.imgPath} alt="exp-img" />
                    </div>
                  </div>
                </div>
                <div className="exp-content-wrapper">
                  <div className="expText">
                    <h1 className="font-semibold text-3xl">{expCard.title}</h1>
                    <p className="my-5 text-white-50">🗓️&nbsp;{expCard.date}</p>
                    <p className="text-[#839CB5] italic">Responsibilities</p>
                    <ul>
                      {expCard.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-lg">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
