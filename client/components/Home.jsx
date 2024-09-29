import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import BBG from "../src/assets/BBG.jpg";
import hire from "../src/assets/hire.jpg";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box
        id="intro"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          backgroundColor: "#f5f5f5",
          padding: 4,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box sx={{ flexGrow: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h3" component="span" gutterBottom>
            Hello,
          </Typography>
          <Typography variant="h4" component="span">
            I am <strong>Nguyen Van</strong>
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            Website Designer
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            I create visually appealing and user-friendly websites to enhance
            your online presence.
          </Typography>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                "&:hover": {
                  backgroundColor: "#1976d2",
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={hire}
                alt="Hire me icon"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              Hire me
            </Button>
          </Link>
        </Box>

        <Box>
          <img
            src={BBG}
            alt="Profile picture of Nguyen Van, a website designer"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            className="profile-image"
          />
        </Box>
      </Box>
      <style>
        {`
          .profile-image:hover {
            transform: scale(1.05); // Slightly enlarge image on hover
          }
        `}
      </style>
    </Container>
  );
}
