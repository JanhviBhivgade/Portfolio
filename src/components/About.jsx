import React from 'react'
import './About.css'
import pic from './pic.jpg'

const About = () => {
  return (
    <section class="about-section" id="about">
      
    <div class="about-container">
      <div class="about-image">
        <img src={pic} alt="About Me"/>
      </div>

      <div class="about-content">
        <h2>About Me</h2>

        <p>
          Hi, I’m <span class="highlight">Janhvi</span>, a passionate developer with a knack for turning ideas into elegant and functional digital experiences. 
          I enjoy crafting solutions that blend creativity and logic. From building responsive web applications to designing interactive user interfaces, 
          my goal is to create impactful experiences that make a difference.
        </p>

        <p>
          Outside of work, I’m constantly exploring new technologies, keeping myself updated with the latest trends in web development. 
          Let’s collaborate and build something extraordinary!
        </p>
        
        <a href="http://linkedin.com/in/janhvi-bhivgade-29bb6b245" class="btn-primary">Contact Me</a>
      </div>

    </div>
    
  </section>
  



  )
}

export default About
