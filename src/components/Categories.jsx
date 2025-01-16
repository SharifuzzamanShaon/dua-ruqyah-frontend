"use client";
import React, { useEffect, useState } from "react";
import SearchModule from "./SearchModule";
import HttpKit from "../../common/HttpKit";
import Image from "next/image";

const Categories = ({ duas, setDuas, setNavigate }) => {
  const [openCategory, setOpenCategory] = useState(0); // Default to the first category
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]); // State for filtered categories
  const [selectedDua, setSelectedDua] = useState(null);

  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const res = await HttpKit.getAllCategories();
        setAllCategories(res.categories);
        setFilteredCategories(res.categories); // Initialize filtered categories with all categories

        // Automatically open the first category and fetch its subcategory's duas
        if (res.categories.length > 0) {
          setOpenCategory(0); // Open the first category
          const firstCategory = res.categories[0];
          if (firstCategory.subcategories.length > 0) {
            const firstSubCategory = firstCategory.subcategories[0];
            setOpenSubCategory(firstSubCategory.subcat_id); // Open the first subcategory
            const response = await HttpKit.fetchDuasBySubcatId(
              firstSubCategory.subcat_id
            );
            setDuas(response.data); // Set the duas for the first subcategory
          }
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchAllCategory();
  }, []);

  const handleCategoryClick = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenSubCategory(null);
  };

  const handleSubCategoryClick = async (subcat_id) => {
    if (openSubCategory !== subcat_id) {
      try {
        const response = await HttpKit.fetchDuasBySubcatId(subcat_id);
        setDuas(response.data);
      } catch (error) {
        console.log("Error fetching duas:", error);
      }
    }
    setOpenSubCategory(openSubCategory === subcat_id ? null : subcat_id);
  };

  const handleClickOnDua = (e, index) => {
    e.stopPropagation();
    setNavigate(index);
    setSelectedDua(index);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white shadow-md rounded-lg ">
        <h2 className="text-2ml font-bold mb-4 text-center bg-green-500 py-4">
          Categories
        </h2>
        <SearchModule
          allCategories={allCategories}
          setFilteredCategories={setFilteredCategories}
        />
        <ul className="space-y-2 px-4 cursor-pointer overflow-y-auto max-h-96">
          {filteredCategories?.map((category, index) => (
            <li key={index} className="border-b">
              <div
                className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                onClick={() => handleCategoryClick(index)}
              >
                <div className="flex items-center">
                  <Image
                    src="/icons/duar_gurutto.svg"
                    width={20}
                    height={20}
                    alt="dua"
                  />
                  <div className="pl-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      {category.cat_name_en}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Subcategory: {category.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-gray-800">
                    {category.no_of_dua}
                  </p>
                  <p className="text-sm text-gray-500">Duas</p>
                </div>
              </div>
              {openCategory === index && (
                <ul className="pl-6 py-3 mt-2 space-y-1 overflow-y-auto max-h-60">
                  {category.subcategories?.map((sub) => (
                    <li
                      key={sub.subcat_id}
                      className="text-gray-700 cursor-pointer"
                      onClick={() => handleSubCategoryClick(sub.subcat_id)}
                    >
                      {sub.subcat_name_en}
                      {openSubCategory === sub.subcat_id && (
                        <ul className="pl-4 mt-2 text-gray-600 max-h-40 overflow-y-auto">
                          {duas?.map((item, itemIndex) => (
                            <li
                              onClick={(e) => handleClickOnDua(e, itemIndex)}
                              key={itemIndex}
                              className={`cursor-pointer ${
                                selectedDua === itemIndex
                                  ? "text-green-600"
                                  : "hover:text-gray-800"
                              }`}
                            >
                              {item.dua_name_en}
                            </li>
                          ))}
                        </ul>
                      )}
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
