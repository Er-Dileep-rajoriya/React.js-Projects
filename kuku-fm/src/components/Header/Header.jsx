import "./header.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="side-icon"
        src="https://img.icons8.com/?size=100&id=3096&format=png"
        alt="icon"
      />
      <div className="name">
        <a href="#" style={{ textDecoration: "none" }}>
          <h3>
            <span className="span1">KUKU</span>
            <span className="span2">FM</span>
          </h3>
        </a>
      </div>

      <div className="lang">
        <p>Languages</p>
        <p className="p2">Hindi</p>
      </div>

      <div className="free-trial">
        <p>Get Free Trial</p>
      </div>

      <div className="coins">
        <p>Buy Coins</p>
      </div>

      <div className="auth">
        <p>Login/Signup</p>
      </div>
    </div>
  );
}

export default Header;
