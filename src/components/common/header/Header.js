import React from 'react'
import '../header/Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>

      <header>
        <div className="navbar">

            <div className="container">

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
                        <li><NavLink activeClassName="active" to="/home" >Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/destinations">Destinations</NavLink></li>
                        <li><NavLink activeClassName="active" to="/places">Places</NavLink></li>
                        <li><NavLink activeClassName="active" to="/packages">Packages</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </header>

    </>
  )
}

export default Header
