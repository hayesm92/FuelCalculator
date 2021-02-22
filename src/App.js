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
import Profile from './Components/Profile/Profile'
import Error from './Components/Splash/Error'
import profileicon from './Pictures/profile2.png'
import homeicon from './Pictures/home _filled.png'
import tools from './Pictures/tools2.png'
import Saved from './Components/Setup/Saved';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minuteValue: '', //Used by Minute Slider
      hourValue: '', //Used by Hour Slider
      trackValues: '',
      carValue: [],
      accCarsGT3: '',
      accTracks: '',
      track: '',
      car: '',
      trackSelection: 'Barcelona',
      carSelection: '',
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
      carError: false,
      trackError: false,
      timeError: false,
      avgError: false,
      fetchError: false,
      consoleError: '',
      fetchErr: '',
      mainError: '',
      carMessage: '',
      timeMessage: '',
      avgMessage: '',
      mainMessage: '',
      pic: profileicon,
      homeFilled: homeicon,
      tools: tools,
      notifications: '',
      savedTrack: '',
      savedAvg: '',
      savedCar: '',
      savedLiters: '',
      savedEstimate: '',
      savedArray: [],


    }


    this.onCarSelect = this.onCarSelect.bind(this);
    this.onTrackSelect = this.onTrackSelect.bind(this);
    this.onMinuteSliderChange = this.onMinuteSliderChange.bind(this);
    this.onHourSliderChange = this.onHourSliderChange.bind(this);
    this.refresh = this.refresh.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  // Select Methods
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
      carValue: this.state.accCarsGT3,
      carSelection: 'AMR V8 Vantage GT3',
    })
  }

  // onMainSelectionClick = (e) => {
  //   this.checkSelectionError();
  //   console.log(this.state.mainError)
  //   if (this.state.mainError === false) {
  //     this.setState({
  //       mainSelection: 'acc'
  //     })
  //   } else {
  //     this.setState({
  //       route: 'home'
  //     })

  //   }
  //   if (e.target.value === 'acc') {
  //     this.setState({
  //       mainSelection: 'acc'
  //     })
  //   };
  //   console.log(this.state.route);
  // }
  onRouteChange = (route) => {

    // if (route === 'home') {
    //   this.clearState();
    // }
    this.setState({
      route: route
    },
      () => {

        if (route === 'setup') {
          document.getElementById('highlight3').style.backgroundColor = '#5DFA5D';
          document.getElementById('highlight4').style.backgroundColor = 'white';
          document.getElementById('highlight1').style.backgroundColor = 'white';
          document.getElementById('setup').src = this.state.tools;
          this.setState({
            notifications: '',
          });
          console.log('Route: ', route)
        }
        if (route === 'profile') {
          document.getElementById('highlight4').style.backgroundColor = '#5DFA5D';
          document.getElementById('highlight1').style.backgroundColor = 'white';
          document.getElementById('highlight3').style.backgroundColor = 'white';
          document.getElementById('profile').src = this.state.pic;
          console.log('Route: ', route)
        }
        if (route === 'acc') {
          document.getElementById('highlight1').style.backgroundColor = '#5DFA5D';
          document.getElementById('highlight4').style.backgroundColor = 'white';
          document.getElementById('highlight3').style.backgroundColor = 'white';
          console.log('Route: ', route)
        }
      })
  }


  //Changes notifications and saves calculations
  saveCalculations = () => {
    const save = () => {
      let arr = []
      this.setState({
        savedCar: this.state.car,
        savedTrack: this.state.track,
        savedAvg: this.state.usersAverageLapTime,
        savedLiters: this.state.finalLiters,
        savedEstimate: this.state.finalEstimate
      }, () => {
        console.log('hello', this.state.savedCar, this.state.savedEstimate, this.state.savedAvg, this.state.savedLiters, this.state.savedEstimate)
        arr.push(<div>{this.state.savedCar}</div>, <div>{this.state.savedTrack}</div>, <div>{this.state.savedAvg}</div>, <div>{this.state.savedLiters}</div>, <div>{this.state.savedEstimate}</div>)
        let x = this.state.savedArray
        x.push(arr)
        return document.getElementById('save-math').value = 'Results Saved'

        this.setState({
          savedArray: x
        }, () => {
          console.log('Saved Array', this.state.savedArray)
        })
      })

    }

    //Alerts that calculations were saved
    const changeMessage = () => {
      setTimeout(() => {
        return document.getElementById('save-math').value = 'Save'
      }, 1000)
    }

    if (this.state.notifications === '') {
      this.setState({
        notifications: 1,
        savedCar: this.state.car,
        savedTrack: this.state.track,
        savedAvg: this.state.usersAverageLapTime,
        savedLiters: this.state.finalLiters,
        savedEstimate: this.state.finalEstimate
      }, () => {
        changeMessage();
        save();
      })
    }

    if (this.state.notifications > 0) {
      let counter = this.state.notifications
      let final = counter + 1;

      this.setState({
        notifications: final,
        savedCar: this.state.car,
        savedTrack: this.state.track,
        savedAvg: this.state.usersAverageLapTime,
        savedLiters: this.state.finalLiters,
        savedEstimate: this.state.finalEstimate
      }, () => {
        changeMessage();
        save();
      })
    }

  }



  onSelectionSubmit = () => {
    this.checkSelectionError();
    console.log('Error', this.state.fetchError)
    console.log('1:', typeof this.state.accTracks)
  }


  //Checks Home component for errors
  checkSelectionError() {
    const selection = document.getElementById('sim-selection').value;
    console.log('Selection', selection)
    const message = 'Please select a simulator (ACC)'

    if (selection != 'acc') {
      this.setState({
        mainError: true,
        mainMessage: message
      })

    } if (selection === 'acc') {
      this.setState({
        mainError: false,
        mainMessage: '',
        route: 'acc'
      }, () => {

        document.getElementById('highlight1').style.backgroundColor = '#5DFA5D';
      }
      )
    }
    if (selection === 'acc' && this.state.fetchError === true) {
      this.setState({
        route: 'error',
      })
    }


  }
//Changes car and track selection
  setCarTrack = () => {
    this.setState({
      track: this.state.trackSelection,
      car: this.state.carSelection
    })
  }

  displayResults = () => {
    this.setState({
      finalLiters: this.state.carLiters,
      finalEstimate: this.state.estimatedLiters,
      car: this.state.carSelection,
    })
  }

  //Fetches liters from database
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

  //Checks if errors are present this displays results
  async calculateFuel() {
    let arr = []
    await this.checkError();
    if (this.state.carError === false && this.state.avgError === false && this.state.timeError === false) {
      await this.finalMath()
      this.setCarTrack()
      this.displayResults()

    }
  }




  //Checks calculator component for errors
  async checkError() {
    const userCar = document.getElementById('carFloatingSelect');
    const userTrack = document.getElementById('trackFloatingSelect');
    const avgMinute = Number(document.getElementById('minute-time').value);
    const avgSecond = Number(document.getElementById('second-time').value);
    const sliderMinute = Number(document.getElementById('slider-minute').value)
    const sliderHour = Number(document.getElementById('slider-hour').value)

    const messageC = 'Please select a car';
    const messageA = 'Please select a time'
    const messageT = 'Please enter hours and/or minutes'

    const setAtt = (e, attrs) => {
      for (let key in attrs) {
        e.setAttribute(key, attrs[key])
      }
    }

    if (this.state.carSelection === '') {
      this.setState({
        carError: true,
        carMessage: messageC
      })
      setAtt(document.getElementById('cup'), { "data-bs-container": "body", "data-bs-toggle": "popover", "data-bs-placement": "right", "data-bs-content": "Right popover" });
    }

    if (this.state.carSelection) {
      this.setState({
        carError: false,
        carMessage: '',
      })
    }

    if (avgMinute === 0 && avgSecond === 0) {
      this.setState({
        avgError: true,
        avgMessage: messageA,
      })
    } else {
      this.setState({
        avgError: false,
        avgMessage: '',
      })
    }

    sliderMinute === 0 && sliderHour === 0
      ? this.setState({
        timeError: true,
        timeMessage: messageT,
      })
      : this.setState({
        timeError: false,
        timeMessage: '',
      })

  }

  async finalMath() {
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


  }


  buttonPress = () => {
    this.calculateFuel();
  }

  //Fetches track lists from database
  async fetchInfo() {
    try {
      await fetch('https://polar-badlands-83667.herokuapp.com/tracks')
        .then(data => data.json())
        .then(tracks =>
          this.setState({
            accTracks: tracks,
            fetchError: false
          }))
      if (typeof this.state.accTracks != 'object') {
        this.setState({
          fetchErr: this.state.accTracks,
          fetchError: true,
        })
      } if (typeof this.state.accTracks === 'object') {
        this.setState({
          fetchError: false,
        })
      }
    } catch (err) {
      this.setState({
        consoleError: err,
        fetchError: true,
      })
    }
    try {
      await fetch('https://polar-badlands-83667.herokuapp.com/cars')
        .then(data => data.json())
        .then(carList =>
          this.setState({
            accCarsGT3: carList,
            // isLoading: false
          }))
    }
    catch (err) {
      this.setState({
        fetchError: true,
      })
    }


    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({
        isLoading: false,
        route: 'home'
      });
    }
  }

  async componentDidMount() {
    await this.fetchInfo()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   let arr = [];
  //   const newArr = this.state.savedArray;


  //   if (this.state.car !== prevState.car) {
  //     arr.push(this.state.car);
  //     // console.log('Array', arr)
  //   }
  //   if (this.state.track !== prevState.track) {
  //     arr.push(this.state.track)
  //     // console.log('Array', arr)
  //   }

  //   if (this.state.usersAverageLapTime !== prevState.usersAverageLapTime) {
  //     arr.push(this.state.usersAverageLapTime)
  //     // console.log('Array', arr)
  //   }

  //   if (this.state.finalEstimate !== prevState.finalEstimate) {
  //     arr.push(this.state.finalEstimate)
  //     // console.log('Array', arr)
  //   }

  //   if (this.state.finalLiters !== prevState.finalLiters) {
  //     arr.push(this.state.finalLiters)
  //     // console.log('Array', arr)
  //   }
  //   newArr.push(arr);

  //   console.log('ARRAY', arr)





  // // this.setState({
  // //   savedArray: newArr
  // // }, () => {
  // //   console.log('New Array', newArr)
  // // })




  //   }







  //Change states back to default when going Home
  clearState = () => {
    this.setState({
      minuteValue: '', //Used by Minute Slider
      hourValue: '', //Used by Hour Slider
      trackValues: '',
      carValue: [],
      track: '',
      car: '',
      trackSelection: 'Barcelona',
      carSelection: '',
      estimatedLiters: '',
      carLiters: '',
      usersAverageLapTime: '',
      lapTime: '',
      recommendedLiters: '',
      mainSelection: '',
      finalEstimate: '',
      finalLiters: '',
      route: '',
      carError: false,
      trackError: false,
      timeError: false,
      avgError: false,
      fetchError: false,
      fetchErr: '',
      mainError: '',
      carMessage: '',
      timeMessage: '',
      avgMessage: '',
      mainMessage: '',
    })

    const clearValues = () => {

      const mt = document.getElementById('minute-time').value = 0;
      const st = document.getElementById('second-time').value = 0;
      const sm = document.getElementById('slider-minute').value = 0;
      const sh = document.getElementById('slider-hour').value = 0;

      if (mt === 'null') {
        return document.getElementById('minute-time').value
      } else {
        return document.getElementById('minute-time').value = 0
      }

      if (st === 'null') {
        return document.getElementById('minute-time').value
      } else {
        return document.getElementById('minute-time').value = 0
      }

      if (sm === 'null') {
        return document.getElementById('minute-time').value
      } else {
        return document.getElementById('minute-time').value = 0
      }
      if (sh === 'null') {
        return document.getElementById('minute-time').value
      } else {
        return document.getElementById('minute-time').value = 0
      }


      clearValues();

    }
  }

  //Resets and clears inputs in calculator
  clearFormValues = () => {
    this.setState({
      minuteValue: '', //Used by Minute Slider
      hourValue: '', //Used by Hour Slider
      trackValues: '',
      carValue: [],
      track: '',
      car: '',
      trackSelection: 'Barcelona',
      carSelection: '',
      estimatedLiters: '',
      carLiters: '',
      usersAverageLapTime: '',
      lapTime: '',
      recommendedLiters: '',
      mainSelection: '',
      finalEstimate: '',
      finalLiters: '',
      carError: false,
      trackError: false,
      timeError: false,
      avgError: false,
      fetchError: false,
      fetchErr: '',
      mainError: '',
      carMessage: '',
      timeMessage: '',
      avgMessage: '',
      mainMessage: '',

    })

    const clearForm = () => {

      document.getElementById('minute-time').value = 0;
      document.getElementById('second-time').value = 0;
      document.getElementById('slider-minute').value = 0;
      document.getElementById('slider-hour').value = 0;

    }
    clearForm();

  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1000
      )
    );
  }

//Refreshes application if error occurs
  async refresh() {
    this.setState({
      isLoading: true
    })
    this.setState({
      fetchError: false,
    })
    this.componentDidMount();
  }

  // async componentDidMount() {
  //   await fetch('http://localhost:3000/tracks')
  //     .then(data => data.json())
  //     .then(tracks =>
  //       this.setState({
  //         accTracks: tracks,
  //       }))
  //   if (typeof this.state.accTracks === 'string') {
  //     this.setState({
  //       fetchErr: this.state.accTracks,
  //       fetchError: true,
  //     })

  //   }

  //   try {
  //     await fetch('https://polar-badlands-83667.herokuapp.com/cars')
  //       .then(data => data.json())
  //       .then(carList =>
  //         this.setState({
  //           accCarsGT3: carList,
  //           // isLoading: false
  //         }))
  //   }

  //   catch (err) {
  //     this.setState({
  //       fetchError: true,
  //     })
  //   }

  //   const data = await this.performTimeConsumingTask();
  //   if (data !== null) {
  //     this.setState({
  //       isLoading: false,
  //       route: 'home'
  //     });
  //   }
  // }




  render() {
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
        {
          this.state.isLoading === true
            ? <Splash />
            : this.state.route === 'acc' && this.state.isLoading === false
              ? <div>
                {/* <NavBar onRouteChange={this.onRouteChange} clearState={this.clearState}></NavBar> */}
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
                  trackValues={this.state.accTracks}
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
                  clearFormValues={this.clearFormValues}
                  carMessage={this.state.carMessage}
                  trackMessage={this.state.trackMessage}
                  avgMessage={this.state.avgMessage}
                  timeMessage={this.state.timeMessage}
                  onMainSelectionClick={this.onMainSelectionClick}
                  saveCalculations={this.saveCalculations}
                  changeMessage={this.changeMessage}
                />
                <Footer onRouteChange={this.onRouteChange} notifications={this.state.notifications} />
              </div>

              : route === 'home' || route === 'calculator' && this.state.isLoading === false && this.state.fetchErr === false ?
                <div>
                  <Home
                    onMainSelectionClick={this.onMainSelectionClick}
                    onSelectionSubmit={this.onSelectionSubmit}
                    mainMessage={this.state.mainMessage}
                  />

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
                      {/* <NavBar onRouteChange={this.onRouteChange}></NavBar> */}
                      <Setup />
                      <Footer onRouteChange={this.onRouteChange} changeToGreen={this.changeToGreen}></Footer>
                    </Display>

                    : route === 'error'
                      ? <Error err={this.state.fetchErr} refresh={this.refresh} />
                      : route === 'profile'
                        ? <div>
                          <Profile savedArray={this.state.savedArray}
                          ></Profile>
                          <Footer onRouteChange={this.onRouteChange} changeToGreen={this.changeToGreen}></Footer>
                        </div>
                        : null}




        <div>
        </div>
      </div>
    );
  }

}

export default App;
