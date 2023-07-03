import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"; //icon name Bars category Fa, Times - X button //

const Navbar = () => {
    const [ hamClick, sethamClick ] = useState(false);
    const handleClick = () => sethamClick(!hamClick);

    //for color
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);



  return (
    <div className= {color ? "header header-bg" : "header"}>
        <Link to ="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={hamClick ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/project">Project</Link>
            </li>
            <li>
                <Link to ="/about">About</Link>
            </li>
            <li>
                <Link to ="/contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {hamClick ? (<FaTimes  size={20} style={{color: "white"}}/> )
            : ( <FaBars  size={20} style={{color: "white"}}/>
            )}
            
            

        </div>

    </div>
  )
}

export default Navbar