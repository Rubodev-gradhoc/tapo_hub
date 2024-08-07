import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/pngegg.png"; // Asegúrate de que la ruta al logo sea correcta

const Header: React.FC = () => {
  const navigate = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate.push("/login");
  };

  return (
    <header className="bg-white shadow-md w-full py-4 px-6 fixed top-0 left-0 z-10 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-3" />
        <h1 className="text-xl font-bold text-gray-800">Smart Plugs</h1>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
