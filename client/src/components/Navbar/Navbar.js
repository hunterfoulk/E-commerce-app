import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useStateValue } from "../../state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";



function Navbar({ open }) {
  const [{ mensType, womensType }, dispatch] = useStateValue();
  const [mensDropdown, setMensDropdown] = useState(false);
  const [womensDropdown, setWomensDropdown] = useState(false);
  const [clickout, setClickout] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchdropdown, setSearchdropdown] = useState(false);

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

  //search filter
  const handleSearchValue = async e => {
    if (e.target.value !== "") {
      setSearchdropdown(true);
      let filteredData = products.filter(
        item =>
          item.title?.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.gender?.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.category.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setData(filteredData);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    console.log(data);
    if (data.length === 0) {
      setSearchdropdown(false);
    }
  }, [data]);

  //search filter
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch(`http://localhost:5000/clothes/products`);
      let responseData = await response.json();
      setProducts(responseData);
    };
    fetchProducts();
    console.log("fetching on first render...");
  }, []);


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
                <a href="/womens" onMouseEnter={() => toggleWomensDropdown()}>
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
                        <Link
                          to="/womens"
                          onClick={() =>
                            dispatch({ type: "womensType", womensType: "TOP" })
                          }
                        >
                          Shirts
                        </Link>
                        <Link
                          to="/womens"
                          onClick={() =>
                            dispatch({
                              type: "womensType",
                              womensType: "JEANS"
                            })
                          }
                        >
                          Jeans
                        </Link>
                        <Link
                          to="/womens"
                          onClick={() =>
                            dispatch({
                              type: "womensType",
                              womensType: "SHORTS"
                            })
                          }
                        >
                          Shorts
                        </Link>
                      </div>
                    </div>
                  </CSSTransition>
                </a>
              </li>
              <li className="navlink">
                <a href="/mens" onMouseEnter={() => toggleMensDropdown()}>
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
                      <Link
                        to="/mens"
                        onClick={() =>
                          dispatch({ type: "mensType", mensType: "TOP" })
                        }
                      >
                        Shirts
                      </Link>
                      <Link
                        to="/mens"
                        onClick={() =>
                          dispatch({ type: "mensType", mensType: "JEANS" })
                        }
                      >
                        Jeans
                      </Link>
                      <Link
                        to="/mens"
                        onClick={() =>
                          dispatch({ type: "mensType", mensType: "SHORTS" })
                        }
                      >
                        Shorts
                      </Link>
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
          <input
            placeholder="Search"
            className="searchbar"
            type="search"
            onChange={handleSearchValue}
          ></input>
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

      {searchdropdown && (
        <div className="searchcontainer">
        <div className="filtered-search">
          {data.map((items, index) => (
            <ul key={index} className="searchul">
              <Link to={items.gender === "MEN" ? "/mens" : "/womens"}>
                <li>{items.gender}</li>
              </Link>
              <li>
                <img className="search-imgs" src={items.imgurl} alt="/"></img>
              </li>
              <li> {items.title}</li>
            </ul>
          ))}
        </div>
      </div>
      )}
    </>
  );
}

export default Navbar;
