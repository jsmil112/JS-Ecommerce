import { GET_PRODUCTS, SEARCH_PRODUCTS, SELECTED_PRODUCT } from "../constants/index";
import axios from "axios";

export const getProducts = products => ({
  type: GET_PRODUCTS,
  products
});

export const getSearchProducts = products => ({
  type: SEARCH_PRODUCTS,
  products
});

export const selectedProduct = product => ({
  type: SELECTED_PRODUCT,
  product
})

//Para esta funcion necesito en el back una ruta a /products con un FindAll() que me traiga todos los productos que estan en la db (por ahora serian solo 9 que estan cargados)

export const fetchProduct = (id) => dispatch => {
  axios.get(`/api/product/${id}`)
  .then(res => res.data)
  .then(product => dispatch(selectedProduct(product)))
}


export const fetchProducts = () => dispatch => {
  axios
    .get("/api/product/random/9")
    .then(res => dispatch(getProducts(res.data)))
    .catch(err => console.log(err));
};

export const searchProducts = search => dispatch => {
  axios
    .get(`/api/product/filtered/${search}`)
    .then(res => dispatch(getSearchProducts(res.data)))
    .catch(err => console.log(err));
};
