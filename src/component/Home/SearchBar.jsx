import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2 bg-white-200">
      {/* Left: Search bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 mr-0 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 m-x-0">
        <i className="fas fa-search mr-2"></i>
        </button>
      </div>
      
      {/* Middle: Text */}
      <div className="text-4xl font-bold font-new">Swift Help</div>
      
      {/* Right: Buttons */}
      <div className="flex items-center">
        <button className="px-4 py-1 mr-2 bg-orange-500 text-black rounded-md hover:bg-white">
          Fundraise
        </button>
        <button className="px-4 py-1 bg-orange-500 text-black rounded-md hover:bg-white">
          Donate
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
