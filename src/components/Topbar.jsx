import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Importing icons for search and user profile

const Topbar = () => {
  return (
    <header className="w-full bg-gray-50 px-6 py-4 flex items-center justify-between shadow-sm">

    <h1 className="text-lg font-semibold text-gray-900">Duas Page</h1>
    <div className="relative w-[300px]">
      <input
        type="text"
        placeholder="Search by Dua Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
      />
      <button className="absolute top-2 right-3 text-gray-500">
        <i className="fas fa-search"></i>
      </button>
    </div>
    
    {/* Right: Profile */}
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <img
          src="https://placehold.co/32x32"
          alt="Profile"
          className="rounded-full"
        />
      </div>
      <button className="text-gray-600">
        <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  </header>
  );
}

export default Topbar;
