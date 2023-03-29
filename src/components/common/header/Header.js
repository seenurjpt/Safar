import React from 'react'
import '../header/Header.css'

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
                        <li><a href="./index.html" className="active-nav">Home</a></li>
                        <li><a href="./Destinations.html">Destinations</a></li>
                        <li><a href="./gallery.html">Places</a></li>
                        <li><a href="./Packages.html">Packages</a></li>
                        <li><a href="./About.html">About</a></li>
                        <li><a href="./Contact.html">Contact</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </header>

    </>
  )
}

export default Header
