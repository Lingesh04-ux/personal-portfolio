import React,{ useContext } from 'react';
import '../style/MainBody4.scss';
import experience from '../assets/experienceBanner/1.png';
import mobileEx from '../assets/experienceBanner/mob1.png';
import { ScrollContext } from '../functions/ScrollContext';

function MainBody4() {

  const { experienceRef } = useContext(ScrollContext);

  return (

    <div className="main-body-4" ref={experienceRef}>
      <div className="main-body-4-contents">

        <div className="main-body-4-title">
          <p className='experience-title'>Experience</p>
        </div>

        <div className="experience-image-tag">
          <img src={experience} alt="experience" className='experience-image' />
          {/* mobile image */}
          <img src={mobileEx} alt="mobileEx" className='experience-mob-image' />
        </div>

      </div>
    </div>

  )
}

export default MainBody4
