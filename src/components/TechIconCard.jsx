import React from "react";

const TechIconCard = ({ techStackIcon }) => {
  return (
    <div className="col-span-1 common-card rounded-full">
      <div className="flex-col-center gap-5 h-[50vh]">
        <div className="w-full h-60 flex-center">
          <img src={techStackIcon.imgPath} alt="icon" />
        </div>
        <div className="px-10">
          <p className="font-semibold text-2xl text-white-50 text-center">
            {techStackIcon.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechIconCard;
