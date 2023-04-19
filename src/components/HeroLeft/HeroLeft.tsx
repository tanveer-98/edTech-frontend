import React from 'react'
import CustomPrimaryButton from '../CustomPrimaryButton/CustomPrimaryButton'
import {useNavigate} from 'react-router-dom';
import { verifyToken } from '../Login/service';


interface IUserDetails {
  userDetails :{
    name : string ; 
    token : string;
    mail : string; 
  }
}
const HeroLeft = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    console.log('1')
    let userdetails : IUserDetails | null ;
    if(window.localStorage.getItem('userdetails') !== null ){
      console.log('2')
     userdetails = JSON.parse(window.localStorage.getItem('userdetails')!);
     if(userdetails !== null)
    //  console.log(userdetails.token)
  
     console.log(userdetails.userDetails)
     verifyToken().then(response =>{
      console.log('inside verify')

      // console.log(response.data)
      navigate('/download')
     })
     .catch(err=>{
      console.log('4')
      navigate('/login')
     })
    }

  
    navigate('/login')
  }
  return (
    <div className="text-white flex justify-center items-center ">
     <div className="flex flex-col justify-center items-center w-[80%]">

      {/* <h3> The Best Platform For Educational Material</h3> */}
      <div className="w-full">

      <h3 className="text-left">ALL OF YOUR EDUCATIONAL MATERIALS AT ONE PLACE</h3>
      </div>
      <p className=" mt-4">
      Welcome to Crystal Coaching Classes! We are a team of highly experienced educators, founded by a group of NITians, dedicated to providing top-quality education to students in classes 8 to 12, as well as those preparing for competitive exams like JEE and NEET.

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