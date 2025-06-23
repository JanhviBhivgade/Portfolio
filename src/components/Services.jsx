import React from "react";
import "./Services.css";

// Import your project images
import project1 from "../assets/project1.png"; 
import project2 from "../assets/project2.png"; 
import project3 from "../assets/project3.png"; 
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

// Projects array
const projects = [
  {
    title: "Payroll Expense Manager",
    description: "A comprehensive payroll management system with expense tracking and reporting features.",
    image: project1,
    link: "https://payroll-system-sepia.vercel.app/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Netflix Dashboard",
    description: "Interactive dashboard for Netflix-style content management with analytics and user insights.",
    image: project2,
    link: "https://netflix-dashboard.vercel.app/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Hotel Booking Platform",
    description: "Full-featured hotel booking website with search, filtering, and reservation management.",
    image: project3,
    link: "https://hotel-booking-website-silk.vercel.app/",
    tags: ["React JS", "TailwindCSS", "Vite", "NPM"],
  },
  {
    title: "Climate Tracker",
    description: "Dynamic weather application with climate data visualization and forecasting features.",
    image: project4,
    link: "https://climate-tracker-liart.vercel.app/",
    tags: ["React JS", "Weather API", "TailwindCSS", "Vite", "NPM"],
  },
  {
    title: "Personal Portfolio",
    description: "Modern portfolio website showcasing projects, skills, and professional experience.",
    image: project5,
    link: "https://example.com/project5",
    tags: ["React", "Three.js", "GSAP"],
  }
];

const ModernProjects = () => {
  return (
    <section className="modern-projects-section">
      <div className="background-pattern"></div>
      
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Explore my latest work showcasing innovative solutions and creative problem-solving across various domains
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-button"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="tags-container">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;
