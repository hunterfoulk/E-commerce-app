import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import carouselPic1 from "./img/carouselPic1.jpg";
import carouselPic2 from "./img/carouselPic2.jpg";
import carouselPic3 from "./img/carouselPic3.jpg";
import "./Homepage.css";

export default function Slideshow() {
  const carouselImages = [
    "carouselPic1.jpg",
    "carouselPic2.jpg",
    "carouselPic3.jpg"
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {}
  };

  return (
    <div className="slide-container">
      <Link>
        <Slide {...properties}>
          <div className="each-slide">
            <div
              className="imagecontainer"
              style={{ backgroundImage: `url(${carouselImages[0]})` }}
            >
              <img src={carouselPic1} alt=""></img>
            </div>
          </div>
          <div className="each-slide">
            <div
              className="imagecontainer"
              style={{ backgroundImage: `url(${carouselImages[1]})` }}
            >
              <img src={carouselPic2} alt=""></img>
            </div>
          </div>
          <div className="each-slide">
            <div
              className="imagecontainer"
              style={{ backgroundImage: `url(${carouselImages[2]})` }}
            >
              <img src={carouselPic3} alt=""></img>
            </div>
          </div>
        </Slide>
      </Link>
    </div>
  );
}
