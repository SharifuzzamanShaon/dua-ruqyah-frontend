"use client";
import Categories from "@/components/Categories";
import DisplayItems from "@/components/DisplayItems";
import MainMenuBar from "@/components/MainMenuBar";
import Settings from "@/components/Settings";
import Topbar from "@/components/Topbar";
import { useState } from "react";

export default function Page() {
  const [duas, setDuas] = useState([]);
  const [navigate, setNavigate] = useState(0);

  return (
    <div className="flex flex-col w-full h-screen pb-4">
      {/* Topbar */}
      <div className="bg-gray-100 shadow-md">
        <Topbar />
      </div>

      {/* Main Layout */}
      <div className="flex flex-grow w-full overflow-hidden">
        <div className="grid grid-cols-12 w-full h-full gap-4 px-4">
          {/* MainMenuBar */}
          <div className="col-span-12 sm:col-span-2 lg:col-span-1 bg-gray-100 flex justify-center items-start p-2 sm:p-4">
            <MainMenuBar />
          </div>

          {/* Categories */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-3 bg-white p-2 sm:p-4">
            <h2 className="text-lg font-bold mb-4">DUA PAGE</h2>
            <Categories duas={duas} setDuas={setDuas} setNavigate={setNavigate} />
          </div>

          {/* DisplayItems */}
          <div className="col-span-12 sm:col-span-8 lg:col-span-6 bg-white p-2 sm:p-4 overflow-auto">
            <DisplayItems duas={duas} navigate={navigate} />
          </div>

          {/* Settings */}
          <div className="col-span-12 sm:col-span-3 lg:col-span-2 bg-gray-100 px-2 sm:px-4 py-4">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
