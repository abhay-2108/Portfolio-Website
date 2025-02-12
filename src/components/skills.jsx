import React from 'react';
import '../styles/skills.css';
import python from '../assets/python.svg';
import c from '../assets/c.jpg';
import c_plus from '../assets/c++.webp'; //  Fixed variable name
import java from '../assets/java.png';
import html from '../assets/html-5.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.webp';
import bootstrap from '../assets/bootstrap.webp';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import sql from '../assets/sql.png';
import github from '../assets/github.jpg';
import machine_learning from '../assets/machine_learning.jpg';
import tensor from '../assets/tensor.png';

const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <div className="title">
                <h2>Skills</h2>
            </div>
            <div className="cards">
                <div className="card">
                    <div className='skill-logo'><img src={python} alt="Python Logo" /></div>
                    <section className="skill-name">Python</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={c} alt="C Language Logo" /></div>
                    <section className="skill-name">C</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={c_plus} alt="C++ Logo" /></div>
                    <section className="skill-name">C++</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={java} alt="Java Logo" /></div>
                    <section className="skill-name">Java</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={html} alt="HTML5 Logo" /></div>
                    <section className="skill-name">HTML</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={css} alt="CSS3 Logo" /></div>
                    <section className="skill-name">CSS</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={javascript} alt="JavaScript Logo" /></div>
                    <section className="skill-name">JavaScript</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={bootstrap} alt="Bootstrap Logo" /></div>
                    <section className="skill-name">Bootstrap</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={tailwind} alt="Tailwind CSS Logo" /></div>
                    <section className="skill-name">Tailwind</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={react} alt="React Logo" /></div>
                    <section className="skill-name">React</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={sql} alt="SQL Database Logo" /></div>
                    <section className="skill-name">SQL</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={github} alt="GitHub Logo" /></div>
                    <section className="skill-name">GitHub</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={machine_learning} alt="Machine Learning" /></div>
                    <section className="skill-name">Machine Learning</section>
                </div>
                <div className="card">
                    <div className='skill-logo'><img src={tensor} alt="TensorFlow Logo" /></div>
                    <section className="skill-name">TensorFlow</section>
                </div>
            </div>
        </div>
    );
};

export default Skills;
