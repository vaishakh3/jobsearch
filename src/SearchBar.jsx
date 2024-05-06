import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
  const [jobRole, setJobRole] = useState('');
  const [location, setLocation] = useState('');

  const handleJobRoleChange = (e) => {
    setJobRole(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(jobRole, location);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Search</h2>
      <div className="search-bar">
        <div className="form-control">
          <input
            type="text"
            placeholder="Job Role"
            className="input input-bordered w-24 md:w-auto"
            value={jobRole}
            onChange={handleJobRoleChange}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-24 md:w-auto"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
