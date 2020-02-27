import React, { useState, useEffect } from "react";
import "./Mens.css";
import axios from "axios";
import { useStateValue } from "../../state";

export default function Mens() {
  const [{ products, mensType }, dispatch] = useStateValue();
  const [clothes, setClothes] = useState([]);

  const request = async () => {
    let queryString = "?gender=MEN";
    if (mensType) queryString += `&category=${mensType}`;

    const res = await axios.get(
      `http://localhost:5000/clothes/products${queryString}`
    );

    setClothes(res.data);
  };

  useEffect(() => {
    request();
  }, [mensType]);

  const filterCategory = e => {
    dispatch({ type: "mensType", mensType: e.target.title });
  };

  //add product and quanity to cart
  const handleAddToCart = async product => {
    let productCopy = { ...product, quantity: 1 };

    //check if product is already added to the cart
    if (products.some(p => p._id === product._id)) {
      //if it is then just increment the quantity
      let productsCopy = [...products];
      let indexOfProduct = productsCopy.findIndex(p => p._id === product._id);
      productsCopy[indexOfProduct].quantity++;
      //console.log("productCopy", productCopy);
      dispatch({
        type: "addProduct",
        products: productsCopy
      });
    } else {
      //if not add the product object to the cart
      dispatch({
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

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <div className="prodcontainer">
        <div className="prodheader"></div>
        <div className="prodsidebar">
          <div className="sidebarcontents">
            <div className="section">
              <h3>Shop by gender</h3>
              <li>Mens</li>
              <li>
                <a href="/womens">Womens</a>
              </li>
            </div>

            <div className="section">
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
        <div className="productslist">
          {clothes.map(product => (
            <li className="mens-images" key={products._id}>
              <img src={product.imgurl} alt="/"></img>
              <div className="middle">
                <div
                  className="mens-hover"
                  onClick={() => handleAddToCart(product)}
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
