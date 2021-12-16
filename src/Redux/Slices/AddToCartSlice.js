import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CartItems: [],
  Quantity: 0,
};

const AddToCartSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const itemindex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemindex >= 0) {
        state.CartItems[itemindex].Quantity += 1;
      } else {
        const temproduct = { ...action.payload, Quantity: 1 };
        state.CartItems.push(temproduct);
      }
    },
  },
});
export const { AddToCart } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
