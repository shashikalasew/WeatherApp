import React, { useState } from 'react';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'dec406e029c440ecadd113314240111';
  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json';

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}&days=5`);
      if (!response.ok) {
        throw new Error('❌ City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError('❌ City not found');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <>
      <Header city={city} setCity={setCity} handleSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <>
          <WeatherDisplay 
            weatherData={weatherData} 
            cityName={weatherData.location.name}
            countryName={weatherData.location.country}
          />
          <Forecast forecast={weatherData.forecast.forecastday} />
        </>
      )}
    </>
  );
};

export default App;
