import React from "react";
import { testimonials } from "../constants";
import TestimonialsCard from "../components/TestimonialsCard";
import TitleHeader from "../components/TitleHeader";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center py-10 md:py-20 md:px-10 px-5">
      <div className="w-full h-full container">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
