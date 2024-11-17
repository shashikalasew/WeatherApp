import React from 'react';

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface ForecastProps {
  forecast: ForecastDay[];
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <div className="forecast">
      {forecast.map((day) => (
        <div key={day.date} className="forecast-day">
          <h3>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p>{day.day.avgtemp_c}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;