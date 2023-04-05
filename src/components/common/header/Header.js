import React from 'react'
import '../header/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <>
    <body>
    <div class="wrapper">
      <nav>
        <a href="#" class="logo">LOGO</a>
        <input type="checkbox" name="" id="toggle"/>
        <label for="toggle"><i class="material-icons"><ion-icon name="menu-outline"></ion-icon></i></label>
        <div class="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </body>

    {/* <header>
        <div className="navbar">

            <div className="contaner">
                <div className="logo-1 d-flex ">
                    <div>
                        <p className="sa fw-medium">स</p>
                    </div>
                    <div>
                        <p className="far fw-bolder">FAR</p>
                    </div>
                </div>
                <div className="navlinks kobra">
                    <ul>
                        <li><Link to="/home" >Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/places">Places</Link></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </header> */}

    </>
    )
}

export default Header
