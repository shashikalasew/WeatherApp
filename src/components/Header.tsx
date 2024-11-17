import React from 'react';

interface HeaderProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ city, setCity, handleSearch }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;