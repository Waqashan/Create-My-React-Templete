import { Container, Box, Grid, Button } from "@mui/material";
import React from "react";
import Map from "./map";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

  
const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration to 1000 milliseconds (1 second)
    });
  }, []);
  return (
    <Box sx={{padding:{xs:"20px"}}}>
      {/* <Container  sx={{ border: "1px solid black",height:"200px" }}> */}

      <Grid
        container
        maxWidth="lg"
        margin={"40px auto"}
        justifyContent={"space-between"}
        gap={"20px 0"}
    
      >
        <Grid item xs={12} md={4.5} data-aos="slide-up">
          <Box
            mb={4}
            sx={{
              padding: "15px",
              boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.15)",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{ border: "none", outline: "none", color: "#101010",fontSize:"18px" }}
            />
          </Box>
          <Box
            mb={4}
            sx={{
              padding: "15px",
              boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.15)",
            }}
          >
            <input
              type="text"
              placeholder="Phone Number"
              style={{ border: "none", outline: "none", color: "#101010" ,fontSize:"18px"}}
            />
          </Box>
          <Box
            mb={4}
            sx={{
              padding: "15px",
              boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.15)",
            }}
          >
            <input
              type="text"
              placeholder="Emai"
              style={{ border: "none", outline: "none", color: "#101010",fontSize:"18px" }}
            />
          </Box>
          <Box
            mb={4}
            sx={{
              padding: "15px",
              boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.15)",
            }}
          >
            <input
              type="text"
              placeholder="Message"
              style={{ border: "none", outline: "none", color: "#101010" ,fontSize:"18px"}}
            />
          </Box>
          <Box>
            <Button
              style={{
                borderRadius: "20px",
                padding: "8px",
                minWidth: "140px",
                width: "140px",
                background: "#f07b26",
                border:"none",
                color:"whitesmoke",
                fontSize:"17px",

                
              }}
            >
              SEND
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7.3}
          data-aos="slide-up"
        >

            <Map/>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  );
};

export default ContactPage;
