import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../header/Header1.css";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-1 d-flex ">
            <div>
              <p className="sa fw-medium">स</p>
            </div>
            <div>
              <p className="far fw-bolder">FAR</p>
            </div>
          </div>
          <div className="navlinks">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/home" ClassName="active" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/destinations" activeClassName="active">
                 Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/places" activeClassName="active">
                  Places
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/packages" activeClassName="active">
                  Packages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/contact" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink  to="/booking" activeClassName="active">
                  Book Here
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink  to="/login" ClassName="active-nav">
                <i class="fa-solid fa-circle-user"></i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
