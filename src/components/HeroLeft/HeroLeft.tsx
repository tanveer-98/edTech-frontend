import React from 'react'
import CustomPrimaryButton from '../CustomPrimaryButton/CustomPrimaryButton'

const HeroLeft = () => {

  const handleClick = ()=>{

  }
  return (
    <div className="text-white flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center w-[80%]">

      <h3 className="
      bg-gradient-to-r from-yellow-100 to-yellow-400
      bg-clip-text text-transparent
      text-4xl md:text-6xl font-poppins 
      font-extrabold
      text-left
      
      "> The Best Platform For Educational Material</h3>
      <p className="text-gray-300 font-poppins mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Et eveniet odit voluptatum recusandae nihil architecto 
        deserunt harum sapiente.

      </p>
      <div className="flex justify-start w-full ">

      <CustomPrimaryButton
         label ="GET ACCESS TO MATERIALS"
       
         additionalStyles ={{
          // backgroundColor:"blue",
          // marginLeft: "auto",
          width: "auto",
          fontFamily : "Poppins",
          // padding :"10px"
         }}
         onClick = {handleClick}
        />
      </div>
      </div>
    </div>
  )
}

export default HeroLeft