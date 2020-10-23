import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Cart from "./component/Cart";
import Default from "./component/Default";
import { Route, Switch } from "react-router-dom";
import Modal from "./component/Modal";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
