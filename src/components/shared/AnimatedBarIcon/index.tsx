import React from "react";
import './style.css'
interface IProps{
    onClick : () => void; 
    className : string;
}
const AnimatedBarIcon = ({onClick,className}:IProps) => {
  return (
    <div id="nav-icon2" onClick = {onClick} className={`${className}`}>
      
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    
    
     </div>
  );
};

export default AnimatedBarIcon;
