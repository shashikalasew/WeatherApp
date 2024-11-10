import React from 'react';

const Header = ({ city, setCity, handleSearch }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </header>
  );
};

export default Header;
