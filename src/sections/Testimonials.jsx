import React, { useRef } from "react";
import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Testimonials = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={handleMouseMove(index)}
              className="card card-border rounded-xl p-10 mb-5 break-inside-avoid-column"
            >
              <div class="glow"></div>
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
                <p className="text-white-50 text-lg">{testimonial.review}</p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
