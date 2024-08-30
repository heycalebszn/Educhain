// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Wallet, Book, DollarSign, Database, TrendingUp } from "lucide-react";
import logo from "../assets/svg/logo.svg"; // Import the SVG logo

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: <Home /> },
    { to: "/wallet", label: "Wallet", icon: <Wallet /> },
    { to: "/scholarship", label: "Scholarship", icon: <Book /> },
    { to: "/lending", label: "Lending", icon: <DollarSign /> },
    { to: "/staking", label: "Staking", icon: <Database /> },
    { to: "/trading", label: "Trading", icon: <TrendingUp /> },
  ];

  return (
    <div className="w-[150px] h-full bg-white shadow-lg flex flex-col p-[10px]">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="w-15 h-auto" />
      </div>
      <ul className="space-y-[5px]">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className={`flex items-center space-x-[3px] p-3 rounded-md font-semibold ${
                location.pathname === item.to
                  ? "flex items-center text-green-500"
                  : "flex items-center text-gray-500 hover:text-green-900"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
