import React from "react";
import { Box, Typography, Container, Grid, createTheme, ThemeProvider } from "@mui/material";

// Create a theme to use with ThemeProvider
const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function StepBoxes() {
  const boxStyle = {
    backgroundColor: '#7ECFA2',
    borderRadius: '55px',
    padding: '20px',
    textAlign: 'center', // keeps the main text centered
    color: 'white',
    minHeight: '302px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    m: 2, // Margin for spacing
  };

  const sectionBackground = {
    backgroundColor: "#F9FFFC",
    padding: {
      xs: '40px 0',
      sm: '60px 0',
      md: '80px 0',
      lg: '100px 0',
    },
    width: "100%",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={sectionBackground}>
        <Container>
          <Typography variant="h4" textAlign="left" gutterBottom sx={{
            borderBottom: '7px solid #7ECFA2',
            paddingBottom: '5px',
            display: 'inline-block',
            color: '#2C4251'  // Set color for the heading to match descriptions
          }}>
            How it Works
          </Typography>
          <Typography variant="h5" textAlign="center" paddingBottom={3} gutterBottom sx={{ fontSize: '2rem', maxWidth: '600px', margin: 'auto', color: '#2C4251' }}>
            Simple 3 step process <br/> to get started!
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={boxStyle}>
                <Typography variant="h6" sx={{ textAlign: 'left'}}>01.</Typography>
                <Typography variant="h6" sx={{ paddingBottom: 3}}>Make an Account</Typography>
                <Typography variant="body2" marginTop={1} sx={{ textAlign: 'center', color: '#2C4251' }}>
                  It takes less than a minute to make an account!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={boxStyle}>
                <Typography variant="h6" sx={{ textAlign: 'left' }}>02.</Typography>
                <Typography variant="h6" sx={{ paddingBottom: 3}}>Store Your Contacts</Typography>
                <Typography variant="body2" marginTop={1} sx={{ textAlign: 'center', color: '#2C4251' }}>
                  Store up to 10 important contacts that you may need in the future
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={boxStyle}>
                <Typography variant="h6" sx={{ textAlign: 'left'}}>03.</Typography>
                <Typography variant="h6" sx={{ paddingBottom: 3}}>Never Worry Again!</Typography>
                <Typography variant="body2" marginTop={1} sx={{ textAlign: 'center', color: '#2C4251' }}>
                  Now you never have to worry about remembering contacts in urgent times!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default StepBoxes;
