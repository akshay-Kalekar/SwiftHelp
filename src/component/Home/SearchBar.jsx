const SearchBar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2 bg-white-200">
      {/* Left: Search bar */}
      <div id="searchflexbox" className="flex items-center">
        <input
          id="searchbox"
          type="text"
          placeholder="Search..."
          className="px-3 py-1 mr-0  border border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button className="px-4 py-1 bg-white-500 text-white border-black  m-x-0">
          <i className="fas fa-search mr-2"></i>
        </button>
      </div>

      {/* Middle: Text */}
      <div className="text-4xl font-bold font-new">Swift Help</div>

      {/* Right: Buttons */}
      <div className="flex items-center">
        <button
          id="fundraisebtn"
          className="px-4 py-1 mr-2 text-black  hover:bg-white hover:border-blue-500 hover:border-solid hover:border hover:rounded-lg"
        >
          Fundraise
        </button>
        <button
          id="donatebtn"
          className="px-4 py-1 bg-orange-500 text-black  hover:bg-white hover:border-blue-500 hover:border-solid hover:border hover:rounded-lg"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
