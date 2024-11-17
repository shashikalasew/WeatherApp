import React from 'react';

interface UVIndexProps {
  uv: number;
}

const UVIndex: React.FC<UVIndexProps> = ({ uv }) => {
  return (
    <div className="uv-index">
      <p>☀ UV Index: {uv}</p>
    </div>
  );
};

export default UVIndex;