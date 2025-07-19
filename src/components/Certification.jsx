import React from "react";
import Skill from "./Skill";

const Certification = ({ logo, title, description, duration, addtlClass }) => {
  return (
    <>
      <div className="border-l-2 border-neutral-600 pl-6 py-1">
        {/** Role */}
        <div className="flex gap-x-4 mb-2 items-center">
          <div>
            <img
              src={logo}
              className={`${
                addtlClass ? addtlClass : "rounded-full min-w-24 h-24 w-24"
              }`}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="text-sm text-neutral-400">{duration}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
