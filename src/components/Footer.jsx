import React ,{ useContext }from 'react';
import { ScrollContext } from '../functions/ScrollContext';
import '../style/Footer.scss';
import logo from '../assets/logo1.svg';
import fb1 from '../assets/footericons/fb1.svg';
import git1 from '../assets/footericons/git1.svg';
import insta1 from '../assets/footericons/insta1.svg';
import link1 from '../assets/footericons/link1.svg';

function Footer() {

  const { footerRef } = useContext(ScrollContext);

  const { scrollToSolution } = useContext(ScrollContext);
  const { scrollToHome } = useContext(ScrollContext); 
  const { scrollToEducation } = useContext(ScrollContext);
  const { scrollToService } = useContext(ScrollContext);
  const { scrollToExperience } = useContext(ScrollContext);

  return (
    <div className="main-footer" ref={footerRef}>
      <div className="main-footer-1">

          <div className="footer-title">
            <p className='footer-title-1'>Then ? Let's Connect</p>
            <button className='contactus-btn' >Contact us</button>
          </div>
        <div className="footer-title-cover">
          <hr className='line-tag-1'/>
        </div>


        <div className="footer-title-2">
          <div className="footer-title-2-body-1">

            <div className="footer-contents-1">
              <img src={logo} alt="logo" className='port-logo' />
              <p className='footer-title-2-body-1-para-1'>Hello, I'm Lingesh, Front-end Developer, 
              <br />UI/UX Designer and Sales Strategist</p>

                <div className="social-media-logos">
                  <a href="https://www.facebook.com/lingesh.mass.35"><img src={fb1} alt="fb1" className='social-media-1' /></a>
                  <a href="https://github.com/Lingesh04-ux"><img src={git1} alt="git1" className='social-media-2' /></a>
                  <a href="https://www.instagram.com/lingeshhari_/"><img src={insta1} alt="insta1" className='social-media-1' /></a>
                  <a href="https://www.linkedin.com/in/lingesh-hari-a318b225a/"><img src={link1} alt="link1" className='social-media-1' /></a>
                </div>
            </div>
            
            <div className="navigation-contents">
              <p className='navigation-title'>Navigation</p>
              {/* <p className='navigation-p' >Home</p> */}
              <p className='navigation-p' onClick={scrollToSolution}>Innvotaive Solution</p>
              <p className='navigation-p' onClick={scrollToEducation}>Education</p>
              <p className='navigation-p' onClick={scrollToService}>Service</p>
              <p className='navigation-p' onClick={scrollToExperience}>Experience</p>
            </div>

            <div className="contact-contents">
              <p className='contact-title'>Contact</p>
              {/* Email ID */}
              <a href="https://mail.google.com/" style={{textDecoration: 'none', color:'white'}}><p className='contact-contents-p'>lingeshhari4@gmail.com</p></a>
              {/* Hyper link */}
              <a href="https://lingeshhari-portfolio.netlify.app/" style={{textDecoration: 'none', color:'white'}}><p className='contact-contents-p'>lingeshhari.com</p></a>
            </div>

            <div className="last-title">
              <p className='stay-touch'>Stay in Touch!</p>
            </div>

        <hr className='line-tag-1'/>

          </div>
        </div>

        <div className="  ">

          <div className="copy-rights-contents">
            <p>Copyright © 2025 | Designed by Lingesh</p>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
