import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CartListing = () => {
  const Items = useSelector((state) => state.AddToCart.CartItems);
  return (
    <>
      <Typography variant="h4">This is cart Listing</Typography>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          {Items.map((product) => {
            const { id, price, image, title, description } = product;
            return (
              <Grid item lg={4} xl={3} md={4} sm={12} xs={12} key={id}>
                <Typography> Quantity: {product.Quantity}</Typography>
                <Card
                  sx={{
                    maxHeight: "300px",
                    maxWidth: "200px",
                    minHeight: "300px",
                    marginRight: "0px",
                  }}
                >
                  {/* <CardContent>
                    <Typography> Quantity: {product.Quantity}</Typography>
                  </CardContent> */}
                  <CardMedia
                    component="img"
                    image={image}
                    sx={{
                      height: "100px",
                      width: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Typography>{title}</Typography>
                    <Typography>$ {price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CartListing;
