import { CHECK_IS_HOME } from '../constants/index';

export const fetchProduct = id => dispatch => {
  axios
    .get(`/api/product/${id}`)
    .then(res => res.data)
    .then(product => dispatch(selectedProduct(product)));
};

export const homeBoolean = home => ({
  type: CHECK_IS_HOME,
  home
});

export const testForHome = urlMatch => dispatch =>
  dispatch(homeBoolean(urlMatch));

//this.props.match.location !== window.location.pathname
