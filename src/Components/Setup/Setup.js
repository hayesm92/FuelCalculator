import React from 'react'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import './Setup.css'

const Setup = () => {

    return (
        <div>
            <div className = 'setup'>
            <h4>Setup Tips</h4>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button 
                        class="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#flush-collapseOne" 
                        aria-expanded="false" 
                        aria-controls="flush-collapseOne">
                            Braking
                        </button>
                    </h2>


                    <div 
                        id="flush-collapseOne" 
                        class="accordion-collapse collapse" 
                        aria-labelledby="flush-headingOne" 
                        data-bs-parent="#accordionFlushExample">

                        <div class="accordion-body">
                            <button id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseLossofControl"
                                aria-expanded="false"
                                aria-controls="collapseLossofControl">
                                Loss of Control
                            </button>

                                <div class="collapse" id="collapseLossofControl">
                                    <div class="card card-body">
                                        1. Move brake bias forward<br></br>
                                        2. Decrease slow damper
                                    </div>
                                </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFrontTireLock"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Front Tires Lock
                            </button>

                                <div class="collapse" id="collapseFrontTireLock">
                                    <div class="card card-body">
                                        1. Move brake bias backward<br></br>
                                    </div>
                                </div>
                            

                            <button
                                id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCarPitch"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Car Pitches Too Much
                            </button>

                                <div class="collapse" id="collapseCarPitch">
                                    <div class="card card-body">
                                        1. Stiffen front springs<br></br>
                                    </div>
                                </div>
                            
                            
                            <button
                                id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseNoseFloor"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Nose Hits Floor
                            </button>

                                <div class="collapse" id="collapseNoseFloor">
                                    <div class="card card-body">
                                        1. Increase ride height<br></br>
                                        2. Adjust bump stops<br></br>
                                        3. Stiffen front springs
                                    </div>
                                </div>


                            <button
                                id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseExcessiveLocking"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Excessive Locking
                            </button>

                            <div class="collapse" id="collapseExcessiveLocking">
                                <div class="card card-body">
                                    1. Reduce brake pressue<br></br>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button 
                        class="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#flush-collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="flush-collapseTwo">
                            Turn In
                        </button>
                    </h2>


                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseUndersteer"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Understeer
                            </button>
                            
                            <div class="collapse" id="collapseUndersteer">
                                <div class="card card-body">
                                    <strong>All Speeds:</strong>
                                    1. Adjust front tyre pressures<br></br>
                                    2. Soften front anti-roll bar<br></br>
                                    3. Increase front toe out<br></br>
                                    4. Decrease diff coast locking<br></br>
                                    5. Soften front springs<br></br><br></br>

                                    <strong>Mid-High Speed:</strong>
                                    1.Reduce rear wing angle or 
                                    Increase front wing angle<br></br><br></br>

                                    <strong>When Braking:</strong>
                                    1. Move brake bias backwards
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOversteer"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Oversteer
                            </button>

                            <div class="collapse" id="collapseOversteer">
                                <div class="card card-body">
                                    <strong>All Speeds:</strong>
                                    1. Adjust rear tyre pressures<br></br>
                                    2. Stiffen front anti-roll bar<br></br>
                                    3. Decrease front toe out<br></br>
                                    4. Stiffen front springs<br></br><br></br>

                                    <strong>Mid-High Speed:</strong>
                                    1. Increase rear wing angle or 
                                    decrease front wing angle<br></br><br></br>

                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseLiftOffUndersteer"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Lift Off Oversteer
                            </button>

                            <div class="collapse" id="collapseLiftOffUndersteer">
                                <div class="card card-body">
                                    1. Increase diff coast locking<br></br>
                                    2. Increase pre load value<br></br>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button 
                        
                        class="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#flush-collapseThree" 
                        aria-expanded="false" 
                        aria-controls="flush-collapseThree">
                            Corner Exit
                        </button>
                    </h2>

                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseUndersteerCE"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Understeer
                            </button>

                            <div class="collapse" id="collapseUndersteerCE">
                                <div class="card card-body">
                                    <strong>All Speeds:</strong>
                                        1. Stiffen rear anti-roll bar<br></br>
                                        2. Increase diff power locking<br></br>
                                        3. Stiffen rear springs<br></br>
                                    
                                    <strong>Mid-High Speed:</strong>
                                        1.Reduce rear wing angle or 
                                        Increase front wing angle<br></br><br></br>
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOversteerCE"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Oversteer
                            </button>

                            <div class="collapse" id="collapseOversteerCE">
                                <div class="card card-body">
                                    <strong>All Speeds:</strong>
                                        1. Soften rear anti-roll bar<br></br>
                                        2. Decrease diff power locking<br></br>
                                        3. Soften rear springs<br></br>
                                        
                                    <strong>Mid-High Speed:</strong>
                                        1.Increase rear wing angle or 
                                        decrease front wing angle<br></br><br></br>
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseWeightTransfer"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Car Bounces During Weight Transfer
                            </button>

                            <div class="collapse" id="collapseWeightTransfer">
                                <div class="card card-body">
                                    <strong>When Braking, Accelerating & Turning:</strong>
                                        1. Increase slow damper setting<br></br>
                                            
                                    <strong>On Bumps/Curbs:</strong>
                                        1. Increase fast damper setting
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                        <button 
                        class="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#flush-collapseFour" 
                        aria-expanded="false" 
                        aria-controls="flush-collapseFour">
                            Other
                        </button>
                    </h2>


                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTiresOverheat"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Tyres Overheat
                            </button>


                            <div class="collapse" id="collapseTiresOverheat">
                                <div class="card card-body">
                                    <strong>All Over:</strong>
                                        1. Increase pressures<br></br>
                                        2. Decrease toe value<br></br>
                                    
                                        
                                    <strong>On Inside Edge:</strong>
                                        1.Reduce negative camber<br></br>

                                    <strong>On Outer Edge:</strong>
                                        1. Increase negative camber<br></br>

                                    <strong>In Middle:</strong>
                                        1.Reduce pressures<br></br>
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTiresCold"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Tyres Cold
                            </button>

                            <div class="collapse" id="collapseTiresCold">
                                <div class="card card-body">
                                <strong>All Over:</strong>
                                    1. Decrease pressures<br></br>
                                    2. Increase toe value<br></br>
                                </div>
                            </div>
                            
                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEdgy"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Car Edgy During Weight Transfer
                            </button>

                            <div class="collapse" id="collapseEdgy">
                                <div class="card card-body">
                                    <strong>When Braking, Accelerating & Turning:</strong>
                                        1. Decrease slow damper setting<br></br>

                                    <strong>On Bumps/Curbs:</strong>
                                        1. Decrease fast damper setting<br></br>
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseLowTopSpeed"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Low Stop Speed
                            </button>

                            <div class="collapse" id="collapseLowTopSpeed">
                                <div class="card card-body">
                                    1. Reduce wing values<br></br>
                                    2. Lengthen gear ratios<br></br>
                                </div>
                            </div>
                          
                            
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFive">
                        <button 
                        class="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#flush-collapseFive" 
                        aria-expanded="false" 
                        aria-controls="flush-collapseFive">
                            Tips
                        </button>
                    </h2>

                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <button 
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseRideHeight"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Ride Height
                            </button>
                            
                            <div class="collapse" id="collapseRideHeight">
                                <div class="card card-body">
                                    As low as possible, but avoid grounding car or stalling the aero
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseDampers"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Dampers
                            </button>

                            <div class="collapse" id="collapseDampers">
                                <div class="card card-body">
                                    Bump settins should be lower than the corresponding rebound setting<br></br>
                                    Try to use the lowest setting that avoids oscillation/bouncing<br></br>
                                    Can be used to tune the responsiveness of the car.<br></br>
                                    High Values = more reposive<br></br>
                                    Low Values = more stable
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseAero"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Aero
                            </button>

                            <div class="collapse" id="collapseAero">
                                <div class="card card-body">
                                    User ride height and rake to generate as much downforce as possible,
                                    then trim the aero balance using the wings and/or splitter.<br></br>
                                    Increasing the rake moves the aero balance backwards.<br></br>
                                    Run the car as stiff as needed to maintain stable ride height<br></br>
                                </div>
                            </div>

                            <button
                            id = 'setup-btn'
                                class="btn btn-primary btn-block"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseBrakeBias"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Brake Bias
                            </button>

                            <div class="collapse" id="collapseBrakeBias">
                                <div class="card card-body">
                                    Front tires should lock just before the rears for best stability.
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = 'setup'>
            <h4> Tire Pressures</h4>
        </div>
        </div>
        
    )

}

export default Setup;