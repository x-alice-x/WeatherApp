import React from 'react'
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "31fe2047877125e3249c10681bb0a56f"

class App extends React.Component {

  state = {
    temp: null,
    city: null,
    country: null,
    pressure: null,
    sunset: null,
    error: null
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      
      if (data.cod === "404") {
        this.setState({
          temp: null,
          city: null,
          country: null,
          pressure: null,
          sunset: null,
          error: 'City not found'
        })
        return 0
      } else if (data.cod === "500") {
          this.setState({
            temp: null,
            city: null,
            country: null,
            pressure: null,
            sunset: null,
            error: 'Oops! Server problems'
          })
          return 0
      }
      
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: this.getTimeFromTimestamp(data.sys.sunset),
        error: null
      })
    } else {
      this.setState({
        temp: null,
        city: null,
        country: null,
        pressure: null,
        sunset: null,
        error: 'Enter the city'
      })
    }
  }

  getTimeFromTimestamp(val) {
    let date = new Date()
    date.setTime(val)
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }

  render() {
    return(
      <div className='main'>
        <Info />
        <Form weatherMethod={this.gettingWeather} error={this.state.error} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
          />
      </div>
    )
  }
}

export default App;