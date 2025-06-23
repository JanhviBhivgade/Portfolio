import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Janhvi Janardan Bhivgade. All rights reserved.</p>

        <div className="social-links">

          <a href="https://github.com/JanhviBhivgade/Janhvi-Bhivgade" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href="http://linkedin.com/in/janhvi-bhivgade-29bb6b245" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href="bhivgadejanhvi@gmail.com" target="_blank" rel="noopener noreferrer">
            Gmail
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
