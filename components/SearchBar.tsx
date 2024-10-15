import React from 'react';

const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search projects..."
        className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
};

export default SearchBar;
