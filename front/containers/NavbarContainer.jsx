import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import {
  userLogOut,
  userLogIn,
  userRegUser,
  googleLogIn
} from '../store/actions/user';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleSubmitRegister(event) {
    event.preventDefault();
    this.props.userRegUser(
      this.state.name,
      this.state.email,
      this.state.password
    );
    document.querySelector('#registerForm').reset();
    document.querySelector('#registerClose').click();

    // .then(() => this.props.history.push("/"));
  }

  handleLogOut(event) {
    event.preventDefault();
    this.props.userLogOut();
    //.then(() => this.props.history.push("/"));
  }
  handleLogIn(event) {
    event.preventDefault();
    document.querySelector('#loginClose').click();
    this.props.userLogIn(this.state.email, this.state.password);

    // .then(() => this.props.history.push("/"));
  }

  handleGoogle(event) {
    event.preventDefault();
    googleLogIn();
  }

  handleEmailInput(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordInput(e) {
    this.setState({ password: e.target.value });
  }

  handleNameInput(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Navbar
          user={this.props.user}
          handleLogIn={this.handleLogIn}
          handleGoogle={this.handleGoogle}
          handleNameInput={this.handleNameInput}
          handleEmailInput={this.handleEmailInput}
          handlePasswordInput={this.handlePasswordInput}
          handleLogOut={this.handleLogOut}
          handleSubmitRegister={this.handleSubmitRegister}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  userLogOut,
  userRegUser,
  userLogIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
