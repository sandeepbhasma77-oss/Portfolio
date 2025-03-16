import React from "react";

const TechIconCard = ({ techStackIcon }) => {
  return (
    <div className="col-span-1 common-card lg:rounded-full rounded-4xl md:pb-10">
      <div className="flex md:flex-col flex-row-reverse justify-between md:justify-center items-center lg:gap-5 lg:h-[50vh]">
        <div className="md:h-52 lg:h-60 flex-center">
          <img src={techStackIcon.imgPath} alt="icon" />
        </div>
        <div className="px-10 md:w-full w-52">
          <p className="font-semibold md:text-2xl text-lg text-white-50 md:text-center">
            {techStackIcon.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechIconCard;
