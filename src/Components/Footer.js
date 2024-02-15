import React from 'react'
import "../Styles/footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom';
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
                        <Link className='link' to="https://x.com/radhikaapaliwal?s=20">
                                                <CiTwitter className='footer_icon'/>
                        </Link>
                        <Link className='link' to="https://www.instagram.com/radhikaapaliwal/">
                                                <FaInstagram className='footer_icon'/>
                        </Link>
                        <Link className='link' to="https://www.linkedin.com/in/radhika-paliwal">
                                                <FaLinkedinIn className='footer_icon'/>
                        </Link>
                      </div>
                  </div>


                  <div className="footer_col" id="services">
                     <h3>Articles</h3>
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
                        <input className='emailsub' type="text" placeholder="Email here..."/>
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