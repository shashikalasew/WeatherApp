import React from 'react';

interface TemperatureProps {
  temp: number;
}

const Temperature: React.FC<TemperatureProps> = ({ temp }) => {
  return (
    <div className="temperature">
      <p>🌡 Temperature: {temp}°C</p>
    </div>
  );
};

export default Temperature;