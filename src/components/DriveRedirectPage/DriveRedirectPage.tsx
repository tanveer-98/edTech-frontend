import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
const DriveRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("userdetails")) {
      navigate("/login");
    }
  }, []);

  const goBackHandler = ()=>{
    navigate('/');
  }
  return (
    <section id="section_drive">
      <nav className="fixed top-0 left-0 w-full flex flex-row flex-start">
        
        
        <img  
          onClick = {goBackHandler}
          src="backarrow.png"
          className="backarrow  relative hover:cursor-pointer group"
          alt="back arrow "
        />
        <span className=" absolute top-[100px] text-white scale-0 group-hover:scale-100">
          Tooltip
        </span>
      </nav>
      <div
        className="mt-10 w-full h-full flex-col bg-black text-white 
    flex justify-center items-center"
      >
        HELLO
      </div>
    </section>
  );
};

export default DriveRedirectPage;
