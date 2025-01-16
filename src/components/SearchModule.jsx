import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchModule = ({ allCategories, setFilteredCategories }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = allCategories.filter((category) =>
      category.cat_name_en.toLowerCase().includes(searchTerm)
    );
    setFilteredCategories(filtered); // Update the filtered categories based on the search term
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative text-black">
        {/* Search Input Box */}
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleSearch} // Trigger the search function on input change
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
