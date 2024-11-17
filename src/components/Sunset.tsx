import React from 'react';

interface SunsetProps {
  sunset: string;
}

const Sunset: React.FC<SunsetProps> = ({ sunset }) => {
  return (
    <div className="sunset">
      <p>🌇 Sunset: {sunset}</p>
    </div>
  );
};

export default Sunset;