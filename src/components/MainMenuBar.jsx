import React from "react";
import { CiHome } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { IoBulbOutline } from "react-icons/io5";
import { FiTag } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { BiBookAlt } from "react-icons/bi";

const MainMenuBar = () => {
  return (
    <div className="w-20 h-[50] bg-white rounded-xl flex flex-col items-center py-5 space-y-6 shadow-lg">
      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center shadow-md">
        <FaHandHoldingHeart className="text-white text-2xl" />
      </div>
      <div className="space-y-6">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
          <CiHome className="text-gray-600 text-xl" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
          <TbCategoryPlus className="text-gray-600 text-xl" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
          <IoBulbOutline className="text-gray-600 text-xl" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
          <FiTag className="text-gray-600 text-xl" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
          <GiHealthNormal className="text-gray-600 text-xl" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
          <BiBookAlt className="text-gray-600 text-xl" />
        </div>
      </div>
      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center shadow-md">
        <FaHandHoldingHeart className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default MainMenuBar;
