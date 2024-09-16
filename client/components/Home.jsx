import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import BBG from "../src/assets/BBG.jfif";
import hire from "../src/assets/hire.jpg";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box
        id="intro"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flexGrow: 1, pr: 4 }}>
          <Typography variant="h3" component="span" gutterBottom>
            Hello,
          </Typography>
          <Typography variant="h4" component="span">
            I am <strong>Blessing Ajiboye</strong>
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Website Designer
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            I am a skilled web designer with experience in creating visually
            appealing and user-friendly websites.
          </Typography>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" size="large">
              <img
                src={hire}
                alt="Hire me"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              Hire me
            </Button>
          </Link>
        </Box>
        <Box>
          <img
            src={BBG}
            alt="Blessing Ajiboye's profile"
            style={{ width: "350px", height: "350px", borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Container>
  );
}
