import React from "react";
import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Testimonials = () => {
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
              className="common-card rounded-xl p-10 mb-5 break-inside-avoid-column"
            >
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
