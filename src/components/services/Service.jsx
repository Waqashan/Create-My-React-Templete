import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import SlickSlider from "../Testimonal/SlickSlider";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

let arrayData = [
  {
    icon: "/assets/s1.png",
    duration:"300",
    name: "CONSTRUCTION SERVICES",
    description:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using  ",
  },
  {
    icon: "/assets/s2.png",
    duration:"600",
    name: "MANAGEMENT",
    description:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using  ",
  },
  {
    icon: "/assets/s3.png",
    name: "BUILDING MODELING",
    duration:"900",
    description:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
  },
  {
    icon: "/assets/s4.png",
    duration:"1500",
    name: "PRE CONSTRUCTION",
    description:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
  },
];


const Service = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <Box sx={{ flexGrow: 1, padding: "30px" }}>
      <Grid
        container
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          padding: "40px 90px",
          borderRadius: "12px",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={"bold"} gutterBottom>
            Services
          </Typography>
          <Typography variant="body1" fontSize={"1.2rem"} gutterBottom>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </Typography>
        </Grid>
        {arrayData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            key={index}
            mt={4}
            p={2}
            data-aos="zoom-in"
            data-aos-duration={item.duration}
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <Box>
              <Box
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: "green",
                    filter:
                      "invert(5%) sepia(1%) saturate(6223%) hue-rotate(187deg)",
                  },
                }}
              >
                <img
                  src={item.icon}
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Typography
                mt={4}
                variant="h6"
                sx={{ fontWeight: "800", fontSize: "16px" }}
              >
                {item.name}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
              <Button
                sx={{ marginTop: "20px", backgroundColor: "#f07b26" }}
                variant="contained"
              >
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;
