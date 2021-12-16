import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  ListItem,
  List,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AddToCart } from "../Redux/Slices/AddToCartSlice";

const ProductDispaly = () => {
  const products = useSelector((state) => state.shopstore.products);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(AddToCart(product));
  };

  return (
    <>
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
          {products.map((product) => {
            const { id, price, image, title, description } = product;
            return (
              <Grid item lg={4} xl={3} md={4} sm={12} xs={12} key={id}>
                <Link to="/productdetail">
                  <Card
                    sx={{
                      maxHeight: "300px",
                      maxWidth: "200px",
                      minHeight: "300px",
                      marginRight: "0px",
                    }}
                  >
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
                    <CardActions>
                      <Button
                        variant="contained"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ProductDispaly;
