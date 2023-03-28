import React from 'react'
import '../header/Header.css'

const Header = () => {
  return (
    <>

      <header>
        <div class="navbar">

            <div class="container">

                <div class="logo-1 d-flex ">
                    <div>
                        <p class="sa fw-medium">स</p>
                    </div>
                    <div>
                        <p class="far fw-bolder">FAR</p>
                    </div>
                </div>

                <div class="navlinks">
                    <ul>
                        <li><a href="./index.html" class="active-nav">Home</a></li>
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
