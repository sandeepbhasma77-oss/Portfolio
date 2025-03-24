import React from "react";

const FeatureCard = ({ card }) => {
  return (
    <div className="common-card rounded-xl p-8 flex flex-col gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full">
        <img src={card.imgPath} alt={card.title} />
      </div>
      <h3 className="text-white text-2xl font-semibold mt-2">{card.title}</h3>
      <p className="text-white-50 text-lg">{card.desc}</p>
    </div>
  );
};

export default FeatureCard;
