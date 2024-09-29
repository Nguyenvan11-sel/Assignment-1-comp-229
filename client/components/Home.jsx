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
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Text Content */}
        <Box sx={{ flexGrow: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h3" component="span" gutterBottom>
            Hello,
          </Typography>
          <Typography variant="h4" component="span">
            I am <strong>Nguyen Van </strong>
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Website Designer
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            I am a skilled web designer with experience in creating visually
            appealing and user-friendly websites.
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
              }}
            >
              <img
                src={hire}
                alt="Hire me"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              Hire me
            </Button>
          </Link>
        </Box>

        {/* Profile Image */}
        <Box>
          <img
            src={BBG}
            alt="Blessing Ajiboye's profile"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
