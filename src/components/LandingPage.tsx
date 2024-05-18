import React, { useState } from "react";
import {
  Grid,
  Typography,
  CssBaseline,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import LandingImg from "./LandingPageImg";
import "../css/LandingPage.css";
import ModalLoginPopUp from './ModalLoginPopUp';

// Create a theme outside the component to avoid recreation on each render
const textTheme = createTheme({
  typography: {
    fontFamily: "poppins",
  },
});

function LandingPage() {
  const theme = useTheme();
  const isLargeOrLarger = useMediaQuery(theme.breakpoints.up("lg"));
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const imageGridItemStyle = {
    padding: 0,
    position: "relative",
    ...(isLargeOrLarger ? { height: "calc(100vh + 120px)" } : {})
  };

  const imageStyle = {
    position: isLargeOrLarger ? "absolute" : "relative",
    top: isLargeOrLarger ? "-150px" : undefined,
    left: 0,
    width: "100%",
    height: isLargeOrLarger ? "calc(100vh + 150px)" : "100%"
  };

  const textBoxStyle = {
    textAlign: "center",
    ...(isLargeOrLarger ? { position: "relative", top: "-100px" } : {})
  };

  return (
    <>
      <CssBaseline />
      <div className="outside">
        <ThemeProvider theme={textTheme}>
          <Grid
            container
            style={{ height: isLargeOrLarger ? "100vh" : "auto", width: "100vw", margin: 0, overflow: "hidden" }}
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
              <Box sx={textBoxStyle}>
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
                  onClick={handleOpenModal}
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
                  <Typography variant="h5" component="div">
                    Join Us
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={imageGridItemStyle}>
              <LandingImg style={imageStyle as React.CSSProperties} />
            </Grid>
          </Grid>
          <ModalLoginPopUp open={modalOpen} handleClose={handleCloseModal} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default LandingPage;
