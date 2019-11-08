import React from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="text-center  brandLogo">JS</h1>
          <form onSubmit={props.handleSubmit}>
            <input
              onChange={props.handleChange}
              className=" active-purple-3 active-purple-4 mb-4 form-control"
              type="text"
              placeholder="search"
              aria-label="Search"
              style={{ textAlign: "center" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
