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
      id="work"
      className="flex-center mt-20 section-padding xl:px-0"
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
              <div
                key={index}
                className="flex xl:flex-row flex-col-reverse justify-between items-start mb-40 "
              >
                <div className="xl:w-[25vw] xl:translate-y-0 translate-y-10 break-inside-avoid-column exp-card relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-black curtain-card"></div>
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
                <div className="xl:w-[45vw] xl:px-0 md:ps-32 ps-20 overflow-hidden">
                  <div className="expText">
                    <h1 className="font-semibold text-3xl">{expCard.title}</h1>
                    <p className="my-5 text-white-50">🗓️&nbsp;{expCard.date}</p>
                    <p className="text-[#839CB5] italic">Responsibilities</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
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
