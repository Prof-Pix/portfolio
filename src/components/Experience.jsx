import React from "react";
import Skill from "./Skill";

const Experience = ({ role, location, duration, contributions, skills }) => {
  return (
    <>
      <div className="border-l-2 border-neutral-600 pl-8 py-2">
        {/** Role */}
        <div className="flex gap-x-4 mb-2 items-center">
          <div>
            <img src="tiplogo.png" className="rounded-full h-24 w-24" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{role}</h3>
            <p className="text-sm">{location}</p>
            <p className="text-sm text-neutral-400">{duration}</p>
          </div>
        </div>

        {/** Contribution */}
        <div className="mb-4 flex flex-col gap-y-2">
          {contributions?.map((contribution) => (
            <div className="flex items-start gap-x-2">
              <p className="text-neutral-400">•</p>
              <p className="text-sm text-neutral-300">{contribution}</p>
            </div>
          ))}
        </div>

        {/** Tech Stack Used */}
        <div className="flex gap-x-2">
          {skills?.map((skill) => (
            <Skill skillType="experience" skillTitle={skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
