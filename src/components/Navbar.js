import React from "react";
import { Button, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCartIcon } from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/cartlisting");
  };
  return (
    <>
      <Toolbar sx={{ bgcolor: "#b51097" }}>
        <Box flex="1">FakeStore</Box>
        <Button variant="contained" onClick={handleClick}>
          Cart
        </Button>
      </Toolbar>
    </>
  );
};

export default Navbar;
