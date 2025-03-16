import React from "react";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className="common-card rounded-xl p-10 mb-5 break-inside-avoid-column">
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
        <p className="text-white-50 text-lg">{testimonial.review}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="">
          <img src={testimonial.imgPath} alt="" />
        </div>
        <div className="">
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-white-50">{testimonial.mentions}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
