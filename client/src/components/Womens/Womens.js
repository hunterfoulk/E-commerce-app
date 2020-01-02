import React, { useState, useEffect } from "react";
import "./Womens.css";
import axios from "axios";

export default function Womens() {
  const [clothes, setClothes] = useState([]);

  const request = async () => {
    console.log("request");
    const res = await axios.get(
      "http://localhost:5000/clothes/products?gender=WOMEN"
    );
    console.log(res.data);
    setClothes(res.data);

    /*      await axios
       .get("http://localhost:5000/clothes/products?gender=MEN&category=JEANS")
       .then(res => {
         console.log(res.data);
         const clothing = res.data;
         clothing.map(product => {
           setClothes(product);
         });
       })
       .catch(error => console.log(error));
     return setClothes(product); */
  };
  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <div className="womens-prodcontainer">
        <div className="womens-prodheader"></div>
        <div className="womens-prodsidebar">
          <div className="womens-sidebarcontents">
            <div className="womens-section">
              <h3>Shop by gender</h3>
              <li>mens</li>
              <li>womens</li>
              <li>unisex</li>
            </div>

            <div className="womens-section">
              <h3>Shop by category</h3>
              <li>tops</li>
              <li>jeans</li>
              <li>shorts</li>
            </div>
          </div>
        </div>
        <div className="womens-productslist">
          {clothes.map(product => (
            <li key={clothes._id}>
              <img src={product.imgurl} alt="/"></img>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
