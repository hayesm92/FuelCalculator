import React from 'react'
import './Splash.css'
import icon from '../../Pictures/helmet.png';

const Splash = () => {
    return (
        <div className = 'bg2'>
            <div className='bg'>
                <img className=" main-icon "src = {icon}></img>
                <h1 id = 'loading'>Loading</h1>
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>
    )
}

export default Splash;