import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { AddToCart } from "../Redux/Slices/AddToCartSlice";

const ProductDispaly = () => {
  const products = useSelector((state) => state.shopstore.products);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    // console.log(product);
    dispatch(AddToCart(product));
  };

  return (
    <>
      <Box mt={"80px"}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "15px",
          }}
        >
          {products.map((product) => {
            const { id, price, image, category } = product;
            return (
              <Grid item key={id}>
                <Card
                  sx={{
                    maxHeight: "290px",
                    maxWidth: "200px",
                    minWidth: "200px",
                    // minHeight: "270px",
                    marginRight: "0px",
                    // color: "white",
                    // bgcolor: "#9d9da3",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image}
                    sx={{
                      height: "100px",
                      width: "100p%",
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
                  </CardContent>

                  <CardActions
                    // disableSpacing
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      color="secondary"
                      size="large"
                      variant="contained"
                      onClick={() => handleAddToCart(product)}
                      sx={{ flex: 1 }}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ProductDispaly;
