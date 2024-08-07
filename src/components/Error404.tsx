import React from "react";
import errorImage from "../assets/Error404.jpg";

const Error404: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <img src={errorImage} alt="Error 404" className="w-100 h-100" />
    </div>
  );
};

export default Error404;
