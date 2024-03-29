import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h4 className="text-muted">price : $ {price}</h4>
                      <Link to="/">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          onClick={() => closeModal()}
                          cart
                          className="mt-3"
                        >
                          go to Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #f3f3f3;
  }
`;
