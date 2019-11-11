import { combineReducers } from "redux";
import productsReducer from "../reducers/productsReducer";
import userReducer from "../reducers/userReducer";
import navBarReducer from "../reducers/navBarReducer";

export default combineReducers({
  products: productsReducer,
  user: userReducer,
  navbar: navBarReducer
});
