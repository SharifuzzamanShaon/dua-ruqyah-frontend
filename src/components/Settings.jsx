import React from "react";

const Settings = () => {
  return (
    <>
      <div className="w-full mx-auto bg-gray-50 rounded-xl shadow-lg ">
        <h1 className="text-center text-md font-semibold mb-6 text-black">Settings</h1>
        <div className="space-y-4">
          {/* Language Settings */}
          <div className="bg-white text-black rounded-lg shadow-sm p-4 flex items-center">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full">
              <i className="fas fa-language text-green-600"></i>
            </div>
            <div className="flex-1 ml-4">
              <h2 className="text-sm font-semibold text-green-600 text-black">
                Language Settings
              </h2>
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 bg-green-500 text-black rounded-md text-sm text-black">
                  English
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-black">
                  বাংলা
                </button>
              </div>
            </div>
          </div>

          {/* General Settings */}
          <div className="bg-gray-100 rounded-lg shadow-sm p-4 flex items-center">
            <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full">
              <i className="fas fa-cog text-gray-500"></i>
            </div>
            <h2 className="ml-4 text-sm font-medium text-black">General Settings</h2>
          </div>

          {/* Font Settings */}
          <div className="bg-gray-100 rounded-lg shadow-sm p-4 flex items-center">
            <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full">
              <i className="fas fa-font text-gray-500"></i>
            </div>
            <h2 className="ml-4 text-sm font-medium text-black">Font Settings</h2>
          </div>

          {/* Appearance Settings */}
          <div className="bg-gray-100 rounded-lg shadow-sm p-4 flex items-center text-black">
            <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full">
              <i className="fas fa-palette text-black-500"></i>
            </div>
            <h2 className="ml-4 text-sm font-medium">Appearance Settings</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
