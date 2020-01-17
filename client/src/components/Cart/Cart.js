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

  const inc = () => {
    dispatch({
      type: "increment",
      products: products[0].quantity++
    });
  };

  const dec = () => {
    console.log(products);
    // dispatch({
    //   type: "decrement",
    //   products: products.quantity--
    // });
  };

  useEffect(() => {}, [products]);

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
              <ArrowDropUpIcon onClick={() => inc(item)} className="iconup" />
              <ArrowDropDownIcon
                onClick={() => dec(item)}
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
