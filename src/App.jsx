import React, { useState } from 'react';
import Timeline from './Timeline';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState({ jobRole: '', location: '' });

  const handleSearch = (jobRole, location) => {
    setSearchQuery({ jobRole, location });
  };

  return (
    <div className="App">
      <Navbar />
      <br />
      <SearchBar handleSearch={handleSearch} />
      <br />
      <Timeline searchQuery={searchQuery} />
    </div>
  );
}

export default App;
