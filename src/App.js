import React from 'react';
import logo from './logo.svg';
import './App.css';
import Selection from './Components/Selection/Selection'
import Selection2 from './Components/Selection/Selection2'
import NavBar from './Components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Components/Calculator/Calculator'
import Display from './Components/Display/Display';
import Footer from './Components/Navbar/Footer';
import Home from './Components/Home/Home'
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Setup from './Components/Setup/Setup';
import Splash from './Components/Splash/Splash'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minuteValue: '', //Used by Minute Slider
      hourValue: '', //Used by Hour Slider
      trackValues: '',
      carValue: [],
      accCarsGT3: '',
      track: '',
      car: '',
      trackSelection: 'Barcelona',
      carSelection: 'AMR V8 Vantage GT3',
      estimatedLiters: '',
      carLiters: '',
      usersAverageLapTime: '',
      lapTime: '',
      recommendedLiters: '',
      mainSelection: '',
      finalEstimate: '',
      finalLiters: '',
      route: 'home',
      collapsed: false,
      isLoading: true,

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
    this.setState({
      carValue: this.state.accCarsGT3
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

  setCarTrack = () => {
    this.setState({
      track: this.state.trackSelection,
      car: this.state.carSelection
    })
  }

  onRouteChange = (route) => {
    if (this.state.route === 'home') {
      this.clearState();
    }
    this.setState({
      route: route,
    })

  }
  displayResults = () => {
    this.setState({
      finalLiters: this.state.carLiters,
      finalEstimate: this.state.estimatedLiters
    })
  }


  async onSubmit() {
    await fetch('https://polar-badlands-83667.herokuapp.com/liters', {
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
        console.log(liters)
      })
      .catch(err => console.log(err))
  }


  async calculateFuel() {
    await this.onSubmit();
    const averageLapMinute = Number(document.getElementById('minute-time').value) * 60;
    const averageLapSecond = Number(document.getElementById('second-time').value);
    const lapTime = (averageLapMinute / 60) + ' min ' + '' + averageLapSecond + ' secs';
    const totalTime = averageLapSecond + averageLapMinute;
    this.setState({
      usersAverageLapTime: lapTime
    })

    const estimatedLaps = (((this.state.hourValue * 60) * 60) + (this.state.minuteValue * 60)) / totalTime;
    const estimatedLiters2 = Math.round(estimatedLaps * this.state.carLiters);
    this.setState({
      estimatedLiters: estimatedLiters2,
    })
    this.displayResults();
    this.setCarTrack();
  }

  buttonPress = () => {
    this.calculateFuel();
  }

  clearState = () => {
    this.setState({
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
      lapTime: '',
      recommendedLiters: '',
      mainSelection: '',
      finalEstimate: '',
      finalLiters: '',
    })

    const clearValues = () => {
      document.getElementById('minute-time').value = 0;
      document.getElementById('second-time').value = 0;
    }
    clearValues();

  }
performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    );
  }

async componentDidMount() {
    await fetch('https://polar-badlands-83667.herokuapp.com/cars')
      .then(data => data.json())
      .then(carList =>
        this.setState({
          accCarsGT3: carList,
          isLoading: false
        }))
    // const data = await this.performTimeConsumingTask();
    // if (data !== null) {
    //   this.setState({ isLoading: false });
    // }
  }


  render() {
    const accTracks = ['Barcelona', 'Brands Hatch', 'Hungaroring', 'Kyalami', 'Laguna Seca', 'Misano', 'Monza', 'Mount Panorama', 'Nurburgring', 'Paul Ricard', 'Silverstone', 'Spa Francorchamps', 'Suzuka', 'Zandvoort', 'Zolder'];
    const accGTFour = ['Mercedes AMG GT4', 'Cheverolet Camaro GT4']
    const iracingCars = ['ir1', 'ir2', 'ir3']
    const { route } = this.state;

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />);



    return (
      <div className="App">
        {this.state.isLoading === true
          ? <Splash />
          :this.state.route === 'acc' && this.state.isLoading === false
            ? <div>
                <NavBar onRouteChange={this.onRouteChange} clearState={this.clearState}></NavBar>
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
                    buttonPress={this.buttonPress}
                    estimatedLiters={this.state.estimatedLiters}
                    carLiters={this.state.carLiters}
                    usersAverageLapTime={this.state.usersAverageLapTime}
                    trackSelection={this.state.trackSelection}
                    carSelection={this.state.carSelection}
                    handleChange={this.handleChange}
                    finalEstimate={this.state.finalEstimate}
                    finalLiters={this.state.finalLiters}
                    car={this.state.car}
                    track={this.state.track}
                    clearState={this.clearState}
                  />
            </div>

          : route === 'home' || route === 'calculator' && this.state.isLoading === false ?
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

          : route === 'setup' 
          ? <Display>
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
