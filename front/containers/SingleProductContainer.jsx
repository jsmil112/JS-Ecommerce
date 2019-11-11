import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';
import { fetchProduct } from '../store/actions/product';

class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <SingleProduct selectedProduct={this.props.selectedProduct}/>
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => {
    return ({
        selectedProduct: products.selectedProduct
    })
}

const mapDispatchToProps = {
  fetchProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
