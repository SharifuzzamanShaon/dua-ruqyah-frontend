import React from 'react'
import { CiHome } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { IoBulbOutline } from "react-icons/io5";
import { FiTag } from "react-icons/fi";

const MainMenuBar = () => {
  return (
    <div className="text-black flex flex-col pt-4 space-y-4">
      <CiHome className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
      <IoBulbOutline className="text-4xl" />
      <FiTag className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
    </div>
  )
}

export default MainMenuBar;
