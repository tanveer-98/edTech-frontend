import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import Navbar from "../components/Navbar/Navbar";
import HeroRight from "../components/HeroRight/HeroRight";
import HeroLeft from "../components/HeroLeft/HeroLeft";
import Hero from "../components/Hero/Hero";
import {
  selecttoggleNav,
  toggleToggleNav,
} from "../store/globals/globalsSlice";
import { useAppDispatch, useAppSelector } from "../store/index";
import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/Footer";

// import { Blocks } from "react-loader-spinner";
import { PropagateLoader } from "react-spinners";
const home = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector(selecttoggleNav);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <PropagateLoader color="#ebff00" />
        </div>
      ) : (
        <div className="w-full h-full">
          {/* Mobile View */}
          <div className="md:hidden">
            <Navbar />
            <div
              className={` ${
                toggle ? "blur-lg pointer-events-none" : "pointer-events-auto"
              } flex flex-col w-full gap-10`}
            >
              <HeroLeft />
              <HeroRight />
            </div>
            <div
              className={` ${
                toggle ? "blur-lg pointer-events-none" : "pointer-events-auto"
              } flex flex-col w-full gap-10`}
            >
              <AboutUs />
            </div>

            <div
              className={` ${
                toggle ? "blur-lg pointer-events-none" : "pointer-events-auto"
              } flex flex-col w-full gap-10`}
            >
              <Contact />
            </div>

            <div
              className={` ${
                toggle ? "blur-lg pointer-events-none" : "pointer-events-auto"
              } flex flex-col w-full gap-10`}
            >
              <Footer />
            </div>
          </div>

          {/* Desktop View */}
          <div className="flex-col hidden md:flex w-full ">
            <Navbar />
            <Hero />
            <AboutUs />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default home;
