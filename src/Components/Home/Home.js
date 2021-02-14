import React from 'react';
import './Home.css'
import github from '../../Pictures/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'
import linkedin from '../../Pictures/LinkedIn-Logos/LI-In-Bug.png'


const Home = ({ onMainSelectionClick, onSelectionSubmit, mainMessage }) => {
    return (
        <div>
            <div className='box' >
                <div className='title-selection'>
                    <h1 className='animate__animated animate__fadeInDown'>Fuel Calculator</h1>
                    <select id= 'sim-selection' class="form-select form-select-sm animate__animated animate__fadeInUp " aria-label=".form-select-sm example" onChange={onMainSelectionClick} required>
                        {/* <option selected>Choose a simulator</option> */}
                        <option selected value="acc">Assetto Corsa Competizione</option>
                        <option value="ac">Assetto Corsa</option>
                        <option value="f1">F1 2021</option>
                        <option value="ir">iRacing</option>
                        <option value="rr">Raceroom</option>
                        <option value="rf">rFactor</option>
                    </select>
                    <div>
                            <label className = 'error-labels'id = 'time-label'>{mainMessage}</label>
                        </div>
                    <div style={{ marginTop: '5%' }}>
                        <button type="button" class="btn btn-primary btn-lg btn-red " onClick={onSelectionSubmit}>Go</button>
                    </div>
                    <div>
                    <ul className='logo-group'>
                        <li className='home-logos' id = 'github-logo'>
                            <a href = 'https://google.com'><img src={github} ></img></a>
                            </li>
                        <li className='home-logos' id = 'linkedin-logo'><img src={linkedin}></img></li>
                    </ul>
                </div>
                </div>
                
            </div>


        </div>

    )
}

export default Home;