import React from "react";
import TechIconCardExperience from "./TechIconCardExperience";
import ModelLoader from "./ModelLoader";

const TechIconCard = ({ techStackIcon }) => {
  return (
    <div className="col-span-1 common-card tech-card xl:rounded-full rounded-lg md:pb-10 border">
      <div className="flex flex-col md:justify-center items-center xl:gap-5 xl:h-[50vh]">
        <div className="h-60 flex-center relative">
          {/* <ModelLoader /> */}
          <TechIconCardExperience model={techStackIcon.modelPath} />
        </div>
        <div className="md:px-10 p-5 w-full">
          <p className="font-semibold md:text-2xl text-lg text-white-50 md:text-center">
            {techStackIcon.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechIconCard;
