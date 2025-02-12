import React, { useState } from "react";
import "../styles/projects.css";
import stock from "../assets/stock.png";
import breast from "../assets/breast.webp";
import Eplant from "../assets/Eplant.jpg";
import Bank from "../assets/bank.jpg";
import Spam from "../assets/spam.jpg";
import Movie from "../assets/movie.jpg";

const projects = [
  {
    title: "Breast Cancer Prediction",
    description:
      "Machine learning solution for breast cancer prediction using Support Vector Classifier & Regressor",
    details: "Implemented with Python, Scikit-learn, and Pandas.",
    image: breast,
    link: 'https://github.com/abhay-2108/Breast-Cancer-Prediction',
  },
  {
    title: "E-Plant Shopping",
    description:
      "A responsive plant-focused web application with a catalog, cart UI, and Tailwind CSS styling.",
    details: "Developed using Javascript, ExpressJs, and Tailwind CSS.",
    image: Eplant,
    link: 'https://github.com/abhay-2108/E-Plant-Shopping',
  },
  {
    title: "Stock Market Prediction",
    description:
      "Predicts stock prices using machine learning and deep learning techniques.",
    details: "Models include Random Forest and ANN.",
    image: stock,
    link: 'https://github.com/abhay-2108/Stock-Prediction-using-Random-Forest-and-ANN',
  },
  {
    title: "Movie Recommendation System",
    description:
      "A Content-Based Movie Recommendation System. It provides personalized movie recommendations based on user input.",
    details: "Built with Scikit-learn, NLP, Flask, HTML & CSS",
    image: Movie,
    link: 'https://github.com/abhay-2108/Movie-Recommandation-System',
  },
  {
    title: "Basic Banking System",
    description:
      "A banking system with secure transaction operations and MySQL database.",
    details: "Built with Express.js, Node.js, and MySQL.",
    image: Bank,
    link: 'https://github.com/abhay-2108/Basic-Banking-System',
  },
  {
    title: "SMS Spam Detection",
    description:
      "Detects SMS spam using a Multinomial Naive Bayes classifier and TF-IDF vectorization.",
    details: "Implemented in Python with Flask API.",
    image: Spam,
    link: 'https://github.com/abhay-2108/SMS-Spam-Detection',
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner" style={{ transition: "transform 0.6s ease-in-out" }}>
              <div className="card-front">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.details}</p>
                  <button className='btn'>
                    <a className="resume" href={project.link}>Open Project</a>
                    </button>
                </div>
              </div>
              <div className="card-back">
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;