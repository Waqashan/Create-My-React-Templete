import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration to 1000 milliseconds (1 second)
    });
  }, []);
  return (
    <Box mt={6} mb={10}>
      <Grid
        container
        sx={{ padding: { xs: "0px 30px", md: "0" } }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        // height={"60vh"}
      >
        <Grid item xs={12} md={5.2} data-aos="zoom-in-up">
          <Typography variant="h3" fontWeight={"bold"}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem" }} mt={4}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </Typography>
          <Box mt={4}>
            <button
              style={{
                background: "#f07b26",
                padding: "20px 50px",
                cursor: "pointer",
                border: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Read More
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5.2} data-aos="zoom-out-down">
          <Box
            sx={{
              maxHeight: "400px",
              height: "380px",
              maxWidth: "100%",
              backgroundImage: `url(/assets/about-img.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <Box
              sx={{
                maxHeight: "300px ",
                height:"300px",
                width: "7%",
                background: "#f07b26",
                position: "absolute",
                left: "-19px",
                top: "33px",
              }}
            ></Box>
            <Box
              sx={{
                maxHeight: "300px ",
                height:"300px",
                width: "7%",
                background: "#f07b26",
                position: "absolute",
                right: "-19px",
                top: "33px",
                zIndex: "-1",
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
