import React from 'react';

const Wind = ({ windSpeed }) => {
  return (
    <div className="detail-box">
      🌬️ Wind Speed: {windSpeed} kph
    </div>
  );
};

export default Wind;
