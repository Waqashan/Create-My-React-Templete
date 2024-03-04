import React from "react";
import { Box, Typography } from "@mui/material";
import SimpleSlider from "../Testimonal/SlickSlider";
import SlickSlider from "./SlickSlider1";
const MainBgsec1 = () => {
  return (
    <Box
      sx={{
        height: "500px",
        maxHeight:"500px",
        maxWidth: "100%",
        backgroundImage: `url(/assets/slider-bg.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
        backgroundSize: "cover",
        display:"flex",
        justifyContent:"center",
      }}
    >
      <Box sx={{width:"80%",marginTop:"50px"}}>
       <SlickSlider/>
      </Box>
    </Box>
  );
};

export default MainBgsec1;
