import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex space-x-2 justify-center">
      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
    </div>
  );
};

export default Spinner;
