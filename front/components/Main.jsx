import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route as R } from "react-router-dom";

import { fetchUser } from "../store/actions/user";
import { fetchCart } from "../store/actions/cart";

import Footer from "../components/Footer";

import HomeContainer from "../containers/HomeContainer";
import NavbarContainer from "../containers/NavbarContainer";
import CartContainer from "../containers/CartContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    this.props.fetchCart(this.props.user);
  }

  render() {
    const { location } = this.props;
    return (
      <div id="main container-fluid">
        <NavbarContainer location={location} />
        <Switch>
          <R path="/cart" component={CartContainer} />
          <R exact path="/product/:id" component={SingleProductContainer} />
          <R
            exact
            path="/:query"
            render={({ match, history }) => (
              <SearchResultsContainer
                searchQuery={match.params.query}
                history={history}
              />
            )}
          />
          <R exact path="/" component={HomeContainer} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUser,
  fetchCart
};

const mapStateToProps = state => ({
  user: state.user.user,
  isUrlHome: state.navbar.home
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
