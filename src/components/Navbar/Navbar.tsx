import React, { useState } from "react";
import { NavLinks } from "./NavbarData";
import CustomPrimaryButton from "../CustomPrimaryButton/CustomPrimaryButton";
interface INavLink {
  id: string;
  title: string;
}
import {
  selecttoggleNav,
  toggleToggleNav,
} from "../../store/globals/globalsSlice";
import { useAppDispatch, useAppSelector } from "../../store";

import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { Link } from "react-scroll";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector(selecttoggleNav);

  const handleToggle = () => {
    dispatch(toggleToggleNav());
    const element = document.getElementsByTagName("body")[0];

    if (element.classList.contains("overflow-hidden")) {
      element.classList.remove("overflow-hidden");
    } else element.classList.add("overflow-hidden");
  };

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <nav className="w-full flex p-6 justify-between items-center navbar bg-black">
      <div className={` md:ml-[2%] ${toggle ? "blur-lg" : ""}`}>
        <span className="font-bold font-poppins text-white  text-2xl md:text-5xl  ">
          Crystal
        </span>
        <span className=" font-poppins font-bold bg-gradient-to-tr from-lime-400 to-blue-600 text-xl md:text-4xl text-transparent bg-clip-text">
          Coaching
        </span>
      </div>

      {/*  Desktop view LI */}
      <ul
        className=" md:flex hidden
    justify-end items-center flex-1"
      >
        <Link
          to="aboutus"
          smooth={true}
          offset={600}
          // key={index}
          className="
           cursor-pointer text-2xl
          font-bold font-poppins text-white hover:text-yellow-300 
           mr-10
          "
          onClick={handleClick}
        >
          {/* <a className="font-bold font-poppins text-white hover:text-yellow"> */}
          ABOUT US
          {/* About Us */}
          {/* </a> */}
        </Link>

        <Link
          to="aboutus"
          smooth={true}
          offset={800}
          // key={index}
          className="
           cursor-pointer text-2xl
          font-bold font-poppins text-white hover:text-yellow-300 
           mr-10
          "
          onClick={handleClick}
        >
          {/* <a className="font-bold font-poppins text-white hover:text-yellow"> */}
          CONTACT US
          {/* About Us */}
          {/* </a> */}
        </Link>
      </ul>

      <div
        className={` burger-animate md:hidden w-full justify-end py-3 text-center flex items-center ${
          toggle ? "" : " b-animate-start"
        }`}
      >
        <button
          id="menu-btn"
          className={`p-2 rounded-md z-30 inline-block ml-[10%] mr-[10%] md:hidden focus:outline-none hamburger  ${
            toggle ? "open" : ""
          }`}
          onClick={handleToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <NavbarMobile toggleHam={handleToggle} toggle={toggle} />
    </nav>
  );
};

export default Navbar;
