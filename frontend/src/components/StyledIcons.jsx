import React from "react";
import Box from "@mui/material/Box";

function StyledIcons({ Icon }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // margin: "auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: "50%",
        backgroundColor: "#7ECFA2",
        width: "80px",
        height: "80px",
        padding: "15px",
      }}
    >
      <Icon sx={{ fontSize: "3rem", color: "white" }} />
    </Box>
  );
}

export default StyledIcons;
