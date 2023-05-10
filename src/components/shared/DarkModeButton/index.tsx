import React from 'react'
import "./styles.css"
import moon from '../../../assets/moon-svgrepo-com.svg'
import sun from '../../../assets/sun-svgrepo-com.svg'
interface IProps{
    toggler: ()=>void;
}
const DarkModeButton = ({toggler}:IProps) => {
  const def = JSON.parse(window.localStorage.getItem('darkMode')||"false");
    const handleChange = () => {
        // // console.log('button onChange')
        toggler();
    }
  return (
    <div className="darkmode-toggler">
    <input onChange={toggler} type="checkbox" checked={def} id="darkmode-input"/>
    <label  htmlFor="darkmode-input" id="darkmode-label">
    <img  src={sun} alt="nothing" className="sun" />
    <img src={moon} alt="nothing" className="moon" />

    </label>  
    </div>

  )
}

export default DarkModeButton