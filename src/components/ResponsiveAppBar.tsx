import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import ModalLoginPopUp from './ModalLoginPopUp';

const pages = ["Home", "About", "How it works", "Join Us"];

function ResponsiveAppBar() {
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true); // Function to open the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Function to close the modal
  };

  const theme = createTheme({
    typography: {
      fontFamily: "poppins",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar style={{ background: "transparent", boxShadow: "none", zIndex: 10 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Title positioned to the left for medium and larger screens */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "none", md: "flex" }, // Only show this version on md and larger screens
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#2C4251",
                textDecoration: "none",
                textAlign: "left", // Align text to the left
                marginRight: "auto", // Pushes other items to the right
              }}
            >
              Backup Buddy
            </Typography>

            {/* Mobile Menu Icon and Title */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              {/* Mobile Title */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "#2C4251",
                  textDecoration: "none",
                  textAlign: "center",
                  marginLeft: "auto", // Ensure the title is centered
                }}
              >
                Backup Buddy
              </Typography>
            </Box>

            {/* Menu Items for medium and larger screens */}
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={page === "Join Us" ? handleOpenModal : handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: page === "Join Us" ? "white" : "black",
                    backgroundColor: page === "Join Us" ? "#1B998B" : "",
                    borderRadius: page === "Join Us" ? "40px" : "4px",
                    boxShadow: page === "Join Us" ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "",
                    padding: page === "Join Us" ? "6px 30px" : "6px 15px",
                    display: "block",
                    textTransform: "none",
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    mr: index !== pages.length - 1 ? 4 : 0,
                    "&:hover": {
                      backgroundColor: page === "Join Us" ? "#15897C" : "",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ModalLoginPopUp open={openModal} handleClose={handleCloseModal} />
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
