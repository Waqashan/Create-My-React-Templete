import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import Flag from "react-country-flag";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
}));

const HeaderTop = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("us");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} border={"1px solid black"}>
        <Grid item xs={12} md={12}>
          <Box sx={{ color: "white" }} component={"nav"}>
            <Grid container backgroundColor={"#252525"} padding={"20px 20px"}>
              <Grid
                item
                xs={2}
                sm={2}
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
              >
                <div>
                  <select
                    style={{
                      padding: "8px 5px",
                      border: "none",
                      outline: "none",
                      borderRadius: "6px",
                    }}
                    id="language-select"
                    value={selectedCountry}
                    onChange={handleChange}
                    // Hide the actual select element
                  >
                    <option value="us">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div style={{ padding: "2px 5px" }}>
                  {selectedCountry && (
                    <Flag
                      countryCode={selectedCountry}
                      svg
                      style={{ height: "20px", width: "40px" }}
                    />
                  )}
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={8}
                textAlign={"center"}
                display={"flex"}
                justifyContent={"center"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <CallIcon
                    sx={{ display: { xs: "none", sm: "block", md: "block" } }}
                  />
                  <Typography
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                    variant="h6"
                  >
                    Call : +923409495625
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {" "}
                  <EmailIcon
                    sx={{ display: { xs: "none", sm: "block", md: "block" } }}
                  />
                  <Typography
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                    variant="h6"
                  >
                    Email : waqaskhan26394@gmail.com
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {" "}
                  <LocationOnIcon
                    sx={{ display: { xs: "none", sm: "block", md: "block" } }}
                  />{" "}
                  <Typography
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                    variant="h6"
                  >
                    Location
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sm={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "flex-end",
                }}
              >
                <LinkedInIcon
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      borderRadius: "50%",
                      border: "1px solid white",
                      padding: "5px",
                    },
                  }}
                />
                <TwitterIcon
                  sx={{
                    display: { xs: "none", sm: "block" },
                    ":hover": {
                      cursor: "pointer",
                      borderRadius: "50%",
                      border: "1px solid white",
                      padding: "5px",
                    },
                  }}
                />
                <FacebookIcon
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      borderRadius: "50%",
                      border: "1px solid white",
                      padding: "5px",
                    },
                  }}
                />
                <InstagramIcon
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      borderRadius: "50%",
                      border: "1px solid white",
                      padding: "5px",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderTop;
