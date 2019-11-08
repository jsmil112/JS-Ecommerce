import { GET_PRODUCTS, SEARCH_PRODUCTS, SELECTED_PRODUCT } from "../constants/index";

const initialState = {
  products: [],
  selectedProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };

    case SEARCH_PRODUCTS:
      return { ...state, products: action.products };
    case SELECTED_PRODUCT:
      return {...state, selectedProduct: action.product}
    default:
      return state;
  }
};
