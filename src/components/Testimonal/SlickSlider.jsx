import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./new.css";

let data = [
  {
    name: "MOROJINK",
    subtitle: "Custumer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
  {
    name: "MOROJINK",
    subtitle: "khan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
  {
    name: "MOROJINK",
    subtitle: "seller",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
  },
];

export default function SimpleSlider() {
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
        backgroundColor: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
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
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" fontWeight={"bold"}>
              {item.name}
            </Typography>
            <FormatQuoteIcon
              style={{ color: "#f07b26", height: "40px", width: "40px" }}
            />
          </Box>

          <Typography sx={{ color: "#f07b26" }} variant="h6">
            {item.subtitle}
          </Typography>
          <Typography variant="body1" mt={1}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Slider>
  );
}
