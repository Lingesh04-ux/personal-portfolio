import React, { useState,useRef,useContext } from 'react';
import '../style/Header.scss';
import logo from '../assets/logo.svg';
import insta from '../assets/insta.svg';
import fb from '../assets/fb.svg';
import link from '../assets/link.svg'
import profilePic from '../assets/photo.png';
import resume from '../assets/resume/Resume.pdf'
import { ScrollContext } from '../functions/ScrollContext';

function Header() {

const [isOpen,setIsOpen] = useState(false);

function hamburgerOpen(){
    setIsOpen(!isOpen);
};
function hamburgerClose(){
    setIsOpen(false);
};

const { scrollToFooter } = useContext(ScrollContext);
const { scrollToEducation } = useContext(ScrollContext);
const { scrollToService } = useContext(ScrollContext);
const { scrollToExperience } = useContext(ScrollContext);

const { homeRef } = useRef(ScrollContext);

const handleHamburgerFunction1 = () => {
    hamburgerClose(),
    scrollToFooter()
}
const handleHamburgerFunction2 = () => {
    hamburgerClose(),
    scrollToEducation()
}
const handleHamburgerFunction3 = () => {
    hamburgerClose(),
    scrollToService()
}
const handleHamburgerFunction4 = () => {
    hamburgerClose(),
    scrollToEducation()
}
const handleHamburgerFunction5 = () => {
    hamburgerClose(),
    scrollToExperience()
}

const downloadLink = useRef(null);
const handleDownload = () => {
    downloadLink.current.click(); // Trigger the anchor tag
};

  return (
    <div className="main-header">
        <div className="main-header-1">
            <div className="header-bar">
                <p>Home</p>
                <p onClick={scrollToFooter}>About</p>
                <p onClick={scrollToEducation}>Education</p>
                    <img src={logo} alt="logo" className="header-logo-name"/>
                <p onClick={scrollToService}>Service</p>
                <p onClick={scrollToEducation}>Portfolio</p>
                <p onClick={scrollToExperience}>Experience</p>
                <h4 className='hamburger-menu' onClick={hamburgerOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </h4>
            </div>
        </div>
                <h4 className='hamburger-menu-list'>
                    <div className={`nav-links${isOpen ? "Open" : ""}`}>
                        <ul>
                            <li>Home</li>
                            <li onClick={handleHamburgerFunction1}>About</li>
                            <li onClick={handleHamburgerFunction2}>Education</li>
                            <li onClick={handleHamburgerFunction3}>Service</li>
                            <li onClick={handleHamburgerFunction4}>Portfolio</li>
                            <li onClick={handleHamburgerFunction5}>Experience</li>
                        </ul>
                    </div>
                </h4>

        <div className="main-header-2">
            <div className="main-header-2-2">
                <div className="header-title-p">
                    <h1 className='header-title-p-name' ref={homeRef}> I'm Lingesh Hari, <br />Front End Developer</h1>
                    <p className='header-title-p-p'>Graduate from Biotechnology background to create a interactive 
                        <br />web pages and user friendly for mobiles and also design a 
                        <br /> websites, mobile applications using designing tools 
                        <br />and make them alive for web developement
                    </p>
                    <div className="header-buttons">
                        <button className='header-about' onClick={scrollToFooter}>About</button>
                        <button className='header-download' onClick={handleDownload}>Download CV</button>
                        <a ref ={downloadLink} href={resume} download="LingeshResume"
                        style={{display: "block"}}></a>
                    </div>
                </div>
                    <img src={profilePic} alt="profile-pic" className='profile-pic'/>
                <div className="social-bar">
                    <p className='follow-text'>Follow Me on</p>
                    <div className="line"></div>

                    <div className="icons">
                        <a href="https://www.instagram.com/lingeshhari_/"><img src={insta} alt="insta" /></a>
                        <a href="https://www.facebook.com/lingesh.mass.35"><img src={fb} alt="fb" /></a>
                        <a href="https://www.linkedin.com/in/lingesh-hari-a318b225a/"><img src={link} alt="link" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
