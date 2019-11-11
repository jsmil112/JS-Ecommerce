import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/actions/product';
import Search from '../components/Search';
import RandomView from '../components/RandomView';
import { searchProducts } from '../store/actions/product';

export class HomeContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.searchProducts(this.state.searchQuery);
    this.props.history.push(`/${this.state.searchQuery}`);
  }

  handleAdd() {}

  render() {
    return (
      <div>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <RandomView products={this.props.products} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts,
  searchProducts
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainers);
