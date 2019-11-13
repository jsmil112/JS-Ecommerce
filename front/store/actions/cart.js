import { SET_CART, LOG_OUT_CART } from "../constants/index";
import axios from "axios";

export const setCart = cart => ({
  type: SET_CART,
  cart
});

export const logOutCart = () => ({
  type: LOG_OUT_CART,
  cart: {}
});

export const userLogOutCart = () => dispatch => {
  dispatch(logOutCart());
};

export const fetchCart = user => dispatch => {
  if (user.name)
    return axios
      .get("/api/cart/me")
      .then(res => res.data)
      .then(cart => dispatch(setCart(cart)));

  return dispatch(
    setCart(Object.values(window.localStorage).map(item => JSON.parse(item)))
  );
};

export const fetchAndAddToCart = (product, user) => dispatch => {
  if (user.name) {
    return axios
      .post("/api/cart", product)
      .then(res => res.data)
      .then(cart => dispatch(setCart(cart)));
  }

  if (!window.localStorage.getItem(product.id)) {
    product.quantity = 0;
    window.localStorage.setItem(product.id, JSON.stringify(product));
  }

  let addToThis = JSON.parse(window.localStorage.getItem(product.id));
  addToThis.quantity = addToThis.quantity + 1;

  window.localStorage.setItem(addToThis.id, JSON.stringify(addToThis));

  dispatch(
    setCart(Object.values(window.localStorage).map(item => JSON.parse(item)))
  );
};

export const fetchAndSubstractFromCart = (product, user) => dispatch => {
  if (user.name) {
    return axios
      .post("/api/cart", product)
      .then(res => res.data)
      .then(cart => dispatch(setCart(cart)));
  }

  let subOneFromThis = JSON.parse(window.localStorage.getItem(product.id));
  subOneFromThis.quantity = subOneFromThis.quantity - 1;

  window.localStorage.setItem(
    subOneFromThis.id,
    JSON.stringify(subOneFromThis)
  );

  dispatch(
    setCart(Object.values(window.localStorage).map(item => JSON.parse(item)))
  );
};

export const fetchAndRemoveFromCart = (product, user) => dispatch => {
  if (user.name) {
    return axios
      .post("/api/cart", product)
      .then(res => res.data)
      .then(cart => dispatch(setCart(cart)));
  }

  window.localStorage.removeItem(product.id);

  dispatch(
    setCart(Object.values(window.localStorage).map(item => JSON.parse(item)))
  );
};
