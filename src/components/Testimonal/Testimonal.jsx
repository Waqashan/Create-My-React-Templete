import React from "react";
import { Box, Typography } from "@mui/material";
import SlickSlider from "./SlickSlider";
import WhyChose from "../WhyChose/WhyChose";
const Testimonal = () => {
  return (
    <>
    <Box
      sx={{
        height:"530px",
        maxHeight:"530px",
        maxWidth: "100%",
        backgroundImage: `url(/assets/client-bg.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment:"fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      mb={6}
    >
      <Box
        sx={{
       
          maxWidth: {xs:"95%",md:"70%"},
          width: "100%",
          padding: "1px",
          
        }}
      >
        <Typography textAlign={"center"} variant="h4" mb={3} color={"white"}>
          TESTIMONIAL
        </Typography>

        <Box>
          <SlickSlider />
        </Box>
      </Box>
    
    </Box>

</>
  );
};

export default Testimonal;
