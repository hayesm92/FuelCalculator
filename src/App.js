import React from 'react';
import logo from './logo.svg';
import './App.css';
import Selection from './Components/Selection'
import Selection2 from './Components/Selection2'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Components/Calculator'
import Display from './Components/Display';
import Footer from './Components/Footer';
import accCars from './Components/carsWithLiters'
import Home from './Components/Home'
import Particles from "react-tsparticles"


import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Setup from './Components/Setup';

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid === false)
  );
  return valid;
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minuteValue: '', //Used by Minute Slider
      hourValue: '', //Used by Hour Slider
      trackValues: '',
      carValue: [],
      track: '',
      car: '',
      trackSelection: 'Barcelona',
      carSelection: 'AMR V8 Vantage GT3',
      estimatedLiters: '',
      carLiters: '',
      usersAverageLapTime: '',
      recommendedLiters: '',
      mainSelection: '',
      route: 'home',
      collapsed: false,
      errors: {
        trackSelection: '',
        carSelection: '',
        minuteValue: '',
        hourValue: '',
      }
    }
    this.onCarSelect = this.onCarSelect.bind(this);
    this.onTrackSelect = this.onTrackSelect.bind(this);
    this.onMinuteSliderChange = this.onMinuteSliderChange.bind(this);
    this.onHourSliderChange = this.onHourSliderChange.bind(this);

  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onTrackSelect = (e) => {
    this.setState({
      trackSelection: e.target.value,
    }, () => {
      console.log(this.state.trackSelection)
    })

  }

  onCarSelect = (e) => {
    this.setState({
      carSelection: e.target.value,
    }, () => {
      console.log(this.state.carSelection)
    })

  }

  onMinuteSliderChange = (e) => {
    this.setState({
      minuteValue: e.target.value
    }, () => {
      console.log(this.state.minuteValue);
    })
  }

  onHourSliderChange = (e) => {
    this.setState({
      hourValue: e.target.value
    })
    console.log(this.state.hourValue)
  }
  onButtonClickThree = () => {
    this.setState({
      hourValue: 3
    })
  }
  onButtonClickSix = (e) => {
    this.setState({
      hourValue: 6
    })
  }
  onButtonClickTwelve = (e) => {
    this.setState({
      hourValue: 12
    })
  }
  onButtonClickTwentyFour = (e) => {
    this.setState({
      hourValue: 24
    })
  }

  onButtonClick20 = (e) => {
    this.setState({
      minuteValue: 20
    })
  }
  onButtonClick30 = (e) => {
    this.setState({
      minuteValue: 30
    })
  }
  onButtonClick45 = (e) => {
    this.setState({
      minuteValue: 45
    })
  }
  onButtonClick60 = (e) => {
    this.setState({
      minuteValue: 60
    })
  }
  onButtonClickGT4 = (e) => {
    const accGTFour = ['Mercedes AMG GT4', 'Cheverolet Camaro GT4']
    this.setState({
      carValue: accGTFour,
    })
  }
  onButtonClickGT3 = (e) => {
    const accCarsGT3 = ['AMR V8 Vantage GT3', 'Audi R8 LMS Evo', 'Bentley Continental GT3', 'BMW M6 GT3', 'Ferrari 488 GT3', 'Honda NSX GT3 Evo',
      'Lamborghini Huracan GT3 Evo', 'Lexus RC F GT3', 'McLaren 720S GT3', 'Mercedes-AMG GT3', 'Nissan GT-R Nismo GT3', 'Porsche 991II GT3']
    this.setState({
      carValue: accCarsGT3
    })
  }

  onMainSelectionClick = (e) => {
    if (e.target.value === 'acc') {
      this.setState({
        mainSelection: 'acc'
      })
    };
    console.log(this.state.route);
  }

  onSelectionSubmit = () => {
    this.setState({
      route: this.state.mainSelection,
    })
  }

  setTrack = (i) => {
    this.setState({
      tracks: i,
    })
  }

  onRouteChange = (route) => {
    this.setState({
      route: route,
    })
  }

  onSubmit = () => {
    fetch('https://polar-badlands-83667.herokuapp.com/liters', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(({
        car: this.state.carSelection,
        track: this.state.trackSelection
      }))
    })
      .then(resp => resp.json())
      .then(liters => {
        this.setState({
          carLiters: liters,

        })
      })
      .catch(err => console.log(err))
    // console.log(this.state.carLiters)
  }

  handleChange = (e) =>{
    e.preventDefault();
    const {name,value} = e.target
    let errors = this.state.errors;

    switch (name){
      case 'minute':
        errors.trackSelection = value.length < 1
        ? 'Please input number'
        : '';
        break;
      case 'second':
        errors.trackSelection = value.length < 1
        ? 'Please input number'
        : '';
        break;
      case 'car':
        errors.trackSelection = value.length < 1
        ? 'Please select a car'
        : '';
        break;
      case 'track':
        errors.trackSelection = value.length < 1
        ? 'Please select a track'
        : '';
        break;
        
    }
    this.setState({errors, [name]: value});
  }

  handleSubmit =(e) => {
    e.preventDefault();
    if(validateForm(this.state.errors)){
      console.info('valid form')
    } else{
      console.error('invalid form')
    }
  }

  render() {
    const accTracks = ['Barcelona', 'Brands Hatch', 'Hungaroring', 'Kyalami', 'Laguna Seca', 'Misano', 'Monza', 'Mount Panorama', 'Nurburgring', 'Paul Ricard', 'Silverstone', 'Spa Francorchamps', 'Suzuka', 'Zandvoort', 'Zolder'];
    const accCarsGT3 = ['AMR V8 Vantage GT3', 'Audi R8 LMS Evo', 'Bentley Continental GT3', 'BMW M6 GT3', 'Ferrari 488 GT3', 'Honda NSX GT3 Evo',
      'Lamborghini Huracan GT3 Evo', 'Lexus RC F GT3', 'McLaren 720S GT3', 'Mercedes-AMG GT3', 'Nissan GT-R Nismo GT3', 'Porsche 991II GT3']
    const accGTFour = ['Mercedes AMG GT4', 'Cheverolet Camaro GT4']
    const iracingCars = ['ir1', 'ir2', 'ir3']
    const { route } = this.state;

    const calculateFuel = () => {
      this.onSubmit();
      const averageLapMinute = Number(document.getElementById('minute').value);
      const averageLapSecond = Number(document.getElementById('second').value);
      const averageLapTime = Number(averageLapMinute) + '.' + Number(averageLapSecond);
      const numAverageLapTime = Number(averageLapTime);
      this.setState({
        usersAverageLapTime: numAverageLapTime,
      })
      setTimeout(() => {
        const estimatedLaps = ((this.state.hourValue * 60) + this.state.minuteValue) / this.state.usersAverageLapTime;
        const estimatedLiters2 = Math.round(estimatedLaps * this.state.carLiters)
        this.setState({
          estimatedLiters: (estimatedLiters2),
        })

      }, 900)
    }


    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />);



    return (
      <div className="App">

        {this.state.route === 'acc'
          ?
          <div>
            <NavBar onRouteChange={this.onRouteChange}></NavBar>
            <Calculator
              onHourSliderChange={this.onHourSliderChange}
              onMinuteSliderChange={this.onMinuteSliderChange}
              onButtonClickThree={this.onButtonClickThree}
              onButtonClickSix={this.onButtonClickSix}
              onButtonClickTwelve={this.onButtonClickTwelve}
              onButtonClickTwentyFour={this.onButtonClickTwentyFour}
              onButtonClick20={this.onButtonClick20}
              onButtonClick30={this.onButtonClick30}
              onButtonClick45={this.onButtonClick45}
              onButtonClick60={this.onButtonClick60}
              onButtonClickGT3={this.onButtonClickGT3}
              onButtonClickGT4={this.onButtonClickGT4}
              onTrackSelect={this.onTrackSelect}
              onCarSelect={this.onCarSelect}
              minuteValue={this.state.minuteValue}
              hourValue={this.state.hourValue}
              trackValue={this.state.trackValue}
              carValue={this.state.carValue}
              trackValues={accTracks}
              calculateFuel={calculateFuel}
              estimatedLiters={this.state.estimatedLiters}
              carLiters={this.state.carLiters}
              usersAverageLapTime={this.state.usersAverageLapTime}
              trackSelection={this.state.trackSelection}
              carSelection={this.state.carSelection}
              handleChange={this.handleChange}
              handleSubmit = {this.handleSubmit}
              
            />
          </div>

          : route === 'home' || route === 'calculator' ?
            <div>
              <Home
                onMainSelectionClick={this.onMainSelectionClick}
                onSelectionSubmit={this.onSelectionSubmit} />

            </div>
            : route === 'ir'
              ? <Calculator
                onHourSliderChange={this.onHourSliderChange}
                onMinuteSliderChange={this.onMinuteSliderChange}
                onButtonClickThree={this.onButtonClickThree}
                onButtonClickSix={this.onButtonClickSix}
                onButtonClickTwelve={this.onButtonClickTwelve}
                onButtonClickTwentyFour={this.onButtonClickTwentyFour}
                onButtonClick20={this.onButtonClick20}
                onButtonClick30={this.onButtonClick30}
                onButtonClick45={this.onButtonClick45}
                onButtonClick60={this.onButtonClick60}
                onTrackSelect={this.onTrackSelect}
                onCarSelect={this.onCarSelect}
                minuteValue={this.state.minuteValue}
                hourValue={this.state.hourValue}
                trackValue={this.state.trackValue}
                carValue={this.state.carValue}
                tracks={iracingCars}
              />

              : route === 'setup' ?
                <Display>
                  <NavBar onRouteChange={this.onRouteChange}></NavBar>
                  <Setup />
                </Display>
                : null}




        <div>
        </div>
      </div>
    );
  }

}

export default App;
