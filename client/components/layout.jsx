import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import football1 from "../src/assets/football1.jfif";

export default function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img
              src={football1}
              alt="football"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <nav>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to="/education"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
            >
              Education
            </Link>
            <Link
              component={RouterLink}
              to="/project"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
            >
              Project
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
            >
              Contact
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Box sx={{ my: 2 }}>
        <hr />
      </Box>
    </>
  );
}
