import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";

import { userLogOutCart } from "../store/actions/cart";
import { userRegUser, userLogOut, userLogIn } from "../store/actions/user";

import { fetchCart } from "../store/actions/cart";

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      wrongUser: ""
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmitRegister(event) {
    event.preventDefault();
    this.props.userRegUser(
      this.state.name,
      this.state.email,
      this.state.password
    );
    document.querySelector("#registerForm").reset();
    document.querySelector("#registerClose").click();

    // .then(() => this.props.history.push("/"));
  }

  handleLogOut(event) {
    event.preventDefault();
    this.props.userLogOut();
    this.props.userLogOutCart();
    window.localStorage.clear();
    //.then(() => this.props.history.push("/"));
  }
  handleLogIn(event) {
    event.preventDefault();
    document.querySelector("#loginClose").click();
    this.props.userLogIn(this.state.email, this.state.password).then(res => {
      if (!res) {
        alert("Wrong username or password");
      } else {
        this.props.fetchCart(this.props.user, this.props.cart);
        window.localStorage.clear();
      }
    });
  }

  handleInput(e) {
    const tag = e.target.name.toLowerCase();
    this.setState({ [tag]: e.target.value });
  }

  render() {
    const { user, location } = this.props;
    return (
      <div>
        <Navbar
          user={user}
          wrongUser={this.state.wrongUser}
          location={location}
          handleLogIn={this.handleLogIn}
          handleInput={this.handleInput}
          handleLogOut={this.handleLogOut}
          handleSubmitRegister={this.handleSubmitRegister}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  cart: state.cart.cart
});

const mapDispatchToProps = {
  userLogOut,
  userLogOutCart,
  userRegUser,
  userLogIn,
  fetchCart
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
