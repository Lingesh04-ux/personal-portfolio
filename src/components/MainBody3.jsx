import React,{ useContext } from 'react';
import gra from '../assets/banners/1.png';
import college from '../assets/banners/2.png';
import scl12 from '../assets/banners/3.png';
import scl10 from '../assets/banners/4.png';
import mobGra from '../assets/banners/mob1.png';
import mobCol from '../assets/banners/mob2.png';
import mobScl12 from '../assets/banners/mob3.png';
import mobScl10 from '../assets/banners/mob4.png';
import { ScrollContext } from '../functions/ScrollContext';


function MainBody3() {

    const { educationRef } = useContext(ScrollContext);
    
  return (
    <div className="main-body-3" ref={educationRef}>
        <div className="main-body-3-contents">
            <p className='body-3-title-1'>Education</p>
            <p className='body-3-para-1'>An Investment in knowledge pays the best interest - Benjamin Franklin</p>
        </div>
        <div className="main-body-3-images">
            <div className="main-body-3-images-contents-1">
                <img src={gra} alt="gra" className='gra-1' />
                    {/* Mobile view */}
                    <img src={mobGra} alt="mobGra" className='mobView-1' /> 
                <img src={college} alt="college" className='college-1' />
                    {/* Mobile view */}
                    <img src={mobCol} alt="mobGra" className='mobView-1' /> 
            </div>
            <div className="main-body-3-images-contents-2">
                <img src={scl12} alt="scl12" className='scl12-1'/>
                    {/* Mobile view */}
                    <img src={mobScl12} alt="mobGra" className='mobView-1' /> 
                <img src={scl10} alt="scl10" className='scl10-1'/>
                    {/* Mobile view */}
                    <img src={mobScl10} alt="mobGra" className='mobView-1' /> 
            </div>
        </div>
    </div>
  )
}

export default MainBody3
