import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts } from "../data";
// import { ProductConsumer } from "../context";
import { ProductContext } from "../context";

export default class ProductList extends Component {
  // state = {
  //   products: storeProducts,
  // };
  static contextType = ProductContext;
  render() {
    // console.log(this.context);
    // const prod = this.context;
    // console.log('this contest static value', prod);
    let { products, handleDetail, addToCart, openModal } = this.context;
    products = products.map((product) => {
      return <Product key={product.id} product={product} handleDetail={handleDetail} addToCart={addToCart} openModal={openModal} />;
    });
    // console.log('this is my product', products);
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            <Title name="our" title="product" />
            <div className="row">
              {products}
              {/* <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
