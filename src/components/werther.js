import React from 'react';

const Weather = props => (
  <div>
    <p className="error">{props.error}</p>
    {props.city && !props.error && (
      <div className="infoWeather">
        <p>
          Location: {props.city}, {props.country}
        </p>
        <p>Temperature: {props.temp}</p>
        <p>Pressure: {props.pressure} GPa</p>
        <p>Sunrise: {props.sunrise}</p>
        <p>Sunset: {props.sunset}</p>
      </div>
    )}
  </div>
);

export default Weather;
