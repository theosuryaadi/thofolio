import React from "react";
import { AppText, skillsList, workDetails } from "../constants";

const Skills = () => {
  return (
    <div id="skills" className="p-6 md:py-6 md:px-20 xl:px-36">
      <h1 className="text-center text-[28px] md:text-[36px] font-bold">
        🛠️ {AppText.Skills}
        <span className="text-primary">{AppText.Experience}</span>
      </h1>
      <div className="md:grid md:grid-cols-2 mt-8 md:mt-0">
        <ul className="flex flex-row items-center justify-center gap-8 p-8">
          {skillsList.map((skillList) => (
            <li key={skillList.id}>
              {" "}
              <img src={skillList.icon} className="w-[50px]" alt="icon" />
            </li>
          ))}
        </ul>
        <div className="p-8">
          {workDetails.map((workDetail) => (
            <div key={workDetail.id} className="flex flex-row mt-4">
              <h1 className="font-bold text-[20px] text-primary">
                {workDetail.year}
              </h1>
              <div className="ml-10">
                <h1 className="font-bold">{workDetail.position}</h1>
                <p>{workDetail.compnayName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
