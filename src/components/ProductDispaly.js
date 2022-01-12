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
            with: "100%",
          }}
          styles={
            {
              // display: "grid",
              // gridTemplateColumns: "repeat(auto-fit,minmax(300px, 1fr))",
              // gap: "1rem",
              // alignItmes: "flex-start",
            }
          }
        >
          {products.map((product) => {
            const { id, price, image, category } = product;
            return (
              <Grid item key={id}>
                <Card
                  sx={{
                    maxHeight: "290px",
                    maxWidth: "4250px",
                    minWidth: "320px",
                    marginRight: "0px",
                    // fontSize: "2rem",
                    // padding: "1rem",
                    // boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image}
                    // height="194"
                    sx={{
                      height: "100px",
                      width: "100p%",
                      objectFit: "contain",
                      marginTop: "15px",
                      // overflow: "hidden",
                      // height: "100px",
                      // display: "block",
                      // width: "100%",
                      // aspectRatio: 16 / 9,
                      // objectFit: "cover",
                      // objectPosition: "center",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {category}
                    </Typography>

                    <Typography
                      variant="h6"
                      textAlign="center"
                      style={{ fontSize: "1.5rem" }}
                    >
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
                      style={{ fontSize: ".8rem" }}
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
