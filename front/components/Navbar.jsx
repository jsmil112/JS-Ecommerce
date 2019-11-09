import React from 'react';
import { AiOutlineShoppingCart, AiOutlineGoogle } from 'react-icons/ai';

export default function Navbar(props) {
  console.log(props);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-light">
      <div className="container-fluid">
        {Object.keys(props.user).length ? (
          <div>
            <button
              className="navbar-toggler"
              type="button"
              className="btn btn-light"
              onClick={props.handleLogOut}
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              className="btn btn-light"
              data-toggle="modal"
              id="registerButton"
              data-target="#register"
            >
              REGISTER
            </button>

            <div
              className="modal fade"
              id="register"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">
                      Register
                    </h2>
                    <button
                      type="button"
                      className="close"
                      id="registerClose"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form
                      id="registerForm"
                      onSubmit={props.handleSubmitRegister}
                    >
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          onChange={props.handleNameInput}
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          onChange={props.handleEmailInput}
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          onChange={props.handlePasswordInput}
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-dark">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              id="loginButton"
              className="btn btn-light"
              data-toggle="modal"
              data-target="#login"
            >
              LOGIN
            </button>

            <div
              className="modal fade"
              id="login"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">
                      Login
                      <button onClick={props.handleGoogle}>
                        <AiOutlineGoogle />
                      </button>
                    </h2>
                    <button
                      type="button"
                      className="close"
                      id="loginClose"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={props.handleLogIn}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          onChange={props.handleEmailInput}
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          onChange={props.handlePasswordInput}
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-dark">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          {Object.keys(props.user).length ? (
            <span id="helloUser">Hello {props.user.name}</span>
          ) : (
            ''
          )}

          <button id="cartButton">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  );
}
