"use client"
import React, { useState } from 'react';
import SearchModule from './SearchModule';
const Categories = () => {
  // State to manage which category is open
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      title: 'Category 1',
      subcategories: ['Subcategory 1A', 'Subcategory 1B', 'Subcategory 1C'],
    },
    {
      title: 'Category 2',
      subcategories: ['Subcategory 2A', 'Subcategory 2B'],
    },
    {
      title: 'Category 3',
      subcategories: ['Subcategory 3A', 'Subcategory 3B', 'Subcategory 3C'],
    },
  ];

  const handleCategoryClick = (index) => {
    setOpenCategory(openCategory === index ? null : index); // Toggle category visibility
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      <div className="bg-white shadow-md rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <SearchModule/>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="border-b">
              <div
                className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                onClick={() => handleCategoryClick(index)}
              >
                <span className="text-lg font-semibold text-black">{category.title}</span>
                <span className="text-gray-500">
                  {openCategory === index ? '-' : '+'}
                </span>
              </div>
              {/* Subcategories (visible when the category is clicked) */}
              {openCategory === index && (
                <ul className="pl-6 mt-2 space-y-1">
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="text-gray-700">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
