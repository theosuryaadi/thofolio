import React from "react";
import { AppText } from "../constants";

import { FaInstagramSquare, FaMedium, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primaryDark text-center text-white px-4 py-10 ">
      <h1 className="font-bold text-2xl ml-2">{AppText.footerTitle}</h1>
      <p className="mt-2">{AppText.footerDesc}</p>
      <p className="font-bold mt-1">{AppText.footerQuotes}</p>
      <div className="my-6 border-t m-auto border-gray-100 opacity-30"></div>
      <p>{AppText.copyright}</p>
      <div className="flex justify-center mt-2 gap-2">
        <a href="https://www.instagram.com/thofolio9/" target="_blank">
          <FaInstagramSquare
            size={32}
            className="text-gray-200 hover:scale-110 duration-300 cursor-pointer"
          />
        </a>
        <a href="https://medium.com/@theosuryaadi" target="_blank">
          <FaMedium
            size={32}
            className="text-gray-200 hover:scale-110 duration-300 cursor-pointer"
          />
        </a>
        <a href="https://www.youtube.com/@mythofolio" target="_blank">
          <FaYoutubeSquare
            size={32}
            className="text-gray-200 hover:scale-110 duration-300 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
