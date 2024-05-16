import React from "react";
import {
  Grid,
  Typography,
  CssBaseline,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import LandingImg from "./LandingPageImg";
import "../css/LandingPage.css";

function LandingPage() {
  const theme = useTheme();
  const isLargeOrLarger = useMediaQuery(theme.breakpoints.up("lg")); // Applies to large and extra large devices

  // Correctly typed styles for the image container Grid item
  const imageGridItemStyle: React.CSSProperties = isLargeOrLarger
    ? { padding: 0, position: "relative", height: "calc(100vh + 120px)" }
    : { padding: 0, position: "relative" }; // No height adjustment for smaller screens

  // Correctly typed styles for the SVG image
  const imageStyle: React.CSSProperties = isLargeOrLarger
    ? {
        position: "absolute",
        top: "-150px",
        left: 0,
        width: "100%",
        height: "calc(100vh + 150px)",
      }
    : { position: "relative", width: "100%", height: "100%" }; // Image takes up the space it needs on smaller screens

  // Text box style for large and extra large screens
  const textBoxStyle: React.CSSProperties = isLargeOrLarger
    ? { textAlign: "center", position: "relative", top: "-100px" } // Adjust 'top' as needed
    : { textAlign: "center" };

  const textTheme = createTheme({
    typography: {
      fontFamily: "poppins",
    },
  });

  return (
    <>
      <CssBaseline />
      <div className="outside">
        <Grid
          container
          style={{
            height: isLargeOrLarger ? "100vh" : "auto",
            width: "100vw",
            margin: 0,
            overflow: "hidden",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Box style={textBoxStyle}>
              <ThemeProvider theme={textTheme}>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    fontWeight: 400,
                    letterSpacing: ".01rem",
                    color: "#F06543",
                    textDecoration: "none",
                    marginBottom: "20px",
                  }}
                >
                  Lost your Phone?
                </Typography>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  sx={{
                    fontWeight: 400,
                    letterSpacing: ".01rem",
                    color: "#2C4251",
                    textDecoration: "none",
                    marginBottom: "2px",
                  }}
                >
                  Don't Remember Contact Numbers?
                </Typography>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  sx={{
                    fontWeight: 400,
                    letterSpacing: ".01rem",
                    color: "#2C4251",
                    textDecoration: "none",
                  }}
                >
                  No worries!
                </Typography>

                  <Button
                    variant="text"
                    size="large"
                    sx={{
                      padding: "6px 30px",
                      borderRadius: "40px",
                      backgroundColor: "#1B998B",
                      color: "white",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                      minHeight: "50px",
                      minWidth: "50px",
                      "&:hover": {
                        backgroundColor: "#15897C",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                       
                    >
                      Join Us
                    </Typography>
                  </Button>

              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={imageGridItemStyle}>
            <LandingImg style={imageStyle} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LandingPage;
