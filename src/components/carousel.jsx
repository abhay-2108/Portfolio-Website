import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import python from '../assets/python.svg'
import c from '../assets/c.jpg'
import C_plus from '../assets/c++.webp'
import java from '../assets/java.png'
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.webp'
import bootstrap from '../assets/bootstrap.webp'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import github from '../assets/github.jpg'
import machine_learning from '../assets/machine_learning.jpg'
import tensor from '../assets/tensor.png'
import '../styles/carousel.css'

const skills = [
  { name: "Python", image: python },
  { name: "C", image: c },
  { name: "C++", image: C_plus },
  { name: "Java", image: java },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: javascript },
  { name: "Bootstrap", image: bootstrap },
  { name: "Tailwind", image: tailwind },
  { name: "React", image: react },
  { name: "SQL", image: sql },
  { name: "GitHub", image: github },
  { name: "Machine Learning", image: machine_learning },
  { name: "TensorFlow", image: tensor }
];

export default function SkillsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="skills-container">
      <h1 className="title">Skills</h1>
      <div className="skills-carousel">
        <button onClick={prevSlide} className="carousel-button left">
          <FaChevronLeft className="icon" />
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 50 }}
          transition={{ duration: 0.5 }}
          className="carousel-content"
        >
          <div className="skill-logo extra-large">
            <img src={skills[index].image} alt={skills[index].name} />
          </div>
          <h2 className="skill-name">{skills[index].name}</h2>
        </motion.div>
        <button onClick={nextSlide} className="carousel-button right">
          <FaChevronRight className="icon" />
        </button>
      </div>
    </div>
  );
}
