import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import CartListing from "./components/CartListing";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#dae8ed" }}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<ProductListing />} />
            {/* <Route path="/productdetail" element={<ProductDetail />} /> */}
            <Route path="/cartlisting" element={<CartListing />} />
            <Route path="/productdetail" element={<ProductDetail />} />

            <Route>Page not fond</Route>
          </Routes>
        </Router>
        {/* <ProductListing /> */}
      </Box>
    </>
  );
};
export default App;
