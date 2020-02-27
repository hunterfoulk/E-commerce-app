import React, { useEffect, useReducer } from "react";
import "./Cart.css";
import { useStateValue } from "../../state";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import _ from "lodash";

function Cart() {
  const [{ products, components }, dispatch] = useStateValue();

  const handleRemove = async item => {
    const cart = _.filter(products, o => o._id !== item._id);

    await dispatch({
      type: "updateCart",
      products: cart
    });
    console.log(components);
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch({ type: "manage", components: { cart: false } });
    }
  }, [products]);

  const handleDecrementProduct = item => {
    if (products.some(i => i._id === item._id)) {
      if (item.quantity > 1) {
        let productsCopy = [...products];
        let indexOfProduct = productsCopy.findIndex(i => i._id === item._id);
        productsCopy[indexOfProduct].quantity--;

        dispatch({
          type: "updateCart",
          products: productsCopy
        });
      } else {
        let productsCopy = products.filter(i => i._id !== item._id);
        dispatch({
          type: "updateCart",
          products: productsCopy
        });
      }
    }
  };

  const handleIncrementProduct = item => {
    if (products.some(i => i._id === item._id)) {
      let productsCopy = [...products];
      let indexOfProduct = productsCopy.findIndex(i => i._id === item._id);
      productsCopy[indexOfProduct].quantity++;

      dispatch({
        type: "updateCart",
        products: productsCopy
      });
    }
  };

  return (
    <>
      <div className="cart">
        {products.map(item => (
          <>
            <img className="cart-images" src={item.imgurl} alt=""></img>
            <li className="cart-item">
              {item.title} :{" "}
              <input
                className="quant"
                type="number"
                value={item.quantity}
                name="quantity"
              ></input>
              <ArrowDropUpIcon
                onClick={() => handleIncrementProduct(item)}
                className="iconup"
              />
              <ArrowDropDownIcon
                onClick={() => handleDecrementProduct(item)}
                className="icondown"
              />
              <button className="libutton" onClick={() => handleRemove(item)}>
                Remove
              </button>
            </li>
          </>
        ))}
      </div>
    </>
  );
}
export default Cart;
