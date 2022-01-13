import { configureStore } from "@reduxjs/toolkit";
import ShopSlice from "./Slices/ShopSlice";
import AddToCartSlice from "./Slices/AddToCartSlice";
import productdetailReducer from "./Slices/ProductDetail";
import userLoginReducer from "./Slices/authForm";
const store = configureStore({
  reducer: {
    shopstore: ShopSlice,
    Cart: AddToCartSlice,
    ProductDetail: productdetailReducer,
    users: userLoginReducer,
  },
});
export default store;
