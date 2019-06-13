import React from 'react';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/werther';

const API_KEY = 'feb03ec0d1b37b92ac63e488bf612ad6';

function transformTime(time) {
  const date = new Date();
  date.setTime(time);
  return date.getHours() + ':' + date.getMinutes();
}

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunrise: transformTime(data.sys.sunrise),
        sunset: transformTime(data.sys.sunset),
        error: undefined,
      });
    } else {
      this.setState({
        error: 'Enter city name!',
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 info">
                  <Info />
                </div>
                <div className="col-sm-12 col-md-7 form">
                  <Form weatherMethod={this.getWeather} />
                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
