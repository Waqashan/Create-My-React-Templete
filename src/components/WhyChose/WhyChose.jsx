import { Grid, Typography, Box, Container } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyChose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration to 1000 milliseconds (1 second)
    });
  }, []);
  
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid
          container
          gap={"30px 10px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid
            item
            xs={4}
            sm={2}
            data-aos="slide-up"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              clipPath: {
                xs: "polygon(0 85%, 0 0, 100% 0, 100% 85%, 65% 85%, 50% 100%, 35% 85%)",
                md: "polygon(0 0, 85% 0, 85% 35%, 100% 50%, 85% 65%, 85% 100%, 0 100%)",
              },
              background: "#f07b26",
              width: " 175px",
              paddingRight: "25px",
              transition: { sm: "all .6s", md: "none" },
              minWidth: "175px",
              height: "125px",
            }}
          >
            {" "}
            <img
              src="/assets/w1.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Grid>
          <Grid item xs={12} sm={9.4} data-aos="slide-up">
            <Typography variant="h5" fontWeight={"bold"}>
              Project done on time
            </Typography>
            <Typography variant="body1">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage, and going through
              the
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sm={2}
            data-aos="slide-up"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              clipPath: {
                xs: "polygon(0 85%, 0 0, 100% 0, 100% 85%, 65% 85%, 50% 100%, 35% 85%)",
                md: "polygon(0 0, 85% 0, 85% 35%, 100% 50%, 85% 65%, 85% 100%, 0 100%)",
              },
              background: "#f07b26",
              width: " 175px",
              paddingRight: "25px",
              transition: { sm: "all .6s", md: "none" },
              minWidth: "175px",
              height: "125px",
            }}
          >
            {" "}
            <img
              src="/assets/w2.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Grid>
          <Grid item xs={12} sm={9.4} data-aos="fade-left">
            <Typography variant="h5" fontWeight={"bold"}>
              Always avaliable
            </Typography>
            <Typography variant="body1">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage, and going through
              the
            </Typography>
          </Grid>{" "}
          <Grid
            item
            xs={4}
            sm={2}
            data-aos="fade-left"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              clipPath: {
                xs: "polygon(0 85%, 0 0, 100% 0, 100% 85%, 65% 85%, 50% 100%, 35% 85%)",
                md: "polygon(0 0, 85% 0, 85% 35%, 100% 50%, 85% 65%, 85% 100%, 0 100%)",
              },
              background: "#f07b26",
              width: " 175px",
              paddingRight: "25px",

              minWidth: "175px",
              height: "125px",
              transition: { sm: "all .6s", md: "none" },
            }}
          >
            {" "}
            <img
              src="/assets/w3.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Grid>
          <Grid item xs={12} sm={9.4} data-aos="slide-up">
            <Typography variant="h5" fontWeight={"bold"}>
              Professional and responsible
            </Typography>
            <Typography variant="body1">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage, and going through
              the
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChose;
