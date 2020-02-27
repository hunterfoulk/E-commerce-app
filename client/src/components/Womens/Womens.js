import React, { useState, useEffect } from "react";
import "./Womens.css";
import axios from "axios";
import { useStateValue } from "../../state";

export default function Womens() {
  const [{ products, womensType }, dispatch] = useStateValue();

  const [clothes, setClothes] = useState([]);

  const request = async () => {
    let queryString = "?gender=WOMEN";
    if (womensType) queryString += `&category=${womensType}`;

    const res = await axios.get(
      `http://localhost:5000/clothes/products${queryString}`
    );

    setClothes(res.data);
  };
  useEffect(() => {
    request();
  }, [womensType]);

  const filterCategory = e => {
    dispatch({ type: "womensType", womensType: e.target.title });
  };

  //add product and quanity to cart
  const handleAddToCart = async product => {
    let productCopy = { ...product, quantity: 1 };

    //check if product is already added to the cart
    if (products.some(p => p._id === product._id)) {
      //if it is, then just increment the quantity
      let productsCopy = [...products];
      let indexOfProduct = productsCopy.findIndex(p => p._id === product._id);
      products[indexOfProduct].quantity++;

      await dispatch({
        type: "addProduct",
        products: productsCopy
      });
    } else {
      //if not, add the product object to the cart
      await dispatch({
        type: "addProduct",
        products: [...products, productCopy]
      });
    }
    dispatch({
      type: "manage",
      components: {
        cart: true
      }
    });
  };

  return (
    <>
      <div className="womens-prodcontainer">
        <div className="womens-prodheader"></div>
        <div className="womens-prodsidebar">
          <div className="womens-sidebarcontents">
            <div className="womens-section">
              <h3>Shop by gender</h3>
              <li>
                <a href="/mens">Mens</a>
              </li>
              <li>Womens</li>
            </div>

            <div className="womens-section">
              <h3>Shop by category</h3>
              <li onClick={filterCategory}>View All</li>
              <li onClick={filterCategory} id="cat" title="TOP">
                Tops
              </li>
              <li onClick={filterCategory} id="cat" title="JEANS">
                Jeans
              </li>
              <li onClick={filterCategory} id="cat" title="SHORTS">
                Shorts
              </li>
            </div>
          </div>
        </div>
        <div className="womens-productslist">
          {clothes.map(product => (
            <li className="womens-images" key={clothes._id}>
              <img src={product.imgurl} alt="/"></img>
              <div className="middle">
                <div
                  onClick={() => handleAddToCart(product)}
                  className="womens-hover"
                >
                  Buy Now
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
