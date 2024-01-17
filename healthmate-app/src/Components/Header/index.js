import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
        <header>
        <div className="header">
        <div className="navimagewithname">
            <img className='footer-logo' alt='logo' src="https://shorturl.at/hlB12"/>
        <Link to="/" className="heading">HealthMate</Link>
       </div>
        <nav className="navigation">
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/diet">Diet</a>
            </li>
            <li>
                <a href="/yoga">Exercise</a>
            </li>
            <li>
                <a href="/bmi">BMI</a>
            </li>
            </ul>
        </nav>
        </div>
        </header>
    
  );
};

export default Header;
