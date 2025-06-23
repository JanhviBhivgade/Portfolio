import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="hero-content">
        <h1>Janhvi Bhivgade</h1>
        <h2>Frontend Developer</h2>

        <p>
          Crafting beautiful and interactive web experiences with modern technologies.
        </p>
        
        <div className="hero-buttons">
        <a
          href="/Janhvi_Bhivgade_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <i className="fas fa-download"></i> Download Resume
        </a>


        </div>

        <div className="social-icons">

          <a href="https://github.com/JanhviBhivgade/Janhvi-Bhivgade" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>

          <a href="http://linkedin.com/in/janhvi-bhivgade-29bb6b245" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://x.com/JanhviBhivgade" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;
