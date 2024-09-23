import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFE3D3]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#FF9F39]">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-[#FFB53A] to-[#FF9C39] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:scale-105 transform transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
