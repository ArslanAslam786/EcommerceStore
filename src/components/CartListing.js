import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  AddToCart,
  decreaseCart,
  RemoveToCart,
  ClearCart,
  totalQuantity,
} from "../Redux/Slices/AddToCartSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CartListing = () => {
  const dispatch = useDispatch();
  const handleRemoveToCart = (product) => {
    // console.log(product);
    dispatch(RemoveToCart(product));
  };
  const handledecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleincreaseCart = (product) => {
    dispatch(AddToCart(product));
  };
  const handleClearCart = () => {
    dispatch(ClearCart());
  };
  const cart = useSelector((state) => state.Cart);
  const Items = useSelector((state) => state.Cart.CartItems);
  const ItemQuantity = useSelector((state) => state.Cart.AddItems);
  const total = useSelector((state) => state.Cart.totalQuantity);
  console.log("TotalQuantity", total);
  useEffect(() => {
    dispatch(totalQuantity());
  }, [cart, dispatch]);

  const totalPrice = useSelector((state) => state.Cart.TotalPrice);
  const TotalQuantity = useSelector((state) => state.Cart.TotalQuantity);

  return (
    <>
      <Box ml={"20px"} mr={"20px"} mt={"80px"}>
        {cart.CartItems.length === 0 ? (
          <>
            <Typography
              variant="h4"
              mt={"30px"}
              sx={{
                textAlign: "center",
                fontWeight: 400,
                fontSize: "36px",
                marginBottom: "1px",
              }}
            >
              Your cart is currently empty
            </Typography>

            <Typography sx={{ textAlign: "center" }}>
              <NavLink
                to="/"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                Let's start shopping
              </NavLink>
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 400,
                fontSize: "36px",
                marginBottom: "5px",
                marginTop: "5px",
              }}
            >
              Shopping Cart
            </Typography>
            <Box mt={"30px"} mb={"10px"}>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                {Items?.map((product) => {
                  const { id, price, image, category, Quantity } = product;
                  return (
                    <Grid item key={id}>
                      <Card
                        sx={{
                          minWidth: "200px",
                          marginRight: "0px",
                        }}
                        style={{}}
                      >
                        <CardMedia
                          component="img"
                          image={image}
                          sx={{
                            height: "100px",
                            width: "100%",
                            objectFit: "contain",
                            marginTop: "15px",
                          }}
                        />
                        <CardContent>
                          <Typography variant="h6" textAlign="center">
                            {category}
                          </Typography>

                          <Typography variant="h6" textAlign="center">
                            $ {price}
                          </Typography>

                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{
                              //  border: "1px solid grey",
                              // bgcolor: "#ebe8e8",
                              bgcolor: "lightgray",
                            }}
                          >
                            <Button onClick={() => handleincreaseCart(product)}>
                              +
                            </Button>
                            <Typography>{product.Quantity}</Typography>
                            <Button onClick={() => handledecreaseCart(product)}>
                              -
                            </Button>
                          </Box>
                          <Typography variant="h6" textAlign="center">
                            Total Price
                          </Typography>
                          <Typography variant="h6" textAlign="center">
                            {price * Quantity}
                          </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: "center" }}>
                          <Button
                            color="secondary"
                            size="large"
                            variant="contained"
                            onClick={() => handleRemoveToCart(product)}
                          >
                            Remove
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
              <Box style={{ marginTop: "30px" }}>
                <Typography variant="h6" textAlign="center">
                  Total Amount: {totalPrice}
                </Typography>
              </Box>
            </Box>
            <Button onClick={() => handleClearCart()}>Clear Cart</Button>
          </>
        )}
      </Box>
    </>
  );
};

export default CartListing;
