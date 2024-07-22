import React from "react";
import { FiPower } from "react-icons/fi";

const DeviceCard = ({ device, onToggle }) => {
  const handleToggle = (state) => {
    onToggle(device.ip, state);
  };

  return (
    <div className="p-4 border rounded shadow-lg w-80 m-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{device.type}</h3>
        <FiPower className="text-2xl" />
      </div>
      <p className="text-sm text-gray-500">{device.ip}</p>
      <div className="mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => handleToggle("on")}
        >
          Encender
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleToggle("off")}
        >
          Apagar
        </button>
      </div>
    </div>
  );
};

export default DeviceCard;
