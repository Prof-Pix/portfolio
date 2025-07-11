import React from "react";
import Skill from "./Skill";

const Education = ({ logo, degree, location, duration }) => {
  return (
    <>
      <div className="border-l-2 border-neutral-600 pl-8 py-1">
        {/** Role */}
        <div className="flex gap-x-4 mb-2 items-center">
          <div>
            <img src={logo} className="rounded-full min-w-24 h-24 w-24" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{degree}</h3>
            <p className="text-sm">{location}</p>
            <p className="text-sm text-neutral-400">{duration}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
