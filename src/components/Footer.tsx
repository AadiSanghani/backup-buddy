import { Box, Typography, Container } from "@mui/material";

function Footer() {
    const footerStyle = {
        backgroundColor: '#2C4251', // Dark blue background color
        color: 'white', // This color will be overridden below for the text
        padding: '10px 0', // Minimal vertical padding for skinniness
        textAlign: 'center',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '30px', // Explicit height setting
        marginLeft: 'auto',
        marginRight: 'auto'
    };

  return (
    <Box sx={footerStyle}>
      <Container>
        <Typography variant="body1" sx={{
            fontSize: '0.75rem', // Smaller font size
            color: '#D3D3D3' // Light grey color
        }}>
          Made by Aadi
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
