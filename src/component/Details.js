import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            price,
            inCart,
            company,
            info,
            img,
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              {/* <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div> */}
              {/* end title */}
              {/* product info  */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>{title}</h2>
                  <h6 className="text-title text-uppercase text-muted mt-3 mb-3">
                    made by : <span className="text-uppercase"> {company}</span>
                  </h6>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  {/* <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    information :
                  </p>
                  <p className="text-muted lead text-justify">{info}</p> */}

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">information :</p>
                  <ul className="text-muted infof lead " >
                    {
                      info.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })
                    }
                  </ul>
                  {/* button */}
                  <div>
                    <Link to="/">
                      <ButtonContainer cart>back to store </ButtonContainer>

                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
