import React from 'react';

interface HumidityProps {
  humidity: number;
}

const Humidity: React.FC<HumidityProps> = ({ humidity }) => {
  return (
    <div className="humidity">
      <p>💧 Humidity: {humidity}%</p>
    </div>
  );
};

export default Humidity;