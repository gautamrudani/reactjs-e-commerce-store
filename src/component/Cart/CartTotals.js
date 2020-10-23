import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button className="btn btn-outline-primary  text-uppercase mr-3 mb-3 py-2 px-5">
              back to store
            </button>
          </Link>
          <Link to="/">
            <button onClick={() => clearCart()} className="btn btn-outline-danger text-uppercase mb-3 py-2 px-5">
              clear cart
            </button>
          </Link>

          <h5>
            <span className="text-title">
              subtotal : </span> <strong>$ {cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">
              Tex : </span> <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">
              totals : </span> <strong>$ {cartTotal}</strong>
          </h5>
          <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
        </div>
      </div>
    </>
  );
}
