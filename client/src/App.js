import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Mens from "./components/Mens/Mens";
import Womens from "./components/Womens/Womens";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart.js";
const App = () => (
  <Router>
    <Cart />
    <Navbar />
    <Route exact path="/" component={Homepage} />
    <Route path="/mens" component={Mens} />
    <Route path="/womens" component={Womens} />
    <Route path="/contact" component={Contact} />
  </Router>
);

export default App;
