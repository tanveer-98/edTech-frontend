import React from "react";
import Rocket from "../../../assets/rocket.svg";
import ReactHtmlParser from 'react-html-parser'
import "./styles.css";
interface ISideBarIconProps {
  onclick?: () => void;
  children: any;
  text: string;
}
const ButtonToTop = ({ onclick, children, text }: ISideBarIconProps) => {

  return (
    <button onClick={onclick} type="button" className="btnTop group">
      {children}
      <div className="btnTop-tooltip group-hover:scale-100">{ReactHtmlParser(text)}</div>
    </button>
  );
};

export default ButtonToTop;
