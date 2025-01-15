import React from 'react'
import { CiHome } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";

const MainMenuBar = () => {
  return (
    <div className="text-black flex flex-col items-center justify-center mt-5 space-y-4">
      <CiHome className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
      <TbCategoryPlus className="text-4xl" />
    </div>
  )
}

export default MainMenuBar;
