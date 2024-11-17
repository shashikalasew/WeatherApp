import React from 'react';

interface WindProps {
  windSpeed: number;
}

const Wind: React.FC<WindProps> = ({ windSpeed }) => {
  return (
    <div className="wind">
      <p>🍃 Wind Speed: {windSpeed} km/h</p>
    </div>
  );
};

export default Wind;