// import React from 'react'
// import '../header/Header.css'
// import { NavLink } from 'react-router-dom'

// const Header = () => {
//   return (
//     <>

//       <header>
//         <div className="navbar">

//             <div className="container">

//                 <div className="logo-1 d-flex ">
//                     <div>
//                         <p className="sa fw-medium">स</p>
//                     </div>
//                     <div>
//                         <p className="far fw-bolder">FAR</p>
//                     </div>
//                 </div>

//                 <div className="navlinks kobra">
//                     <ul>
//                         <li><NavLink activeClassName="active" to="/home" >Home</NavLink></li>
//                         <li><NavLink activeClassName="active" to="/destinations">Destinations</NavLink></li>
//                         <li><NavLink activeClassName="active" to="/places">Places</NavLink></li>
//                         <li><NavLink activeClassName="active" to="/packages">Packages</NavLink></li>
//                         <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
//                         <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
//                     </ul>
//                 </div>

//             </div>
//         </div>

// {/* <nav className="navbar navbar-expand-xl navbar-dark">
//         <div className="container">

//         <div className="logo-1 d-flex ">
//                     <div>
//                         <p className="sa fw-medium">स</p>
//                     </div>
//                     <div>
//                         <p className="far fw-bolder">FAR</p>
//                     </div>
//                 </div>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse show navlinks" id="navbarDark">
//             <ul className="navbar-nav ms-auto mb-2 mb-xl-0 fs-5 ms-auto p-2 text-center">
//               <li className="nav-item me-3">
//                 <NavLink activeclassName="active " to="/home" >Home</NavLink>
//               </li>
//               <li className="nav-item me-3">
//                 <NavLink activeclassName="nav-link" to="/destinations">Destinations</NavLink>
//               </li>
//               <li className="nav-item me-3">
//                 <NavLink activeclassName="nav-link" to="/places">Places</NavLink>
//               </li>

//               <li className="nav-item me-3">
//                 <NavLink activeclassName="nav-link" to="/packages">Packages</NavLink>
//               </li>
//               <li className="nav-item me-3">
//                 <NavLink activeclassName="nav-link" to="/about">About</NavLink>
//               </li>
//               <li className="nav-item me-3">
//                 <NavLink activeclassName="nav-link" to="/contact">Contact</NavLink>
//               </li>
//             </ul>

//           </div>

//     </div>
//       </nav> */}
//     </header>

//     </>
//   )
// }

// export default Header

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
                <NavLink to="/home" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/destinations" activeClassName="active">
                 Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/places" activeClassName="active">
                  Places
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/packages" activeClassName="active">
                  Packages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/contact" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/booking" activeClassName="active">
                  Book Here
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="book07">
            <p><a>Book Here</a></p>
          </div> */}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
