import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import ux from "../src/assets/ux.png";
import web from "../src/assets/web.png";
import app from "../src/assets/app.png";

export default function About() {
  const skills = [
    {
      image: ux,
      title: "UI/UX Design",
      description: "This is a demo text, you can write your own content here.",
      alt: "UIDesign",
    },
    {
      image: web,
      title: "Web Design",
      description:
        "This text can be changed while making a production-ready website.",
      alt: "WebDesign",
    },
    {
      image: app,
      title: "App Design",
      description: "You can write text related to mobile app development.",
      alt: "AppDesign",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        What I Do
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={skill.image}
                alt={skill.alt}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {skill.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
