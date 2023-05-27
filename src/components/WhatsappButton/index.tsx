import React from "react";
import Rocket from "../../../assets/rocket.svg";
import "./styles.css";
import ReactHtmlParser from 'react-html-parser'
interface ISideBarIconProps {
  onclick: () => void;
  children: React.ReactNode;
  text: string;
}
const ButtonToTop = ({ onclick, children, text }: ISideBarIconProps) => {
  return (
    <button onClick={onclick} type="button" className="btnTop group">
      {children}
      <span className="hidden md:block btnTop-tooltip group-hover:scale-100">{ReactHtmlParser(text)}</span>
    </button>
  );
};

export default ButtonToTop;
