import React, { useEffect } from 'react';
import Temperature from './Temperature';
import UVIndex from './UVIndex';
import Humidity from './Humidity';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import Wind from './Wind';


const WeatherDisplay = ({ weatherData, cityName, countryName }) => {

  const getWeatherClass = (condition) => {
    switch (condition) {
      case 'Sunny':
      case 'Clear':
        return 'sunny';
      case 'Partly cloudy':
        return 'partly-cloudy';
      case 'Cloudy':
      case 'Overcast':
        return 'cloudy';
      case 'Mist':
      case 'Fog':
        return 'foggy';
      case 'Rain':
      case 'Drizzle':
        return 'rainy';
      case 'Thunderstorm':
        return 'thunderstorm';
      case 'Snow':
        return 'snowy';
      default:
        return 'default-weather';
    }
  };

  useEffect(() => {
    const weatherClass = getWeatherClass(weatherData.current.condition.text);
    document.body.className = weatherClass;
  }, [weatherData.current.condition.text]);

  return (
    <div className="weather-display">
      <h2>{cityName}, {countryName}</h2>
      <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
      <p>{weatherData.current.condition.text}</p>

      <div className="weather-details">
        <Temperature temp={weatherData.current.temp_c} />
        <UVIndex uv={weatherData.current.uv} />
        <Humidity humidity={weatherData.current.humidity} />
        <Sunrise sunrise={weatherData.forecast.forecastday[0].astro.sunrise} />
        <Sunset sunset={weatherData.forecast.forecastday[0].astro.sunset} />
        <Wind windSpeed={weatherData.current.wind_kph} />
      </div>
      
    </div>
  );
};

export default WeatherDisplay;
