import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ProductDetail: [],
};

const productdetail = createSlice({
  name: "shop",
  initialState,
  reducers: {
    ProductDetail: (state, action) => {
      state.ProductDetail = action.payload;
    },
  },
});
export const { ProductDetail } = productdetail.actions;
export default productdetail.reducer;
