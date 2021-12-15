// Reducer takes two arguments initial state and action
// create initial state
import { palette } from "@mui/system";
import { ActionTypes } from "../contants/action-types";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      console.log(state);
      return;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
