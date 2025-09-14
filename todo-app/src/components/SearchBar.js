
import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Search tasks"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
