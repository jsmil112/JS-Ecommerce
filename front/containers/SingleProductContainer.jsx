import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import SingleProduct from "../components/SingleProduct";
import { fetchProduct } from "../store/actions/product";
import { fetchAndAddToCart } from "../store/actions/cart";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.getReviews = this.getReviews.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.selectedProduct && this.state.reviews.length === 0)
      this.getReviews();
  }

  getReviews() {
    axios
      .get(`/api/review/all/${this.props.selectedProduct.id}`)
      .then(res => res.data)
      .then(reviews => {
        this.setState({
          reviews: reviews
        });
      });
  }

  //YO

  addProduct(product) {
    this.props.fetchAndAddToCart(product, this.props.user);
  }

  render() {
    return (
      <div>
        <SingleProduct
          addProduct={this.addProduct}
          selectedProduct={this.props.selectedProduct}
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ products, user }) => {
  return {
    user: user.user,
    selectedProduct: products.selectedProduct
  };
};

const mapDispatchToProps = {
  fetchProduct,
  fetchAndAddToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
