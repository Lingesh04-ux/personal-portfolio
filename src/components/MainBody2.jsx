import React, {useContext} from 'react';
import '../style/MainBody2.scss';
import html from '../assets/pictures/htcs.png';
import js from '../assets/pictures/jsre.png';
import ps from '../assets/pictures/psil.png'
import xd from '../assets/pictures/xdfi.png'
import { ScrollContext } from '../functions/ScrollContext';

function MainBody2() {

    const { serviceRef } = useContext(ScrollContext);
  return (
    <div className="main-body-2" ref={serviceRef}>
        <div className="main-body-2-1">
            <div className="main-body-2-contents">
                <p className="body-2-title-1">MY SKILL</p>
                <p className='body-2-title-2'>Beautiful and <br />unique digital <br />experience</p>
                <p className='body-2-para-1'>
                    I have a knowledge in Front end 
                    <br />Development and UI/UX design for 
                    <br />creating interactive web applications
                    <br />in user friendly</p>
            </div>
            <div className="main-body-2-images">
                <div className="main-body-2-images-contents-1">
                    <img src={html} alt="html" className='html-1'/>
                    <img src={js} alt="js" className='js-1' />
                </div>
                <div className="main-body-2-images-contents-2">
                    <img src={ps} alt="ps"className='ps-1' />
                    <img src={xd} alt="xd" className='xd-1'/>
                </div>
            </div>
        </div>
    </div>

  )
}

export default MainBody2
