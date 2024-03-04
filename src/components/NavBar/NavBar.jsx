import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import "./Nav.css"; // Import the CSS file
import { Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const navItems = [
  { menu: "Home", route: "/" },
  { menu: "Services", route: "/service" },
  { menu: "Testimonals", route: "/testimonals" },
  { menu: "About", route: "/about" },

  { menu: "Contact", route: "/contact" },
  { menu: "Login", route: "/login" },
];

function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Drawer
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{ width: 240 }}
    >
      <Box
        sx={{
          width: 240,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 2 }}>
          WaqasKhan
        </Typography>
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.route}
                onClick={handleDrawerToggle}
                sx={{ justifyContent: "center" }}
              >
                <ListItemText primary={item.menu} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component={"img" } src="/assets/react.png"  sx={{minWidth:"40px",filter:"invert(46%) sepia(97%) saturate(380%) hue-rotate(342deg) brightness(103%) contrast(94%)",height:"40px", display: { xs: "none", md: "flex" }, mr: 1 }}></Box>
            {/* <img src=style={{minWidth:"40px",marginRight:"8px",height:"50px"}}/> */}
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              WaqasKhan
            </Typography>
            <Box
              className="LargeScreen"
              sx={{ display: { xs: "none", md: "block", sm: "none" } }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={NavLink}
                  to={item.route}
                  sx={{ marginLeft: 2 }}
                >
                  {item.menu}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "block" } }}>
              <button
                style={{
                  cursor: "pointer",
                  padding: "8px 20px",
                  borderRadius: "3px",
                  backgroundColor: "#f07b26",
                  color: "white ",
                  fontWeight: "bold",
                  border: "none",

                  fontSize: "17px",
                  marginLeft: 10,
                }}
              >
                Get A Quote
              </button>
              {/* <Button
                variant="outlined"
                sx={{ backgroundColor: "#f07b26", color:"white ",fontWeight:"bold",marginLeft: 2 }}
              > 
                Get A Quote
              </Button> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {drawer}
    </Box>
  );
}

export default NavBar;
