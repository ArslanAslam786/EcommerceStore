import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (state) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: state,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
  };
};
