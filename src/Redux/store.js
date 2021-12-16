import { configureStore } from "@reduxjs/toolkit";
import ShopSlice from "./Slices/ShopSlice";
import AddToCartSlice from "./Slices/AddToCartSlice";
import productdetailReducer from "./Slices/ProductDetail";
const store = configureStore({
  reducer: {
    shopstore: ShopSlice,
    AddToCart: AddToCartSlice,
    ProductDetail: productdetailReducer,
  },
});
export default store;
