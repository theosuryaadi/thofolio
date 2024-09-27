import React from "react";
import { AppText, companies } from "../constants";

const Companies = () => {
  return (
    <div id="companies" className="p-6 md:py-6 md:px-20 xl:px-36">
      <h1 className="text-center text-[28px] md:text-[36px] font-bold">
        🏢 {AppText.WorkedFor}
        <span className="text-primary">{AppText.Companies}</span>
      </h1>
      <div className=" md:flex md:flex-row md:justify-center gap-8 mt-8">
        {companies.map((company) => (
          <img
            key={company.id}
            src={company.imageUrl}
            className="p-2 m-auto"
            alt="company"
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
