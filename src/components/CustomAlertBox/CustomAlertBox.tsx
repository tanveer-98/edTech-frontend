import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const CustomAlertBox = () => {
  const notify = () => toast("Wow so easy");
  return (
    <div className="absolute top-0 z-20">
     
  
    <ToastContainer
  
    />
      
    </div>
  );
};

export default CustomAlertBox;
