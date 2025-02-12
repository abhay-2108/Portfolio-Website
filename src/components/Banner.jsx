import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import Man from "../assets/Profileman.png";
import Video from "../assets/bgVideo.mp4";

const Banner = () => {
    const words = ["Deep Learning Engineer", "AI Engineer", "Web Developer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    
    const typingSpeed = isDeleting ? 50 : 100; // Faster deletion speed
    const cursorBlinkSpeed = 500; // Cursor blinking speed

    useEffect(() => {
        // Typing Effect
        const currentWord = words[currentWordIndex];
        const typingTimer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setDisplayedText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setIsDeleting(true);
                    setTimeout(() => {}, 1000); 
                }
            } else {
                if (charIndex > 0) {
                    setDisplayedText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [charIndex, isDeleting, currentWordIndex]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, cursorBlinkSpeed);
        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <div className="banner" id="home">
            <div className="greeting-div">
                <div className="banner-bg">
                    <img src={Man} alt="" />
                    {/* <video autoPlay muted loop playsInline className='back-video'>
                        <source src={Video}/>
                    </video> */}
                </div>
                <div className="banner-content">
                    <h2>Hi There!</h2>
                    <p>
                    <span style={{fontSize: "60px"}}>I'M ABHAY TIWARI</span>
                    <br />
                    <br />
                    I am a <span className="changeText">{displayedText}<span className="cursor">|</span></span> </p> 
                    <p>Passionate about creating
                    innovative solutions and leveraging technology for real-world impact. </p>
                    <button className='btn'>
                    <a className="resume" href="/resume.pdf" download="Abhay_Tiwari_Resume.pdf">Resume</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
