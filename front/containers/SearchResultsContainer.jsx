import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";
import { searchProducts } from "../store/actions/product";

export class SearchResultsContainer extends Component {
  constructor(props) {
    super(props);
    props.searchProducts(props.searchQuery);
  }

  render(){
    return(<div>
      <SearchResults products={this.props.products}/>
    </div>)
  }
}

const mapDispatchToProps = {
  searchProducts
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer);
