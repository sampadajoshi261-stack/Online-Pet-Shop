import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const [petEl, setPetEl] = React.useState(null);
  const open = Boolean(petEl);
  const navigateTo = useNavigate();
  const handleClick = (event) => {
    setPetEl(event.currentTarget);
  };
  const handleClose = () => {
    setPetEl(null);
  };
  function handleOrder() {
    navigateTo("/my-orders");
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={petEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleOrder}>My Orders</MenuItem>
        <MenuItem onClick={handleClose}>Tracks Orders</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
