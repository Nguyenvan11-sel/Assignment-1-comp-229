import React from "react";
import { Container, Typography, Grid, Box, Button, Card, CardMedia } from "@mui/material";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";

export default function Project() {
  const projects = [project1, project2, project3, project4, project5, project6];

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Projects
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="white"
        paragraph
        sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
      >
        I take pride in paying attention to the smallest details and ensuring
        that my work is pixel perfect. I’m excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={project}
                alt={`project ${index + 1}`}
                height="200"
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 5, py: 1.5 }}
        >
          See More
        </Button>
      </Box>
    </Container>
  );
}
