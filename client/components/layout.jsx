import React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import football1 from "../src/assets/header.jpg";

export default function Layout() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img
              src={football1}
              alt="Football logo"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                transition: "transform 0.5s ease", // Smooth transition
              }}
              className="spin-image" // Apply class for hover effect
            />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Information
          </Typography>
          <nav>
            <Link
              component={NavLink}
              to="/"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
              activeStyle={{ textDecoration: "underline" }}
            >
              Home
            </Link>
            <Link
              component={NavLink}
              to="/about"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
              activeStyle={{ textDecoration: "underline" }}
            >
              About
            </Link>
            <Link
              component={NavLink}
              to="/education"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
              activeStyle={{ textDecoration: "underline" }}
            >
              Education
            </Link>
            <Link
              component={NavLink}
              to="/project"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
              activeStyle={{ textDecoration: "underline" }}
            >
              Project
            </Link>
            <Link
              component={NavLink}
              to="/contact"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none" }}
              activeStyle={{ textDecoration: "underline" }}
            >
              Contact
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Box sx={{ my: 2 }}>
        <hr />
      </Box>
      <style>
        {`
          .spin-image {
            transition: transform 0.5s ease; // Smooth transition
          }
          .spin-image:hover {
            animation: spin 1s linear infinite; // Spin on hover
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
