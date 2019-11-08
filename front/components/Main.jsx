import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarContainer from "../containers/NavbarContainer";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainers";
import { fetchUser } from "../store/actions/user";
import SingleProductContainer from "../containers/SingleProductContainer"



class Main extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser();
  }


  render() {
    return (
      <div id="main container-fluid">
        <NavbarContainer />
        <Switch>
          {console.log(this.props)}

          <Route exact path="/product/:id" component={SingleProductContainer}/>
          
          <Route exact path="/" component={HomeContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUser,
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
