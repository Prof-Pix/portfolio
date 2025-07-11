import React from "react";
import Skill from "./Skill";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Project = ({ title, descriptions, techstack }) => {
  return (
    <>
      <div className="border-l-2 border-neutral-600 pl-8 py-2">
        {/** Role */}
        <div className="flex gap-x-6 mb-2 items-center">
          <div>
            <img
              src="ph.svg"
              className="rounded-md overflow-hidden h-28 max-w-80 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-lg">{title}</h3>

            {/** Contribution */}
            <div className="mb-4 flex flex-col gap-y-2">
              {descriptions?.map((description) => (
                <div className="flex items-start gap-x-2">
                  <p className="text-neutral-400">•</p>
                  <p className="text-sm text-neutral-300">{description}</p>
                </div>
              ))}
            </div>

            {/** Tech Stack Used */}
            <div className="flex gap-x-2 mb-4">
              {techstack?.map((skill) => (
                <Skill skillType="experience" skillTitle={skill} />
              ))}
            </div>

            <div className="flex gap-x-4">
              <div className="flex items-center gap-x-1 cursor-pointer text-neutral-400 hover:text-neutral-50 duration-75">
                <FaGithub />
                <p className=" ">View Code</p>
              </div>
              <div className="flex items-center gap-x-1 cursor-pointer text-neutral-400 hover:text-neutral-50 duration-75">
                <FaLocationArrow />
                <p className=" ">Live Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
