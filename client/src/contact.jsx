import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Me
        </Typography>
        <form id="ffp">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="myFName"
                name="myFName"
                label="First Name"
                variant="outlined"
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="myLName"
                name="myLName"
                label="Last Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="myEmail"
                name="myEmail"
                label="Email"
                type="email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box mt={4} textAlign="center">
          <Typography variant="body1">
            <i>
              Call me on: <strong>888.555.5555</strong>
            </i>
          </Typography>
          <Typography variant="body2">
            facebook: www.xyz.facebook.com
          </Typography>
          <Typography variant="body2">email: xyz@yahoo.com</Typography>
        </Box>
      </Paper>
    </Container>
  );
}
