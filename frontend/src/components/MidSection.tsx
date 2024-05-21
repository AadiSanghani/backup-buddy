import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import MessageIcon from "@mui/icons-material/Message";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import StyledIcons from "./StyledIcons";
import { Grid, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MidSection() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  const titleStyle = {
    fontWeight: 500,
    letterSpacing: ".01rem",
    color: "#2C4251",
    textDecoration: "none",
  };

  const sectionBackground = {
    backgroundColor: "#F4F4F9",
    padding: {
      xs: '80px 0', // Smaller padding on extra small devices
      sm: '100px 0', // Medium padding on small devices
      md: '120px 0', // Large padding on medium devices
      lg: '150px 0', // Even larger padding on large devices
    },
    margin: "0 auto",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={sectionBackground}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ margin: 'auto', maxWidth: '600px' }}>
          <Typography align="center" variant="h4" sx={{ my: 4 }} padding={1}>
            Store Contacts So You Never Have to Worry if You Lose Your Phone.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
              <StyledIcons Icon={StorageIcon} />
              <Typography variant="h6" sx={titleStyle}>Store Contact Information</Typography>
              <Typography sx={{ maxWidth: '350px', mt: 2 }}>
                Backup Buddy allows you to store contact numbers, where in the case of an emergency, you can contact someone easily!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
              <StyledIcons Icon={MessageIcon} />
              <Typography variant="h6" sx={titleStyle}>Send Message</Typography>
              <Typography sx={{ maxWidth: '350px', mt: 2 }}>
                Send a message to a loved one or even your own phone, telling them who to contact when the phone is found.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
              <StyledIcons Icon={PsychologyAltIcon} />
              <Typography variant="h6" sx={titleStyle}>No Need to Remember Numbers</Typography>
              <Typography sx={{ maxWidth: '350px', mt: 2 }}>
                From now on, you will never have to remember contact numbers again if you lose your phone!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default MidSection;
