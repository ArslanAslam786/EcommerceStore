// to combine multiple reducers use combineReducer
// combine reducers take object

import { combineReducers } from "redux";
// import reducers
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
