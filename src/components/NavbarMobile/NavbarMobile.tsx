import React,{useState} from 'react'
import { Link } from "react-scroll";

const NavbarMobile = ({toggleHam , toggle} :any) => {
  // const [open, setOpen] = useState(false);
  return (
    <div
        id="menu"
        className={`${
          toggle ? "mobile_open" : "mobile_close"
        } md:hidden fixed inset-0 z-20 flex flex-col items-center self-end
        w-[40%] h-full px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase
        divide-y divide-gray-500  bg-gradient-to-r from-black to-slate-900
         mobile-nav
        `}
      >
        <div className="mobile-nav-link w-full py-3 text-left pl-2  font-bold">
          <Link
            to="hero"
            smooth={true}
            offset={-120}
            onClick={toggleHam}
            className="tracking-tight"
          >
            Home
          </Link>
        </div>
        {/* <div className="mobile-nav-link  w-full py-3 text-left pl-2  ">
          <Link
            to="services"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="tracking-tight"
          >
            Services
          </Link>
        </div>{" "} */}
        <div className=" mobile-nav-link  w-full py-3 text-left pl-2 ">
          <Link
            to="aboutus"
            smooth={true}
            offset={-120}
            onClick={toggleHam}
            className="  tracking-tight "
          >
            About Us
          </Link>
        </div>{" "}
        {/* <div className="mobile-nav-link  w-full py-3 text-left pl-2  ">
          <Link
            to="projects"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="  tracking-tight"
          >
            Projects
          </Link>
        </div>{" "} */}
        {/* <div className="mobile-nav-link  w-full py-3 text-left pl-2 ">
          <Link
            to="faq"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="  tracking-tight  block"
          >
            FAQ
          </Link>
        </div> */}
        {/* <div
          className="mobile-nav-link w-full py-3 text-left pl-2 "
          onClick={toggleHam}
        >
          <Link
            to="newsletter"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="  tracking-tight block w-full"
          >
            NewsLetter
          </Link>
        </div> */}
        <div className="mobile-nav-link  w-full py-3 text-left pl-2 ">
          <Link
            to="contactus"
            onClick={toggleHam}
            smooth={true}
            offset={-120}
            className="tracking-tight "
          >
            Contact Us
          </Link>
        </div>
      </div>
  )
}

export default NavbarMobile