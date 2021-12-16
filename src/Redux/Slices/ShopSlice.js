import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addproduct: (state, { payload }) => {
      state.products = payload;
    },
  },
});
export const { addproduct } = shopSlice.actions;
export default shopSlice.reducer;
