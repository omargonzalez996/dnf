import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

const NavButtons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup color="white" variant="text" aria-label="Basic button group">
        <Button>Home</Button>
        <Button>About us</Button>
        <Button>Gallery</Button>
        <Button>Contact</Button>
      </ButtonGroup>
    </Box>
  );
};

export default NavButtons;
