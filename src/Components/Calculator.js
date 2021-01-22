import React from 'react'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import accCars from '../Components/carsWithLiters'
import Setup from './Setup'
import './Calculator.css'

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
    onSubmit

    // liters, 
}) => {


    return (

        <div className = 'animate__animated animate__fadeIn' id='calculator' style={{ margin: '30px' }}>
            <div>
                {/* //TrackDropdown */}
                <div>
                    <div id='userSelection' style={{}}>
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" onChange={onTrackSelect} aria-label="Floating label select example .form-select-sm">
                                
                                {trackValues.map(track => {
                                    return <option> {track}</option>
                                })}
                            </select>
                            <label for="floatingSelect">Select Track</label>
                        </div>
                        <ButtonGroup size="sm" aria-label="Basic example">
                            <Button variant="secondary" onClick={onButtonClickGT3}>GT3</Button>
                            <Button variant="secondary" onClick={onButtonClickGT4}>GT4</Button>
                            <Button variant="secondary" onClick={onButtonClickST}>ST</Button>
                            <Button variant="secondary" onClick={onButtonClickCup}>CUP</Button>
                        </ButtonGroup>
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" onChange={onCarSelect} aria-label="Floating label select example .form-select-sm">
                                {carValue.map(car => {
                                    return <option>{car}</option>
                                })}
                            </select>
                            <label for="floatingSelect">Select Car</label>
                        </div>


                        <label id='label-headings'> Average Lap Time</label><br></br>

                        {/* <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example .form-select-sm">
                            {
                            secondArr.map(num =>{
                                return <option>num</option>
                                    })}
                            </select>
                            <label for="floatingSelect">Select Track</label>
                        </div> */}


                        <input type="number" id='minute' placeholder='Min' max='10' min='0'></input>
                        <input type="number" id='second' placeholder='Sec' max='60' min='0'></input>
                        {/* //CarDropdown */}

                        {/* //Hour Slider */}
                        <Form.Group controlId="formBasicRangeCustom">
                            <Form.Label id='label-headings'>Hours</Form.Label>
                            {/* Time select shortcuts */}
                            <ButtonGroup size="sm" aria-label="Basic example">
                                <Button variant="secondary" onClick={onButtonClickThree}>3</Button>
                                <Button variant="secondary" onClick={onButtonClickSix}>6</Button>
                                <Button variant="secondary" onClick={onButtonClickTwelve}>12</Button>
                                <Button variant="secondary" onClick={onButtonClickTwentyFour}>24</Button>
                            </ButtonGroup>
                            <Form.Control type="range" min="0" max="24" class="slider" onChange={onHourSliderChange} custom />
                            <Form.Control type="text" placeholder="" value={hourValue} readOnly />
                        </Form.Group>
                        {/* //Minute Slider */}
                        <Form.Group controlId="formBasicRangeCustom">
                            <Form.Label id='label-headings'>Minutes</Form.Label>
                            {/* Time select shortcuts */}
                            <ButtonGroup size="sm" aria-label="Basic example">
                                <Button variant="secondary" onClick={onButtonClick20}>20</Button>
                                <Button variant="secondary" onClick={onButtonClick30}>30</Button>
                                <Button variant="secondary" onClick={onButtonClick45}>45</Button>
                                <Button variant="secondary" onClick={onButtonClick60}>60</Button>
                            </ButtonGroup>
                            <Form.Control type="range" min="0" max="60" class="slider" onChange={onMinuteSliderChange} custom />
                            <Form.Control type="text" placeholder="" value={minuteValue} readOnly />
                        </Form.Group>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="button" class="btn btn-primary" onClick={calculateFuel} >Calculate</button>
                    </div>

                    <table class="table table-dark table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Areas</th>
                                <th scope="col">Results</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Track Selected</th>
                                <td>{trackSelection}</td>
                            </tr>
                            <tr>
                                <th scope="row">Average Lap Time</th>
                                <td>{usersAverageLapTime}</td>
                            </tr>
                            <tr>
                                <th scope="row">Car Seleceted</th>
                                <td>{carSelection}</td>
                            </tr>
                            <tr>
                                <th scope="row">Liters Per Lap</th>
                                <td>{carLiters}</td>
                            </tr>
                            <tr>
                                <th scope="row">Estimated Liters Need</th>
                                <td>{estimatedLiters}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>




    )
}

export default Calculator;
