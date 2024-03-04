import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./style.css";
let data = [
  {
    name: "ARCHITECT BUILDER CONSTRUCTION SERVICES",
    subtitle: "Custumer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
  {
    name: "ARCHITECT BUILDER CONSTRUCTION SERVICES",
    subtitle: "khan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
  {
    name: "ARCHITECT BUILDER CONSTRUCTION SERVICES",
    subtitle: "seller",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
  {
    name: "ARCHITECT BUILDER CONSTRUCTION SERVICES",
    subtitle: "seller",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
  {
    name: "ARCHITECT BUILDER CONSTRUCTION SERVICES",
    subtitle: "seller",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
];

export default function SlickSlider() {
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>, // Remove previous arrow
    nextArrow: <></>, // Remove next arrow
    beforeChange: (current, next) => setActiveSlide(next), // Update active slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      ref={sliderRef}
      style={{
        color: "white",
      }}
      className="custom-slider"
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            maxWidth: "100%",
            boxSizing: "border-box",
            padding: "30px",
          }}
        >
          <Box mb={5}>
            <Typography variant="h3" fontSize={"2.5rem"} fontWeight={"bold"}>
              ARCHITECT
              <br /> BUILDER CONSTRUCTION <br />
              SERVICES
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            {" "}
            <button
              style={{
                cursor: "pointer",
                padding: "10px 30px",
                background: "#f07b26",
                border: "none",
                color: "whitesmoke",
                fontSize: "17px",
              }}
            >
              Subscribe
            </button>
            <button
              style={{
                cursor: "pointer",
                padding: "10px 30px",

                background: "black",
                border: "none",
                color: "whitesmoke",
                fontSize: "17px",
              }}
            >
              Subscribe
            </button>
          </Box>
        </Box>
      ))}
    </Slider>
  );
}
