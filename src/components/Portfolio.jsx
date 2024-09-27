import React from "react";
import { AppText, portfolios } from "../constants";

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-6 xl:px-36">
      <h1 className="text-center text-[28px] md:text-[36px] font-bold">
        🗃️ {AppText.Portfolio}
      </h1>
      <div className="p-6 md:px-20 mt-2">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="bg-white rounded-2xl shadow overflow-hidden mt-6"
            >
              <img
                src={portfolio.imageUrl}
                alt="portfolio"
                className="w-full"
              />
              <div className="p-6">
                <div className="flex space-x-2 mb-4">
                  {portfolio.tools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool}
                      className="w-[28px]"
                      alt="tools"
                    />
                  ))}
                </div>
                <h1 className="font-bold text-lg mt-4">{portfolio.title}</h1>
                <p className="text-gray-400 text-sm mt-2">{portfolio.desc}</p>
                <p className="bg-primaryDark text-sm text-white w-min py-1 px-2 mt-4 rounded-md">
                  {portfolio.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
