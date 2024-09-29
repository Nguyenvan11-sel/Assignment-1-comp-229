import React from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import schoolLogo from "../src/assets/schoolLogo.png";
import schoolLogo1 from "../src/assets/schoolLogo1.png";

export default function Education() {
  const educationData = [
    {
      degree: " Ontario College Advanced Diploma ",
      institution: "Centennial College",
      years: "2023-2026",
      image: schoolLogo1,
    },
    {
      degree: "High School Diploma",
      institution: "Cambridge International Academy",
      years: "2022-2023",
      image: schoolLogo,
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Education & Qualifications
        </Typography>

        {/* Table container */}
        <TableContainer component={Paper}>
          <Table aria-label="education table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Logo</TableCell>
                <TableCell align="left">Degree</TableCell>
                <TableCell align="left">Institution</TableCell>
                <TableCell align="left">Years</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {educationData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="left">
                    {/* Add image or logo */}
                    <Avatar
                      alt={row.institution}
                      src={row.image}
                      sx={{ width: 56, height: 56 }}
                    />
                  </TableCell>
                  <TableCell align="left">{row.degree}</TableCell>
                  <TableCell align="left">{row.institution}</TableCell>
                  <TableCell align="left">{row.years}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
