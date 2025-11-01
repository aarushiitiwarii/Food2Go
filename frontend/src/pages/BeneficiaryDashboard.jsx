import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Utensils, Package } from "lucide-react";

const BeneficiaryDashboard = () => {
  const restaurants = [
    {
      id: 1,
      name: "Green Bowl Caterers",
      location: "Sector 21, Noida",
      foodType: "Mixed Veg Meal",
      quantity: "15 kg",
    },
    {
      id: 2,
      name: "SpiceHub Restaurant",
      location: "Connaught Place, Delhi",
      foodType: "Paneer & Rice Combo",
      quantity: "10 kg",
    },
    {
      id: 3,
      name: "Food Fiesta Party",
      location: "Rajouri Garden, Delhi",
      foodType: "South Indian Buffet",
      quantity: "25 kg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Food2Go</h1>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/donate-food" className="text-gray-700 hover:text-green-600">
            Donate
          </Link>
          <Link to="/login-beneficiary" className="text-gray-700 hover:text-green-600">
            Logout
          </Link>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="flex justify-center mt-8 px-4">
        <input
          type="text"
          placeholder="Search for restaurants or caterers..."
          className="w-full max-w-2xl border border-gray-300 rounded-full py-2 px-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Available Food Section */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Available Food Donations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurants.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <Utensils className="text-green-500" />
              </div>
              <div className="text-sm text-gray-600 flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-green-500" /> {item.location}
              </div>
              <div className="text-sm flex items-center text-gray-700 mb-2">
                <Package className="w-4 h-4 mr-2 text-green-500" /> {item.foodType}
              </div>
              <div className="text-sm text-gray-700 mb-4">Quantity: {item.quantity}</div>

              <button className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition">
                Request Food
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryDashboard;
