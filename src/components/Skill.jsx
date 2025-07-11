import React from "react";

const Skill = ({ skillType, skillTitle }) => {
  let colors = "";

  switch (skillType) {
    case "language":
      colors = "bg-blue-950 text-blue-400";
      break;
    case "framework":
      colors = "bg-green-950 text-green-400";
      break;
    case "backend":
      colors = "bg-violet-950 text-violet-400";
      break;
    case "database":
      colors = "bg-red-950 text-red-400";
      break;
    case "practice":
      colors = "bg-yellow-950 text-yellow-400";
      break;
    case "experience":
      colors = "bg-orange-950 text-orange-400";
      break;
    case "interest":
      colors = "bg-teal-950 text-teal-400";
      break;
    default:
      colors = "bg-white";
  }

  return (
    <div className={`${colors} px-3 py-1 rounded-full`}>
      <p className=" text-xs font-bold">{skillTitle}</p>
    </div>
  );
};

export default Skill;
