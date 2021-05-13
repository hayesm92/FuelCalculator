import React from 'react'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Setup from '../Setup/Setup'
import './Calculator.css'
import { createPopper } from '@popperjs/core';
import gulf from '../../Pictures/gulf.jpg'



const minutes = Array.from(new Array(2), (x, i) => i + 1);
const seconds = Array.from(new Array(59), (x, i) => i + 1);
function prependZero(num) {
    if (num < 10) {
        return num.toString().padStart(2, '0');
    } else {
        return num;
    }
}
const secondsArr = seconds.map(num => prependZero((num)));


const Calculator = ({
    car,
    track,
    onButtonClickThree,
    onButtonClickSix,
    onButtonClickTwelve,
    onButtonClickTwentyFour,
    onButtonClick20,
    onButtonClick30,
    onButtonClick45,
    onButtonClick60,
    onButtonClickGT3,
    onButtonClickGT4,
    onButtonClickST,
    onButtonClickCup,
    onMinuteSliderChange,
    onHourSliderChange,
    onMainSelectionClick,
    onTrackSelect,
    onCarSelect,
    minuteValue,
    hourValue,
    trackValues,
    carValue,
    trackSelection,
    carSelection,
    calculateFuel,
    carLiters,
    estimatedLiters,
    usersAverageLapTime,
    onSubmit,
    handleChange,
    handleSubmit,
    buttonPress,
    setCarTrack,
    finalLiters,
    finalEstimate,
    clearFormValues,
    carMessage,
    trackMessage,
    avgMessage,
    timeMessage,
    saveCalculations,
    changeMessage

    // liters, 
}) => {


    return (
        <div>
            <div id='fill'>
                <img src= {gulf} alt="" />
            </div>
            <div className='animate__animated animate__fadeIn' id='calculator' style={{}}>
                <div>
                    {/* //TrackDropdown */}
                    <div>
                        <div id='userSelection' style={{}}>
                            <div class="form-floating">
                                <select id='sim-selection' class="form-select form-select-sm " aria-label=".form-select-sm example" onChange={onMainSelectionClick} required>
                                    {/* <option selected>Choose a simulator</option> */}
                                    <option selected value="acc">Assetto Corsa Competizione</option>
                                    <option value="ac">Assetto Corsa</option>
                                    <option value="f1">F1 2021</option>
                                    <option value="ir">iRacing</option>
                                    <option value="rr">Raceroom</option>
                                    <option value="rf">rFactor</option>
                                </select>
                                <label for="floatingSelect">Change Simulator</label>
                            </div>
                            <div class="form-floating">
                                <select name='track' class="form-select" id="trackFloatingSelect" onChange={onTrackSelect} aria-label="Floating label select example .form-select-sm" required>
                                    {trackValues.map(track => {
                                        return <option> {track}</option>
                                    })}
                                </select>
                                <label for="floatingSelect">Select Track</label>
                            </div>
                            <div>
                                <label className='error-labels'>{trackMessage}</label>
                            </div>
                            <ButtonGroup className='button-group' size="sm" aria-label="Basic example">
                                <Button className='btn-orange' variant="secondary" onClick={onButtonClickGT3}>GT3</Button>
                                <Button className='btn-orange' variant="secondary" onClick={onButtonClickGT4}>GT4</Button>
                                <Button className='btn-orange' variant="secondary" onClick={onButtonClickST}>ST</Button>
                                <Button id='cup' className='btn-orange' variant="secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover" onClick={onButtonClickCup}>CUP</Button>
                            </ButtonGroup>


                            <div class="form-floating">
                                <select name='car' class="form-select" id="carFloatingSelect car-heading" onChange={onCarSelect} aria-label="Floating label select example .form-select-sm" required>
                                    {carValue.map(car => {
                                        return <option>{car}</option>
                                    })}
                                </select>
                                <label for="floatingSelect">Select Car</label>
                            </div>
                            <div>
                                <label className='error-labels' id='car-label'>{carMessage}</label>
                            </div>




                            <label className='label-headings' id='lap-heading'> Average Lap Time</label><br></br>
                            {/* <input name= 'minute'type="number" id='minute' placeholder='Min' max='10' min='0' onChange = {handleChange}></input>
                        <input name = 'second' type="number" id='second' placeholder='Sec' max='60' min='0'></input> */}
                            <div className='average-time'>
                                <select id='minute-time' class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option></option>
                                    {minutes.map(minute => {
                                        return <option>{minute}</option>
                                    })}
                                </select>
                                <select id='second-time' class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option></option>
                                    {secondsArr.map(second => {
                                        return <option>{second}</option>
                                    })}
                                </select>

                            </div>
                            <div>
                                <label className='error-labels' id='avg-label'>{avgMessage}</label>
                            </div>


                            {/* //CarDropdown */}

                            {/* //Hour Slider */}
                            <Form.Group controlId="formBasicRangeCustom">
                                <Form.Label className='label-headings' id='hours-heading'>Hours</Form.Label>
                                {/* Time select shortcuts */}
                                <ButtonGroup className='button-group' size="sm" aria-label="Basic example">
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClickThree}>3</Button>
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClickSix}>6</Button>
                                    <Button className='btn-orange' variant="secondary" >9</Button>
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClickTwelve}>12</Button>
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClickTwentyFour}>24</Button>
                                </ButtonGroup>
                                <Form.Control type="range" min="0" max="24" class="slider" onChange={onHourSliderChange} custom />
                                <Form.Control type="text" id='slider-hour' placeholder="" value={hourValue} readOnly />
                            </Form.Group>
                            {/* //Minute Slider */}
                            <Form.Group controlId="formBasicRangeCustom">
                                <Form.Label className='label-headings' id='minutes-heading'>Minutes</Form.Label>
                                {/* Time select shortcuts */}
                                <ButtonGroup className='button-group' size="sm" aria-label="Basic example">
                                    <Button className='btn-orange' variant="secondary" >10</Button>
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClick20}>20</Button>
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClick30}>30</Button>
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClick45}>45</Button>
                                    <Button className='btn-orange' variant="secondary" onClick={onButtonClick60}>60</Button>
                                </ButtonGroup>
                                <Form.Control type="range" min="0" max="60" class="slider" onChange={onMinuteSliderChange} custom />
                                <Form.Control type="text" id='slider-minute' placeholder="" value={minuteValue} readOnly />
                            </Form.Group>
                        </div>
                        <div>
                            <label className='error-labels' id='time-label'>{timeMessage}</label>
                        </div>
                        <div className='button-submit' style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <button type="submit" class="btn btn-primary btn-red" onClick={buttonPress} >Calculate</button>
                            <button type="submit" class="btn btn-outline-danger" onClick={clearFormValues} >Reset</button>
                        </div>

                        <table class="table table-dark table-sm" style={{ marginBottom: '0' }}>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Track Selected</th>
                                    <td>{track}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Average Lap Time</th>
                                    <td>{usersAverageLapTime}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Car Seleceted</th>
                                    <td>{car}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Liters Per Lap</th>
                                    <td>{finalLiters}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Estimated Liters Need</th>
                                    <td>{finalEstimate}</td>
                                </tr>

                            </tbody>
                        </table>

                        <div id='save-div'>
                            <input id='save-math' class="btn btn-primary" type="submit" value="Save" onClick={() => { saveCalculations(); }}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default Calculator;
