import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

function Navbar({ open }) {
  //cart open

  //mens dropdown
  const [mensDropdown, setMensDropdown] = useState(false);
  const [womensDropdown, setWomensDropdown] = useState(false);
  const [clickout, setClickout] = useState(false);

  const Clickout = () => (
    <div className="clickout" onClick={toggleMensDropdown}></div>
  );
  const Clickouter = () => (
    <div className="clickout" onClick={toggleWomensDropdown}></div>
  );

  const toggleMensDropdown = () => {
    setMensDropdown(!mensDropdown);
    setWomensDropdown(false);
    setClickout(true);
  };

  const toggleWomensDropdown = () => {
    setWomensDropdown(!womensDropdown);
    setMensDropdown(false);
    setClickout(true);
  };

  return (
    <>
      {mensDropdown && <Clickout />}
      {womensDropdown && <Clickouter />}

      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">logo</Link>
          </div>
          <div className="navlink">
            <ul id="menu">
              <li className="navlink">
                <a href="/">Home</a>
              </li>
              <li className="navlink">
                <a href="/womens" onMouseEnter={toggleWomensDropdown}>
                  Womens
                  <CSSTransition
                    in={womensDropdown}
                    classNames="womens-dropdown"
                    onMouseEnter
                    unmountOnExit
                    appear
                  >
                    <div className="womens-dropdown">
                      <div className="womens-dropdown-content">
                        <p>Shirts</p>
                        <p>Jeans</p>
                        <p>Shorts</p>
                      </div>
                    </div>
                  </CSSTransition>
                </a>
              </li>
              <li className="navlink">
                <a href="/mens" onMouseEnter={toggleMensDropdown}>
                  Mens
                </a>
                <CSSTransition
                  in={mensDropdown}
                  classNames="mens-dropdown"
                  onMouseEnter
                  unmountOnExit
                  appear
                >
                  <div className="mens-dropdown">
                    <div className="mens-dropdown-content">
                      <p>Shirts</p>
                      <p>Jeans</p>
                      <p>Shorts</p>
                    </div>
                  </div>
                </CSSTransition>
              </li>
              <li className="navlink">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fa-icons">
          <FontAwesomeIcon className="searchitems" icon={faSearch} size="lg" />

          <Link onClick={open}>
            <FontAwesomeIcon
              className="searchitems"
              icon={faShoppingBag}
              size="lg"
            />
          </Link>

          <FontAwesomeIcon className="searchitems" icon={faUser} size="lg" />
        </div>

        <span className="icon icon-bars overlay"></span>
      </nav>

      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Womens</a>
          </li>
          <li>
            <a href="#about">Mens</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
