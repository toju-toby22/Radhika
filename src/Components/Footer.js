import React from 'react'
import "../Styles/footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer_wrapper'>
        <footer>
        <div className="footer_container">
            <div className="footer_row">
                  <div className="footer_col" id="company">
                      <img src="images/logo.png" alt="" className="logo"/>
                      <h1 className='footer-logo'>
                      Radhika
                      </h1>
                      <div className="social">
                        <FaFacebookF className='footer_icon'/>
                        <FaInstagram className='footer_icon'/>
                        <FaLinkedinIn className='footer_icon'/>
                      </div>
                  </div>


                  <div className="footer_col" id="services">
                     <h3>Services</h3>
                     <div className="links">
                        <a href="#">Mental Health Coaching</a>
                        <a href="#">Counselling</a>
                        <a href="#">Interior Decoration</a>
                        <a href="#">Graphics Design</a>
                     </div>
                  </div>

                  <div className="footer_col" id="useful-links">
                     <h3>Links</h3>
                     <div className="links">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Our Policy</a>
                        <a href="#">Help</a>
                     </div>
                  </div>

            </div>

            <div className="footer_row">
                  <div className="form">
                    <form action="">
                        <input type="text" placeholder="Email here..."/>
                        <button className='email'><IoMailOutline /></button>
                    </form>
                  </div>
            </div>

        </div>
     </footer>
    </div>
  )
}

export default Footer