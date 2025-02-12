import React from 'react';
import Github from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import Google from '../assets/google.svg'
import Phone from '../assets/phone.svg'
import Instagram from '../assets/instagram.svg'
import '../styles/SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className="social-media">
            <a href="https://github.com/abhay-2108" className="icon-button github" target="_blank" rel="noreferrer">
                <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/abhay-tiwari-814051290/" className="icon-button linkedin" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="" />
            </a>
            <a href="mailto:abhaytiwari0821@gmail.com" className="icon-button google" target="_blank" rel="noreferrer">
            <img src={Google} alt="" />
            </a>
            <a href="https://leetcode.com/u/abhay_20/" className="icon-button phone" target="_blank" rel="noreferrer">
            <img src={Phone} alt="" />
            </a>
            <a href="https://www.instagram.com/abhayraj_0120/" className="icon-button instagram" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="" />
            </a>
        </div>
    );
};

export default SocialMedia;
