import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-lg-5 text-center text-title text-capitalize pt-5">
            <h1 className="display-3 mt-lg-5  ">404 error</h1>
            {/* <h1></h1> */}
            <h2>page not found</h2>
            <h3>the request URl <span className="text-danger font-weight-bold">"{this.props.location.pathname}"</span> was not found </h3>
          </div>
        </div>
      </div>
    );
  }
}
