import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CartItems: [],
  TotalPrice: 0,
  TotalQuantity: 0,
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

    RemoveToCart: (state, action) => {
      const id = action.payload.id;
      const remaining = state.CartItems.filter((product) => product.id !== id);
      console.log(remaining);
      state.CartItems = remaining;
      // return remaining;
    },
    decreaseCart: (state, action) => {
      const itemindex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (state.CartItems[itemindex].Quantity > 1) {
        state.CartItems[itemindex].Quantity -= 1;
      } else if (state.CartItems[itemindex].Quantity === 1) {
        const nextCartItems = state.CartItems.filter(
          (item) => item.id !== action.payload.id,
        );
        state.CartItems = nextCartItems;
      }
    },
    ClearCart: (state, action) => {
      state.CartItems = [];
    },
    totalQuantity: (state, action) => {
      let { price, quantity } = state.CartItems.reduce(
        (cartTotal, elm) => {
          const { price, Quantity } = elm;
          const itemprice = price * Quantity;
          cartTotal.price += itemprice;
          cartTotal.quantity += Quantity;
          return cartTotal;
        },
        { price: 0, quantity: 0 },
      );
      state.TotalPrice = price;
      state.TotalQuantity = quantity;
    },
    sum: (state, action) => {
      state.CartItems.length();
    },
  },
});
export const {
  AddToCart,
  RemoveToCart,

  decreaseCart,
  ClearCart,
  totalQuantity,
  sum,
} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
