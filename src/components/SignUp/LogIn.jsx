import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  FormControl,
  Button,
  Grid,
  InputBase,
  IconButton,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration to 1000 milliseconds (1 second)
    });
  }, []);

  return (
    <Box m={1}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Grid container>
            <Grid xs={12} sx={{ padding: "5px" }} mt={2}>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                data-aos="fade-right"
              >
                Sign in or create an account
              </Typography>
            </Grid>
            <Grid xs={12} sx={{ padding: "5px" }} mt={2} data-aos="fade-right">
              <Typography variant="h6" sx={{ fontSize: "17px" }}>
                Email address
              </Typography>
              <InputBase
                type="text"
                style={{
                  padding: "5px",
                  borderRadius: "4px",
                  width: "100%",
                  boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.15)",
                }}
              ></InputBase>
            </Grid>
            <Grid xs={12} sx={{ padding: "5px" }} mt={2} data-aos="fade-right">
              <Button
                variant="contained"
                sx={{
                  padding: "10px 30px",
                  width: "100%",
                  backgroundColor: "black",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  fontSize: "17px",
                  color: "white",
                  ":hover": { color: "white", background: "black" },
                }}
              >
                Continue with email
              </Button>
            </Grid>
            <Grid
              xs={12}
              mt={2}
              sx={{
                display: "flex",
                alignItems: "center ",
                justifyContent: "center",
              }}
              data-aos="fade-right"
            >
              <hr
                style={{
                  width: "164px",
                  maxWidth: "164px",
                  height: "0",
                  marginRight: "4px",
                }}
              />
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                or use one of these options
              </Typography>
              <hr
                style={{
                  width: "164px",
                  maxWidth: "164px",
                  height: "0",
                  marginLeft: "4px",
                }}
              />
            </Grid>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderBottom: "0.2px solid #DBDBDB ",
                padding: "5px",
              }}
              height={"160px"}
            >
              <Box
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  width: "70px",
                  height: "70px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ":hover": { cursor: "pointer", border: "0.1px solid green" },
                }}
                data-aos="fade-right"
                
                data-aos-duration="500"
              >
                <IconButton>
                  <svg
                    data-aos="fade-right"
                    style={{ width: "30px", height: "30px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="2443"
                    height="2500"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                    id="google"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    ></path>
                  </svg>
                </IconButton>
              </Box>
              <Box
                 data-aos="fade-right"
                
                 data-aos-duration="1000"
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  width: "70px",
                  height: "70px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ":hover": { cursor: "pointer", border: "0.1px solid green" },
                }}
              >
                <IconButton
                  onClick={() => {
                    console.log("heee");
                  }}
                >
                  <svg
                    style={{ width: "30px", height: "30px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="facebook"
                  >
                    <path
                      fill="#1976D2"
                      d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                    ></path>
                    <path
                      fill="#FAFAFA"
                      fill-rule="evenodd"
                      d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </IconButton>
              </Box>
              <Box
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  width: "70px",
                  height: "70px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ":hover": { cursor: "pointer", border: "0.1px solid green" },
                }}
                data-aos="fade-right"
              
                data-aos-duration="1500"
              >
                <IconButton>
                  <svg
                    style={{ width: "30px", height: "30px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="2036"
                    height="2500"
                    viewBox="0 0 456.008 560.035"
                    id="apple"
                  >
                    <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
                  </svg>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Grid
            itm
            sx={{ borderBottom: "0.2px solid #DBDBDB", padding: "5px" }}
            xs={12}
            mt={2}
          >
            <Typography textAlign={"center"} fontSize={"14px"}>
              By signing in or creating an account, you agree with our{" "}
              <NavLink>Terms & conditions</NavLink> and{" "}
              <NavLink>Privacy statement</NavLink>
            </Typography>
          </Grid>
          <Grid itm xs={12} mt={2}>
            <Typography
              textAlign={"center"}
              fontSize={"14px"}
              color={"#868686"}
            >
              All rights reserved. Copyright (2006 - 2024) - MyPersonal
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogIn;
