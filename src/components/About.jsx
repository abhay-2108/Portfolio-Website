import React from 'react';
import Profile from '../assets/profile.jpg'
import '../styles/backgroundeffect.css'
import '../styles/About.css';

const About = () => {
    
    return (<>
        <div className="about-section" id='about'>
            <div className="title">
                <h2 className="about">About Me</h2>
                {/* <section className="I">Who I am</section> */}
            </div>
            <div className="main-content">
                <div className="profile">
                    <img src={Profile} alt="" />
                </div>
                <div className="content">
                    <p>I am a passionate and dedicated Computer Science Engineering student at VIT Chennai, specializing in Artificial Intelligence and Machine Learning. With a strong foundation in computer science, I am eager to apply my knowledge to solve complex problems. My commitment to continuous learning and innovation drives me to contribute to advancements in AI and ML, making a tangible impact. Known for my hardworking nature, I constantly strive to expand my skill set and contribute effectively to any team or project.</p>

                    <button className='btn'>
                    <a className="resume" href="/resume.pdf" download="Abhay_Tiwari_CV.pdf">Download CV</a>
                    </button>
                </div>
            </div>
        </div>
    </>
    );
};

export default About;
