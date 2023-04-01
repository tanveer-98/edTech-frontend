import React, { useState } from "react";

import {AiOutlineEye} from 'react-icons/ai'
const PasswordShowHide = ({ field, form ,...rest}: any) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <div className="relative flex w-full mb-[15px]">
     
      <input
        type={showHidePassword ? "text" : "password"}
        {...field}
        className={rest.className}
        placeholder="Password"
      />
      <div className="flex justify-center items-center">
        <AiOutlineEye className=" hover:cursor-pointer w-5 absolute right-[10px]" onClick={() => changeShowHidePassword(!showHidePassword)}/>
      </div>
      </div>
  );
};

export default PasswordShowHide;
