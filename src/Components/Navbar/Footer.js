import React from 'react';
import './Footer.css'
import home from '../../Pictures/home.png'
import tools from '../../Pictures/tools.png'
import calculator from '../../Pictures/calculator2.png'

const Footer = ({ onRouteChange, changeToGreen }) => {

  
  return (
    <div id='footer-bg'>
      <div className = 'highlights'>
        <div id='highlight1'></div>
        <div id='highlight2'></div>
        <div id='highlight3'></div>
      </div>
     

      <div className='footer-icons'>
        <div>
          <img id='home' src={home} onClick={() => onRouteChange('home')}></img>
        </div>
        <div>
          <img id='calc' src={calculator}onClick={() => onRouteChange('acc')}></img>
        </div>
        <div>
          <img id='tools' src={tools} onClick={() => onRouteChange('setup')}></img>
        </div>
      </div>
      {/* <div className = 'footer-headings'>
        <p>Home</p>
        <p>Calculator</p>
        <p>Setup</p>
      </div> */}

    </div>


  )
}

export default Footer;