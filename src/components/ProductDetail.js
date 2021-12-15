import React, { useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/actions/ProductActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, description, price, title } = product;
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(product);

  // const fetchproductDetail = async () => {
  //   // const response = await axios
  //   //   .get(`https://fakestoreapi.com/products/${productId}`)
  //   //   .catch((err) => console.log("error ", err));
  //   // dispatch(selectedProduct(response.data));
  // };

  useEffect(() => {
    // console.log(product);
    // if (productId && productId !== "")
    // fetchproductDetail();
    return () => {
      // dispatch(removeSelectedProduct());
    };
  }, []);
  return (
    <>
      <Box>
        <Card>
          <CardMedia
            component="img"
            image={image}
            sx={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
          <CardContent>
            <Typography>{description}</Typography>
            <Typography>$ {price}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ProductDetail;
