import React, { useState } from "react";
import { logo } from "../assets";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toogleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="p-6 xl:px-36 bg-white shadow">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={logo} className="h-10" alt="logo" />
          <h1 className="text-primary font-extrabold text-xl ml-2">thofolio</h1>
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex flex-row">
            <li className="mr-4 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
              <a href="#companies">Companies</a>
            </li>
          </ul>
        </div>
        <div className="my-auto md:hidden">
          {!navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
              onClick={toogleNavbar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer float-right"
              onClick={toogleNavbar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`${
          navbar ? "max-h-80" : "max-h-0"
        } overflow-hidden duration-500 ease-in-out`}
      >
        <ul className="flex flex-col items-center p-2">
          <li className="p-3 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="p-3 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-3 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="p-3 transition-all ease-in-out hover:scale-110 hover:text-primary hover:font-bold cursor-pointer duration-300">
            <a href="#companies">Companies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
