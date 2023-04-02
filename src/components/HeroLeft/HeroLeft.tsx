import React from 'react'
import CustomPrimaryButton from '../CustomPrimaryButton/CustomPrimaryButton'

const HeroLeft = () => {
   
  const handleClick = ()=>{

  }
  return (
    <div className="text-white flex justify-center items-center ">
     <div className="flex flex-col justify-center items-center w-[80%]">

      <h3> The Best Platform For Educational Material</h3>
      <p className=" mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Et eveniet odit voluptatum recusandae nihil architecto 
        deserunt harum sapiente.

      </p>
      <div className="flex justify-start w-full mt-[20px]">

      <CustomPrimaryButton
       
         additionalStyles ={{
          // backgroundColor:"blue",
          // marginLeft: "auto",
          width: "auto",
          fontFamily : "Poppins",
          // padding :"10px"
         }}
         onClick = {handleClick}
        
        >
          GET ACCESS TO MATERIALS
        </CustomPrimaryButton>
      </div>
      </div>
    </div>
  )
}

export default HeroLeft