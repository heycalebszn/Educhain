import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import logo from "../assets/svg/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm border-b border-gray-200">
      {/* Logo and Search */}
      <div className="flex items-center space-x-6">

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search market"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2 text-gray-500" />
        </div>

        {/* Overview */}
        <h2 className="text-xl font-semibold text-gray-700">Overview</h2>
      </div>

      {/* Navigation Links and Icons */}
      <div className="flex items-center space-x-6">
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <div className="flex items-center justify-center bg-gray-100 text-gray-600 rounded px-3 py-1 cursor-pointer">
            Address WPME...SZJ4
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
