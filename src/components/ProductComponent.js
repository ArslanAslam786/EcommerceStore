import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
  Image,
} from "@mui/material";
import { useSelector } from "react-redux";
import { productReducer } from "../Redux/reducers/productReducer";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      <Grid
        container
        sx={{ display: "flex", gap: "10px", justifyContent: "space-evenly" }}
      >
        {products.map((product) => {
          return (
            <Grid item xs={12} sm={12} md={4} xl={3} lg={3} key={product.id}>
              <Link to={`/product/${product.id}`}>
                <Card
                  sx={{
                    minHeight: "300px",
                    minWidth: "20px",
                    // maxHeight: "500px",
                    // height: "300px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    width={"100px"}
                    height={"100px"}
                    sx={{
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Typography>{product.title}</Typography>
                    <Typography>$ {product.price}</Typography>
                    <Typography>{product.category}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductComponent;
