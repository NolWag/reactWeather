import React, { Component } from 'react';
import City from './City';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locWeather: [],
      locWeatherTemp: '',
      totalCount: '1'
    }
  }

  componentDidMount() {
    // Converts temp to F
    function convertTemp(temp) {
      const newTemp = temp * 1.8 - 459.67;
      const roundedTemp = Math.round(newTemp);
      return roundedTemp;
    }
    // load intial state of current location
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip=32514,us&APPID=d989429667db39e6a47ce3f97bba70b6')
    .then(res => {
      const locWeather = res.data;
      const finalTemp = convertTemp(res.data.main.temp);
      this.setState({ locWeather: res.data.name, locWeatherTemp: finalTemp });
    });
  }

  handlePlusClick() {
    const currentCount = this.state.totalCount;
    if(currentCount === currentCount) {
      const mainContainer = document.getElementById('main');
      mainContainer.appendChild(<City />)
    }
    this.setState({
      totalCount: 1
    })
  }

  render() {
    return(
      // Map array of cities over child component City
      <div className="main">
        <City location={this.state.locWeather} temp={this.state.locWeatherTemp} />
      </div>
      // Click + to add new city adds one to count and setState
      // compare old number to new number
    )
  }


}

export default Weather
