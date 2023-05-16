import React from "react";
import {
  Button,
  CssBaseline,
  Typography,
  Toolbar,
  Divider,
  List,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";

// const button = {
//   backgroundColor: "white",
//   color: "black",
//   boxShadow: "none",
// };

const NavBar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        // sx={{ color: "black", backgroundColor: "white" }}
      >
        <Toolbar>
          <Typography variant="h4">Blogger</Typography>
          <Divider />
          <List sx={{ marginLeft: "auto", padding: "0px 100px" }}>
            <Link to="/">
              <Button
                // sx={button}
                color="primary"
                variant="contained"
                size="large"
                // sx={{ marginLeft: "10px" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/create">
              <Button
                // sx={button}
                color="primary"
                variant="contained"
                size="large"
                // sx={{ marginLeft: "10px" }}
              >
                Create a new blog
              </Button>
            </Link>
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
