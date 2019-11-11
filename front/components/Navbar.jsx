import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const {
    handleInput,
    handleLogIn,
    handleLogOut,
    handleSubmitRegister,
    location,
    user
  } = props;

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-light">
      <div className="container-fluid">
        {Object.keys(user).length ? (
          <div>
            <button
              className="navbar-toggler"
              type="button"
              className="btn btn-light"
              onClick={handleLogOut}
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
                    <form id="registerForm" onSubmit={handleSubmitRegister}>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          onChange={handleInput}
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          onChange={handleInput}
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          onChange={handleInput}
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
            
            { location.pathname === '/' ? (
              ''
            ) : (
              <Link to={`/`}>
                <label>
                  <div className="brandLogoMiniDiv">
                    <p className="brandLogoMini">JS</p>
                  </div>
                </label>
              </Link>
            )}

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
                    <form onSubmit={handleLogIn}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          onChange={handleInput}
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          onChange={handleInput}
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
          {Object.keys(user).length ? (
            <span id="helloUser">Hello {user.name}</span>
          ) : (
            ''
          )}

          {/* code for adding searchbar to navbar */}

          {/* {props.location.pathname !== "/" && 
          <input
              onChange={props.handleChange}
              className=" active-purple-3 active-purple-4 form-control navSearch"
              type="text"
              placeholder="search"
              aria-label="Search"
              style={{ textAlign: "center" }}
            />
          } */} 

          <button id="cartButton">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  );
}
