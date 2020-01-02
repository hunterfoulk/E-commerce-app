import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import bannerLogo from "./img/bannerLogo.jpg";
import bottomPic1 from "./img/bottomPic1.PNG";
import bottomPic2 from "./img/bottomPic2.jpg";
import bottomPic3 from "./img/bottomPic3.PNG";
import bannerGif from "./img/bannerGif.gif";
import womenCard from "./img/womencardimg.jpg";
import womensCollection from "./img/womensCollection.jpg";
/* import { faInstagram } from "@fortawesome/free-brands-svg-icons"; */
import SlideShow from "./SlideShow.js";
import "./Fonts/AbhayaLibre-Bold.ttf";

export default function Homepage({ image }) {
  return (
    <>
      {/* WELCOME BANNER */}
      <div className="banner">
        <img src={bannerLogo} alt="bannerlogo" />
        <div className="bannerdetails">
          <div className="bannertext">
            <h1>Holiday And Winter Catalog</h1>
            <h1>Out Now!</h1>
          </div>

          <button variant="outlined" color="inherit" className="bannerbtn">
            Shop Men
          </button>
          <button variant="outlined" color="inherit" className="bannerbtn">
            Shop Women
          </button>
        </div>
      </div>

      {/* EXCLUSIVES */}

      {/* mens */}
      <div className="exclusivesparent">
        <div className="menscollection">
          <Link>
            <div className="menscollect">
              <p className="menscollectiontitle">Mens Exclusives</p>
            </div>
          </Link>
          <Link>
            <div className="menscollection">
              <SlideShow />
            </div>
          </Link>
        </div>

        {/* womens */}
        <div className="womenscollection">
          <Link>
            <p className="womenscollectiontitle">Womens Collections</p>
          </Link>
          <Link>
            <div className="womenscollection">
              <img className="cardaccent" src={womenCard} alt="" />
              <img className="womenscard" src={womensCollection} alt="" />
            </div>
          </Link>
        </div>
      </div>

      {/* SEASONAL BANNER */}

      <div className="bannercontainer">
        <img className="bannergif" src={bannerGif} alt="bannergif" />
        <div className="bottombuttonscontainer">
          <button variant="outlined" color="inherit" className="bannerbtn">
            Shop Men
          </button>

          <button variant="outlined" color="inherit" className="bannerbtn">
            Shop Women
          </button>
        </div>
      </div>

      {/* SHOP NOW */}

      <div className="bottomimagecontainer">
        <div className="bottomcontainer">
          <Link>
            <p className="pictexts" href="/">
              Shop Now
            </p>
            <img src={bottomPic1} alt="bottompic1" />
          </Link>

          <Link>
            <p className="pictexts" href="/">
              Shop Now
            </p>
            <img src={bottomPic2} alt="bottompic2" />
          </Link>

          <Link>
            <p className="pictexts" href="/">
              Shop Now
            </p>
            <img src={bottomPic3} alt="bottompic3" />
          </Link>
        </div>
      </div>

      {/* FOOTER */}

      <div class="footercontainer"></div>
      <footer>
        <section class="footer-main">
          <div class="footer">
            <h2 class="footer-titles">About</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="footer-titles">Resources</h2>
            <ul>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="footer-titles">Contact</h2>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="footer-titles">Stay Updated</h2>
            <p className="newslettertext">Subscribe to our newsletter</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              ></input>
              <input type="submit" value="Subscribe"></input>
            </form>
          </div>
        </section>

        <section class="footer-icons">
          <ul class="footer-icons-list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <section class="footer-copyright">
          <ul class="footer-copyright-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li> 2019 Copyright Clothes-App</li>
          </ul>
        </section>
      </footer>
    </>
  );
}
