import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
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
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: -0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 Driving Impact for Top Brands"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((expCard, index) => (
              <div
                key={index}
                className="flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between "
              >
                <div className="xl:w-2/6">
                  <div className="common-card timeline-card relative z-30 rounded-xl md:p-10 p-5 mb-5">
                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <img
                          key={i}
                          src="/images/star.png"
                          alt="star"
                          className="size-5"
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
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={expCard.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">
                          {expCard.title}
                        </h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{expCard.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {expCard.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
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
