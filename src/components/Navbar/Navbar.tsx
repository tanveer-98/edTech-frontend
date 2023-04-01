import React, { useState } from "react";
import { NavLinks } from "./NavbarData";
import CustomPrimaryButton from "../CustomPrimaryButton/CustomPrimaryButton";
interface INavLink {
  id: string;
  title: string;
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {

  }

  return (
    <nav className="w-full flex p-6 justify-between items-center navbar bg-black">
      <div className="logo">
        <span className="font-bold font-poppins text-white  text-2xl md:text-5xl  ">
          Crystal
        </span>
        <span className=" font-poppins font-bold bg-gradient-to-tr from-lime-400 to-blue-600 text-xl md:text-4xl text-transparent bg-clip-text">
          Coaching
        </span>
      </div>
      
     {/*  Desktop view LI */}
      <ul
        className="list-none md:flex hidden
    justify-end items-center flex-1"
      >
        {NavLinks.map((element: INavLink, index: number) => {
          return (
            <li
              key={index}
              className="font-poppins
          font-normal cursor-pointer text-[1rem]
          text-white mr-10
          "
            >
              <a href="text-white hover:text-yellow`">{element.title}</a>
            </li>
          );
        })}
      </ul>
      

      <div
        className={`burger-animate md:hidden w-full justify-end py-3 text-center flex items-center ${
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
    </nav>
  );
};

export default Navbar;
