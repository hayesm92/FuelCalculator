import React from 'react';
import './Footer.css'
import home from '../../Pictures/house-outline.png'
import tools from '../../Pictures/tools.png'
import calculator from '../../Pictures/calculator.png'
import profile from '../../Pictures/profile.png'



const Footer = ({ onRouteChange, changeToGreen, notifications }) => {

  
  return (
    <div id='footer-bg'>
      <div className = 'highlights'>
        <div id='highlight1'></div>
        {/* <div id='highlight2'></div> */}
        <div id='highlight3'></div>
        <div id='highlight4'></div>
      </div>
     

      <div className='footer-icons'>
        {/* <div>
          <img id='home' src={home} onClick={() => onRouteChange('home')}></img>
        </div> */}
        <div>
          <img id='calc' src={calculator} onClick={() => onRouteChange('acc')}></img>
        </div>
        <div>                          
          <img id='setup' src={tools} onClick={() => onRouteChange('setup')}></img>
        </div>
        <div>
          <img id='profile' src={profile} onClick={() => onRouteChange('profile')}></img>
        </div>
      </div>
      <div className = 'footer-headings'>
        <p id='home-heading'></p>
        {/* <p id= 'calc-heading'>Calculator</p> */}
        <p id = 'setup-heading'></p>
        <p id ='profile-heading'><span style = {{marginLeft: '95px'}}class="badge bg-danger">{notifications}</span></p>
      </div>

    </div>


  )
}

export default Footer;