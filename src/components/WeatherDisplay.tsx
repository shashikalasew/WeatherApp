import React, { useEffect } from 'react';
import Temperature from './Temperature';
import UVIndex from './UVIndex';
import Humidity from './Humidity';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import Wind from './Wind';
import { WeatherData } from '../App';

interface WeatherDisplayProps {
  weatherData: WeatherData;
  cityName: string;
  countryName: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, cityName, countryName }) => {
  const getWeatherClass = (condition: string): string => {
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
        <div className="detail-box">
          <Temperature temp={weatherData.current.temp_c} />
        </div>
        <div className="detail-box">
          <UVIndex uv={weatherData.current.uv} />
        </div>
        <div className="detail-box">
          <Humidity humidity={weatherData.current.humidity} />
        </div>
        <div className="detail-box">
          <Sunrise sunrise={weatherData.forecast.forecastday[0].astro.sunrise} />
        </div>
        <div className="detail-box">
          <Sunset sunset={weatherData.forecast.forecastday[0].astro.sunset} />
        </div>
        <div className="detail-box">
          <Wind windSpeed={weatherData.current.wind_kph} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;