import React from 'react'
import Rocket from '../../../assets/rocket.svg'
import './index.css'
interface ISideBarIconProps{
    onclick : () => void;
    children : React.ReactNode;
    text:string;
}
const ButtonToTop = ({onclick,children,text}: ISideBarIconProps) => {
  return (
    <button onClick ={onclick} type="button" className="btnTop group">
    
    {children}
    <span className=" btnTop-tooltip group-hover:scale-100">{text}</span>

    </button>
  )
}

export default ButtonToTop