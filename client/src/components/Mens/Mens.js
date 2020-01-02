import React, { useState, useEffect } from "react";
import "./Mens.css";
import axios from "axios";

export default function Mens() {
  const [clothes, setClothes] = useState([]);
  /*  const [list, setList] = useState();
 

   const handleRemoveItem = category => {
    setList(list.filter(list => list.category !== category));
  };  */

  const request = async () => {
    const res = await axios.get(
      "http://localhost:5000/clothes/products?gender=MEN"
    );
    console.log(res.data);
    setClothes(res.data);
  };
  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <div className="prodcontainer">
        <div className="prodheader"></div>
        <div className="prodsidebar">
          <div className="sidebarcontents">
            <div className="section">
              <h3>Shop by gender</h3>
              <li>Mens</li>
              <li>Womens</li>
              <li>Unisex</li>
            </div>

            <div className="section">
              <h3>Shop by category</h3>
              <li>View All</li>
              <li>Tops</li>
              <li>Jeans</li>
              <li>Shorts</li>
            </div>
          </div>
        </div>
        <div className="productslist">
          {clothes.map(product => (
            <li className="mens-images" key={clothes._id}>
              <img src={product.imgurl} alt="/"></img>
              <div className="middle">
                <div className="mens-hover">Buy Now</div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
