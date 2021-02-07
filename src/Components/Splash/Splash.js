import React from 'react'
import './Splash.css'

const Splash = () => {
    return (
        <div className='bg'>
            <div>
                <h1>Loading</h1>
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>
    )
}

export default Splash;