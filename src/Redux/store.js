// To create store import createStore from redux
// createStore takes parameters   reducers, middleware, initialstate
import { createStore } from "redux";
// import reducers
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
