import React from 'react'
import '../header/Header.css'

const Footer = () => {
  return (
    <div>
       <footer>
        <div class="footer-x">

            <div class="logo-1 d-flex ">
                <div>
                    <p class="sa fw-medium">स</p>
                </div>
                <div>
                    <p class="far fw-bolder">FAR</p>
                </div>
            </div>

            <div class="foot-nav">
                <ul class="d-flex gap-3 list-unstyled">
                    <li><a href="">Home</a></li>
                    <li><a href="">Destinations</a></li>
                    <li><a href="">Places</a></li>
                    <li><a href="">Packages</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div class="socio">
                <a href="" class="px-3 fs-4 text-decoration-none text"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="" class="px-3 fs-4 text-decoration-none text"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="" class="px-3 fs-4 text-decoration-none text"><ion-icon name="logo-instagram"></ion-icon></a>
            </div>

            <div class="copyright">
                <p>Copyright @ 2023 All Rights Reserved</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
