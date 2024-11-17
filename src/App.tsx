import React, { useState } from 'react';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';

export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    uv: number;
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
    }[];
  };
}

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = 'dec406e029c440ecadd113314240111';
  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json';

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}&days=5`);
      if (!response.ok) {
        throw new Error('❌ City not found');
      }
      const data: WeatherData = await response.json();
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
