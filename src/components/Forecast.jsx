import React from 'react';

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <p>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p>{day.day.avgtemp_c}°C</p>
          <p>{day.day.condition.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
