import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
// import { ProductConsumer, ProductContext } from "../context";

export default class ProductList extends Component {
  // state = {
  //   products: storeProducts,
  // };
  // static contextType = ProductContext;
  render() {
    // console.log(this.context);
    // let { products, detailProduct } = this.context;
    // products = products.map((product) => {
    //   return <Product key={product.id} products={product} />;
    // });
    // console.log(products);
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
