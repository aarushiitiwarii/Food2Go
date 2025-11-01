import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 flex flex-col items-center justify-center font-poppins">
      <h1 className="text-5xl font-bold text-green-700 mb-6 tracking-wide drop-shadow-sm">
        Welcome to Food2Go
      </h1>
      <p className="text-gray-600 text-lg mb-12 text-center max-w-lg leading-relaxed">
        Bridging the gap between those who can give and those who need.  
        Join us in reducing food waste and supporting local communities.
      </p>

      <div className="flex gap-8">
        <Link
          to="/login-donor"
          className="px-10 py-4 bg-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          I’m a Donor
        </Link>
        <Link
          to="/login-beneficiary"
          className="px-10 py-4 border-2 border-green-600 text-green-700 font-semibold rounded-2xl shadow-sm hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          I’m a Beneficiary
        </Link>
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Food2Go | Together, we make a difference.
      </footer>
    </div>
  );
};

export default HomePage;
