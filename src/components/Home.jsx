import React from "react";
import { ReactTyped } from "react-typed";
import { homeImage } from "../assets";
import { AppText } from "../constants";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="p-6 md:grid md:grid-cols-2 md:px-10">
      <div className="m-auto">
        <h1 className="text-[36px] md:text-[40px] font-bold">
          {AppText.hello}
        </h1>
        <h1 className="text-[36px] md:text-[40px] font-bold">{AppText.Theo}</h1>
        <h1 className="text-[28px] md:text-[40px] font-bold">
          {AppText.as}
          <span className="text-primary">
            <ReactTyped
              strings={[AppText.UIUXDesigner, AppText.FrontedDeveloper]}
              typeSpeed={60}
              backSpeed={60}
              loop
            ></ReactTyped>
          </span>
        </h1>
        <h1 className="text-gray-400 mt-4">{AppText.aboutMeDescripion}</h1>
        <div className="flex mt-4">
          <button className="bg-primary text-white mr-4 py-2 px-4 transition-all ease-in-out hover:scale-110 hover:bg-primaryDark hover:font-semibold rounded-md duration-500">
            Resume
          </button>
          <a href="https://www.instagram.com/thofolio9/" target="_blank">
            <FaInstagramSquare
              size={40}
              className="text-gray-200 mr-4 hover:scale-110 hover:text-pink-500 duration-300 cursor-pointer"
            />
          </a>
          <a href="https://medium.com/@theosuryaadi" target="_blank">
            <FaMedium
              size={40}
              className="text-gray-200 mr-4 hover:scale-110 hover:text-black duration-300 cursor-pointer"
            />
          </a>
          <a href="https://www.youtube.com/@mythofolio" target="_blank">
            <FaYoutubeSquare
              size={40}
              className="text-gray-200 mr-4 hover:scale-110 hover:text-red-600 duration-300 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <img
        src={homeImage}
        alt="homeImage"
        className="w-[300px] mx-auto mt-8 md:mt-0 md:w-full"
      />
    </div>
  );
};

export default Home;
