import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import Flag from "react-country-flag";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const QuickLinks = () => {
  return (
    <Box>
      <Box sx={{ background: "#252525", padding: "40px 0" }}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            color: "white",

            margin: "0 auto",
            padding: { xs: "0 10px", md: "0 50px" },
          }}
        >
          <Grid item xs={12} sm={12} md={4} mb={8}>
            {" "}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CallIcon />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6">Call : +923409495625</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} mb={8}>
            {" "}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <EmailIcon />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6">
                Email : Waqaskhan26394@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} mb={8}>
            {" "}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LocationOnIcon />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6">Location</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">Quick Links</Typography>
            <Box sx={{ display: "flex" }}>
              <List>
                <ListItem sx={{ padding: "0" }}>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText primary="Facebook" />
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText primary="Twitter" />
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText primary="Instagram" />
                  </Link>
                </ListItem>
              </List>
              <List>
                <ListItem sx={{ padding: "0 40px" }}>
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText primary="LinkedIn" />
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "0 40px" }}>
                  <Link
                    href="https://www.github.com"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText primary="GitHub" />
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "0 40px" }}>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText primary="YouTube" />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h5">INSTAGRAM FEEDS</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box
                sx={{
                  border: "3px solid white",
                  height: "40px",
                  width: "60px",
                  maxWidth: "60px",
                  padding: "5px",
                  margin: "5px",
                  transition: "flex-wrap",
                }}
              >
                <img
                  src="/assets/instagram.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  border: "3px solid white",
                  height: "40px",
                  width: "60px",
                  maxWidth: "60px",
                  padding: "5px",
                  margin: "5px",
                  transition: "flex-wrap",
                }}
              >
                {" "}
                <img
                  src="/assets/instagram.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  border: "3px solid white",
                  height: "40px",
                  width: "60px",
                  maxWidth: "60px",
                  padding: "5px",
                  margin: "5px",
                  transition: "flex-wrap",
                }}
              >
                {" "}
                <img
                  src="/assets/instagram.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  border: "3px solid white",
                  height: "40px",
                  width: "60px",
                  maxWidth: "60px",
                  padding: "5px",
                  margin: "5px",
                  transition: "flex-wrap",
                }}
              >
                {" "}
                <img
                  src="/assets/instagram.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  border: "3px solid white",
                  height: "40px",
                  width: "60px",
                  maxWidth: "60px",
                  padding: "5px",
                  margin: "5px",
                  transition: "flex-wrap",
                }}
              >
                {" "}
                <img
                  src="/assets/instagram.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  border: "3px solid white",
                  height: "40px",
                  width: "60px",
                  maxWidth: "60px",
                  padding: "5px",
                  margin: "5px",
                  transition: "flex-wrap",
                }}
              >
                {" "}
                <img
                  src="/assets/instagram.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h5">SIGN UP TO OUR NEWSLETTER</Typography>
            <Box
              mb={4}
              mt={2}
              sx={{
                padding: "15px",
                boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.15)",
                background: "white",
              }}
            >
              <input
                type="text"
                placeholder="Enter Your Email"
                style={{
                  border: "none",
                  outline: "none",
                  color: "#101010",
                  fontSize: "18px",
                }}
              />
            </Box>
            <Button
              style={{
                borderRadius: "6px",
                padding: "8px",
                minWidth: "140px",
                width: "140px",
                background: "#f07b26",
                border: "none",
                color: "whitesmoke",
                fontSize: "17px",
              }}
            >
              Subscribe
            </Button>
          </Grid>
          <Grid mt={2} item xs={12} sm={12} md={12} lg={8}>
            <Typography variant="h4">WaqasKhan</Typography>
          </Grid>
          <Grid
            mt={2}
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <LinkedInIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
            <TwitterIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
            <FacebookIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
            <InstagramIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "white", padding: "25px 0" }}>
        <Typography variant="body1" textAlign={"center"} color={"#252525"}>
          © 2024 All Rights Reserved By Free Html Templates
        </Typography>
      </Box>
    </Box>
  );
};

export default QuickLinks;
