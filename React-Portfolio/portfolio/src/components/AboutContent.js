import { Link } from "react-router-dom";
import "../components/AboutContent.css";
import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/project4.png";
 
 const AboutContent = () => {
   return (
     <div className="about">
        <div className="left">
            <h1>Who Am i ?  </h1>
            <p>Iam a react developer . Icreate respomsive secure website for my clients.</p> 
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="imgContainer">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
     </div>
   )
 }
 
 export default AboutContent