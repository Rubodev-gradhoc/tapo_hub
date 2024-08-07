import React from "react";
import { FiPower, FiClock } from "react-icons/fi";

const DeviceCard = ({ device, onToggle, onOptimize }: any) => {
  const handleToggle = (state) => {
    onToggle(device.ip, state);
  };

  const handleOptimize = () => {
    onOptimize(device.ip);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm m-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">
          {device.friendly_name}
        </h3>
        <FiPower className="text-3xl text-blue-500" />
      </div>
      <p className="text-md text-gray-700 mb-2">{device.model}</p>
      <p className="text-sm text-gray-500 mb-4">{device.ip}</p>
      <div className="flex space-x-4">
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          onClick={() => handleToggle("on")}
        >
          Encender
        </button>
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          onClick={() => handleToggle("off")}
        >
          Apagar
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2">
        <FiClock className="text-2xl text-blue-500" />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          onClick={handleOptimize}
        >
          Optimizar
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Este botón encenderá el enchufe en las horas más baratas del día.
      </p>
    </div>
  );
};

export default DeviceCard;
