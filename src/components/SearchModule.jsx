import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Search icon from react-icons

const SearchModule = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative">
        {/* Search Input Box */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Search Icon inside the input */}
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
          <FiSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchModule;
