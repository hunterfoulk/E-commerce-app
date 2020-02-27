import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Mens from "./components/Mens/Mens";
import Womens from "./components/Womens/Womens";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import { useStateValue } from "./state";

export default function App() {
  const [{ components, products }, dispatch] = useStateValue();

  const handleCartOpen = () => {
    if (products.length !== 0)
      dispatch({
        type: "manage",
        components: {
          cart: !components.cart
        }
      });
  };

  //saving added cart products to local storage
  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("my-products")
    );

    dispatch({
      type: "addProduct",
      products: productsFromLocalStorage ? [...productsFromLocalStorage] : []
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("my-products", JSON.stringify(products));
  }, [products]);

  return (
    <Router>
      <Navbar open={handleCartOpen} />
      {components.cart && <Cart />}
      <div className="main">
        <Route exact path="/" component={Homepage} />
        <Route path="/mens" component={Mens} />
        <Route path="/womens" component={Womens} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
