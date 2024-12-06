import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";

export default function navMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const sxButton = { Typography: "p" };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem sx={sxButton} onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem sx={sxButton} onClick={handleClose}>
          About us
        </MenuItem>
        <MenuItem sx={sxButton} onClick={handleClose}>
          Gallery
        </MenuItem>
        <MenuItem sx={sxButton} onClick={handleClose}>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
