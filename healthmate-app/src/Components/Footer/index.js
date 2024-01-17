import './index.css'


import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img alt='logo' src="https://shorturl.at/hlB12" />
        </div>
        
        <div className="footer-socials">
          <ul>
            <li><a href="https://www.facebook.com/" rel="noreferrer" target='_blank'><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/i/flow/login" rel="noreferrer" target='_blank'><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/" rel="noreferrer" target='_blank'><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Salubify, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
