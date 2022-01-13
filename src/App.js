import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import CartListing from "./components/CartListing";
import { Box } from "@mui/material";
import AppStyle from "./App.css";
import LoginForm from "./Auth/LoginForm";

const App = () => {
  return (
    <>
      <Box
      // sx={{ bgcolor: "#fff6e3" }}
      >
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/cartlisting" element={<CartListing />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/login" element={<LoginForm />} />

            <Route>Page not fond</Route>
          </Routes>
        </Router>
      </Box>
    </>
  );
};
export default App;
