import React, { Component } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
// import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { ProductWrapper } from "./Button";
// import { ProductContext } from "../context";


export default class Product extends Component {
  // static contextType = ProductContext;

  render() {
    // let { handleDetail, addToCart, openModal } = this.context;
    // console.log('default value', this.props);
    // console.log('this my method', this.context);
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => {
              this.props.handleDetail(id);
            }}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                this.props.addToCart(id);
                this.props.openModal(id);
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                  <i className="fa fa-cart-plus" />
                )}
            </button>
          </div>
          {/* <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => {
                  value.handleDetail(id);
                }}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fa fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer> */}
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center font-weight-bold mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-0">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
