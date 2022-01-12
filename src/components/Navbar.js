import React from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";

import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { totalQuantity } from "../Redux/Slices/AddToCartSlice";

const Navbar = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/cartlisting");
  };
  const cart = useSelector((state) => state.Cart.CartItems);
  const Total = useSelector((state) => state.Cart.TotalQuantity);
  console.log("TotalQuantity", Total);
  const dispatch = useDispatch();
  dispatch(totalQuantity());

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          height: "100px",
        }}
      >
        <Toolbar miwidth="70px" sx={{ bgcolor: "#141729" }}>
          <Box flex="1">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Box sx={{ color: "white", fontSize: "3.5vh" }}>Online Shop</Box>
            </NavLink>
          </Box>
          {/* <Box sx={{ color: "white", fontSize: "12px", flex: 1 }}>
            Happy Shopping
          </Box> */}
          <IconButton onClick={handleClick}>
            <ShoppingCartTwoToneIcon
              sx={{ color: "white", fontSize: "46px" }}
            />
          </IconButton>
          {/* <Typography sx={{ color: "white" }}>{cart.length} </Typography> */}
          <Typography sx={{ color: "white" }}>{Total}</Typography>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
