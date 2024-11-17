import React from 'react';

interface SunriseProps {
  sunrise: string;
}

const Sunrise: React.FC<SunriseProps> = ({ sunrise }) => {
  return (
    <div className="sunrise">
      <p>🌅 Sunrise: {sunrise}</p>
    </div>
  );
};

export default Sunrise;