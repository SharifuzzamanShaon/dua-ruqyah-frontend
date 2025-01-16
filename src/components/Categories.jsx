"use client";
import React, { useEffect, useState } from "react";
import SearchModule from "./SearchModule";
import HttpKit from "../../common/HttpKit";
import Image from "next/image";

const Categories = ({ duas, setDuas, setNavigate }) => {
  const [openCategory, setOpenCategory] = useState(null); // Manage which category is open
  const [openSubCategory, setOpenSubCategory] = useState(null); // Manage which subcategory is open
  const [allCategories, setAllCategories] = useState([]);
  const [selectedDua, setSelectedDua] = useState(null); // State to manage selected dua

  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const res = await HttpKit.getAllCategories();
        setAllCategories(res.categories);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchAllCategory();
  }, []);

  const handleCategoryClick = (index) => {
    setOpenCategory(openCategory === index ? null : index); // Toggle category visibility
    setOpenSubCategory(null); // Reset subcategory when category changes
  };

  const handleSubCategoryClick = async (subcat_id) => {
    if (openSubCategory !== subcat_id) {
      // Only fetch duas when the subcategory is not already open
      try {
        const response = await HttpKit.fetchDuasBySubcatId(subcat_id);
        setDuas(response.data);
      } catch (error) {
        console.log("Error fetching duas:", error);
      }
    }
    setOpenSubCategory(openSubCategory === subcat_id ? null : subcat_id); // Toggle subcategory visibility
  };

  const handleClickOnDua = (e, index) => {
    e.stopPropagation();
    setNavigate(index);
    setSelectedDua(index); // Set the selected dua to the clicked one
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white shadow-md rounded-lg">
        <h2 className="text-2ml font-bold mb-4 text-center bg-green-500">
          Categories
        </h2>
        <SearchModule />
        <ul className="space-y-2 px-4 cursor-pointer">
          {allCategories?.map((category, index) => (
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
              {/* Subcategories (visible when the category is clicked) */}
              {openCategory === index && (
                <ul className="pl-6 py-3 mt-2 space-y-1">
                  {category.subcategories.map((sub) => (
                    <li
                      key={sub.subcat_id}
                      className="text-gray-700 cursor-pointer"
                      onClick={() => handleSubCategoryClick(sub.subcat_id)}
                    >
                      {sub.subcat_name_en}

                      {/* Sub-subcategories or items (visible when subcategory is clicked) */}
                      {openSubCategory === sub.subcat_id && (
                        <ul className="pl-4 mt-2 text-gray-600">
                          {duas?.map((item, itemIndex) => (
                            <li
                              onClick={(e) => handleClickOnDua(e, itemIndex)} // Prevent hiding on click
                              key={itemIndex}
                              className={`cursor-pointer ${
                                selectedDua === itemIndex
                                  ? "text-green-600" // Change color to green on click
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

// Static Params for dynamic routing
export const generateStaticParams = async () => {
  try {
    // Fetch all categories and subcategories
    const categories = await HttpKit.getAllCategories();  // Assuming HttpKit.getAllCategories() fetches all categories and subcategories
    const paths = categories?.map(category =>
      category.subcategories?.map(subcategory => ({
        params: { categoryId: category.cat_id.toString(), subcategoryId: subcategory.subcat_id.toString() },
      }))
    ).flat();

    return {
      paths: paths || [],
      fallback: 'blocking',  // or 'false' or 'true' based on your needs
    };
  } catch (error) {
    console.log("Error fetching static params:", error);
    return { paths: [], fallback: 'blocking' };
  }
};

// Fetch Data at Build Time for Static Pages
export const getStaticProps = async ({ params }) => {
  try {
    const { categoryId, subcategoryId } = params;

    // Fetch duas by subcategory ID
    const response = await HttpKit.fetchDuasBySubcatId(subcategoryId);  // Make sure HttpKit can handle this call
    const duas = response.data || [];

    return {
      props: {
        categoryId,
        subcategoryId,
        duas,
      },
    };
  } catch (error) {
    console.log("Error fetching data for static props:", error);
    return {
      props: {
        categoryId: null,
        subcategoryId: null,
        duas: [],
      },
    };
  }
};
