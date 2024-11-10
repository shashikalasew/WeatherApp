import React from 'react';

const Temperature = ({ temp }) => {
  const tempInCelsius = temp;
  const tempInFahrenheit = (temp * 9/5) + 32;

  return (
    <div className="detail-box">
      🌡️ {tempInCelsius.toFixed(1)}°C / {tempInFahrenheit.toFixed(1)}°F
    </div>
  );
};

export default Temperature;
