import React, { useState, useEffect } from "react";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const Navbar = (props) => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row justify-center md:justify-between items-center p-5 ${
          props.mode === "dark"
            ? "bg-gray-900/90 border-gray-700"
            : "bg-transparent border-amber-300/30"
        } backdrop-blur-sm border-b shadow-sm top-0 z-10 transition-colors duration-300`}
      >
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <h1
            className={`text-2xl font-extrabold ${
              props.mode === "dark" ? "text-amber-400" : "text-amber-800"
            } hover:opacity-80 transition-colors duration-300`}
          >
            My Portfolio
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <nav className="flex flex-wrap justify-center space-x-2 mb-4 md:mb-0">
            <a
              href="#Home"
              className={`px-4 py-2 rounded-lg font-medium ${
                props.mode === "dark"
                  ? "text-gray-200 hover:text-amber-400 hover:bg-gray-800/60"
                  : "text-amber-800 hover:text-amber-600 hover:bg-amber-100/60"
              } transition-all duration-300`}
            >
              Home
            </a>
            <a
              href="#About"
              className={`px-4 py-2 rounded-lg font-medium ${
                props.mode === "dark"
                  ? "text-gray-200 hover:text-amber-400 hover:bg-gray-800/60"
                  : "text-amber-800 hover:text-amber-600 hover:bg-amber-100/60"
              } transition-all duration-300`}
            >
              About
            </a>
            <a
              href="#Projects"
              className={`px-4 py-2 rounded-lg font-medium ${
                props.mode === "dark"
                  ? "text-gray-200 hover:text-amber-400 hover:bg-gray-800/60"
                  : "text-amber-800 hover:text-amber-600 hover:bg-amber-100/60"
              } transition-all duration-300`}
            >
              Projects
            </a>
            <a
              href="#Contact"
              className={`px-4 py-2 rounded-lg font-medium ${
                props.mode === "dark"
                  ? "text-gray-200 hover:text-amber-400 hover:bg-gray-800/60"
                  : "text-amber-800 hover:text-amber-600 hover:bg-amber-100/60"
              } transition-all duration-300`}
            >
              Contact
            </a>
          </nav>
          <div className="mb-4 md:mb-0">
            <button
              className={`px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                props.mode === "dark"
                  ? "bg-amber-400 text-gray-900 hover:bg-amber-300 focus:ring-amber-400"
                  : "bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800 focus:ring-amber-500"
              }`}
              onClick={props.handleToggle}
            >
              {props.mode === "dark" ? (
                <img src={sun} alt="Light Mode" className="w-5 h-5" />
              ) : (
                <img src={moon} alt="Dark Mode" className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
