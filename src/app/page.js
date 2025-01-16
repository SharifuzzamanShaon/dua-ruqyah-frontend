"use client"
import Categories from "@/components/Categories";
import DisplayItems from "@/components/DisplayItems";
import MainMenuBar from "@/components/MainMenuBar";
import Settings from "@/components/Settings";
import Topbar from "@/components/Topbar";
import { useState } from "react";

export default function Home() {
  const [duas, setDuas] = useState([])
  const [navigate, setNavigate] = useState(0)
  return (
    <>
      <Topbar />
      <div className="flex w-full h-screen overflow-hidden">
        <div className="grid grid-cols-12 w-full h-full">
          {/* MainMenuBar */}
          <div className="col-span-12 sm:col-span-1 bg-gray-100 flex justify-center">
            <MainMenuBar />
          </div>
          
          {/* Categories */}
          <div className="col-span-12 sm:col-span-3 overflow-auto p-4 bg-white">
            <h2 className="text-lg font-bold mb-2">DUA PAGE</h2>
            <Categories duas={duas} setDuas={setDuas} setNavigate={setNavigate}/>
          </div>
          
          {/* DisplayItems */}
          <div className="col-span-12 sm:col-span-6 overflow-auto p-1 bg-white">
            <DisplayItems duas={duas}/>
          </div>
          
          {/* Settings */}
          <div className="col-span-12 sm:col-span-2 bg-gray-100 px-2">
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
}
