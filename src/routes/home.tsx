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
import Gallery from "../components/Gallery/Gallery";
import Location from "../components/Location";
// import { Blocks } from "react-loader-spinner";
import { PropagateLoader } from "react-spinners";
import ButtonToTop from "../components/ButtonTop";
const home = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector(selecttoggleNav);
  
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const ShowbuttonTop = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else setShow(false);
  };
  window.addEventListener("scroll", ShowbuttonTop);

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
              <Gallery />
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
            <Gallery />
            <Contact />
            <div
            className={` whatsapp ${
              show ? "fade-in-image" : "fade-out-image"
            } `}
          >
            <ButtonToTop
              text="<img width='200px' src='WhatsAppButtonGreenLarge.png' alt='Luitomania Whatsapp'/>
              
              "
              children={
                <a href="https://wa.me/7635983518">
                  <img
                    height="100px"
                    width="100px"
                    src="whatsapp.svg"
                    alt="web whatsapp luitomania"
                  />
                </a>
              }
            />
          </div>
            <Location />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default home;
