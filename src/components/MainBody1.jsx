import React, { useContext } from 'react';
import '../style/MainBody1.scss';
import web from '../assets/pictures/web.png';
import coding from '../assets/pictures/coding.png';
import team from '../assets/pictures/team.png';
import { ScrollContext } from '../functions/ScrollContext';

function MainBody1() {

  const { solutionRef } = useContext(ScrollContext);

  return (
    <div className="main-body-1">
        <div className="main-body-1-1" ref={solutionRef}>
            <div className="main-body-1-contents">
                <p className='body-1-title-1'>MY EXPERTISE</p>
                <h1 className='body-1-title-2'>Innovative Solutions</h1>
                <p className='body-1-para-1'>Random Service I offering to the peoples of the world that can be everybody can use and give to other 
                <br /> people in the world that can be useful to human society </p>
            </div>
            <div className="main-body-1-images">
                <a href="#"><img src={web} alt="web" className='web-image'/></a>
                <a href="#"><img src={coding} alt="coding" className='web-image'/></a>
                <a href="#"><img src={team} alt="team" className='web-image'/></a>
            </div>
        </div>
    </div>
  )
}

export default MainBody1
