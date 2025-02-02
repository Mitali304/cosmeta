import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, closeSearch }) => {
  return (
    <div className="relative w-500 bg-white  border-t border-gray-200 z-0">
      <div className="container mx-auto px-4 py-3 flex items-center gap-3 rounded-lg">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={closeSearch}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
