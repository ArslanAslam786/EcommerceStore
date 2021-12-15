import React, { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../Redux/actions/ProductActions";
import { useDispatch } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);
  return (
    <>
      <Box>
        <ProductComponent />
      </Box>
    </>
  );
};

export default ProductListing;
