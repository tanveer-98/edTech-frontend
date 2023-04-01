
import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const ButtonContainer = styled("div")({
  display : 'flex',
  width: '100%',
  justifyContent : 'start',
  alignItems : 'center',
  marginTop : '20px'

});

const CustomPrimaryButton = ({
  label,
  additionalStyles,
  disabled,
  onClick,
  hoverStyles,
  className
}: any) => {
  return (
    <ButtonContainer>
        <Button
          sx={{
            border : "1px solid yellow",
            background : 'linear-gradient(to right bottom, #ffffe0, #ffdf00)',
            color: "black",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            width: "auto",
            height: "40px",
            // marginBottom : "10px"
            ":hover":{
                background : "transparent",
                // bgcolor : "yellow",
                color : "yellow"
            }
          }}
        //   className="MuiButton"
          className={className}
          style={additionalStyles ? additionalStyles : {
        
          }}
          disabled={disabled}
          onClick ={onClick}
        >
        {label}
        </Button>
      
    </ButtonContainer>
  );
};

export default CustomPrimaryButton;
