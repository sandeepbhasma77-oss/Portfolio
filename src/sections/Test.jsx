"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timelineData } from "../constants";

export default function Home() {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = timelineRef.current;
    const timelineItems = timeline.querySelectorAll(".timeline-item");
    const testimonials = timeline.querySelectorAll(".testimonial-card");

    // Initial setup - hide all items
    gsap.set(timelineItems, { opacity: 0, x: 100 });
    gsap.set(testimonials, { opacity: 0, x: -100 });

    // Create timeline animations
    timelineItems.forEach((item, index) => {
      const testimonial = testimonials[index];

      // Timeline item animation
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });

      // Testimonial animation
      gsap.to(testimonial, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });

      // Line animation
      if (index < timelineItems.length - 1) {
        const line = item.querySelector(".timeline-line");
        gsap.fromTo(
          line,
          { height: 0, opacity: 0 },
          {
            height: "calc(100% + 6rem)",
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 50%",
              end: "bottom 30%",
              scrub: 0.5,
              // markers: true, // Uncomment for debugging
            },
          }
        );
      }
    });

    return () => {
      // Clean up all ScrollTriggers on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional Timeline
        </h1>

        <div ref={timelineRef} className="relative">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 mb-32">
              <div className="md:w-2/5">
                <div
                  className="testimonial-card rounded-lg p-6 bg-gray-900 border-l-4 shadow-lg"
                  style={{ borderColor: item.color }}
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <img
                        key={star}
                        src="/images/star.png"
                        alt="star"
                        className="size-5"
                      />
                    ))}
                  </div>

                  <p className="mb-6 text-gray-300">{item.testimonial.text}</p>

                  <div className="flex items-center">
                    <img
                      src={item.testimonial.logo || "/placeholder.svg"}
                      alt={`${item.testimonial.company} logo`}
                      className="mr-2 size-24"
                    />
                    <span className="font-bold uppercase tracking-wider">
                      {item.testimonial.company}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="timeline-item relative flex">
                  {/* Timeline node and line */}
                  <div className="mr-6 flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                      style={{ backgroundColor: item.color }}
                    >
                      <img
                        src={item.logo || "/placeholder.svg"}
                        className="size-24"
                      />
                    </div>

                    {index === timelineData.length - 1  && (
                      <div
                        className="timeline-line w-1 absolute top-12 left-6 -translate-x-1/2 bg-gradient-to-b"
                        style={{
                          height: "calc(100% + 6rem)",
                          backgroundImage: `linear-gradient(to bottom, ${item.color} 0%, ${item.color} 30%, rgba(75, 85, 99, 0.5) 100%)`,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">
                      {item.position}
                    </h2>
                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-400">{item.period}</span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg text-gray-400 mb-2">
                        Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {item.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1.5">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
