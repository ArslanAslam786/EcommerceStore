import React, { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addproduct } from "../Redux/Slices/ShopSlice";
import ProductDispaly from "./ProductDispaly";

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    // console.log(response.data);

    dispatch(addproduct(response.data));
  };
  useEffect(() => {
    fetchproducts();
  });
  return (
    <>
      <Box sx={{ marginTop: "15px" }}>
        <ProductDispaly />
      </Box>
    </>
  );
};

export default ProductListing;
