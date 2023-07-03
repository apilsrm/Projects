import "./Footer.css";
import React from "react";
import { FaHome, FaPhone ,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
             <FaHome size={20} style={{color :'#fff', marginRight:"2rem"}} /> 
            <div>
              <p>Kathmandu Nepal</p>
            </div>
          </div>

          <div className="phone">
            <h4>
            <FaPhone size={20} style={{color :'#fff', marginRight:"2rem"}} /> 
            <p>+9770000000000</p>
            </h4>
          </div>

          <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color :'#fff', marginRight:"2rem"}} /> 
            <p>apilsharma021@gmail.com</p>
            </h4>
          </div>
           
        </div>

        <div className="right"></div>
        <h4>About the website</h4>
        <p>This is a Apil Sharma. I enjoy discussing new projects and design challenges.</p>
      <div className="social">
      <FaFacebook size={30} style={{color :'#fff', marginRight:"1rem"}} /> 
      <FaTwitter size={30} style={{color :'#fff', marginRight:"1rem"}} /> 
      <FaLinkedin size={30} style={{color :'#fff', marginRight:"1rem"}} /> 
      </div>
      </div>
    </div>
  );
};

export default Footer;
