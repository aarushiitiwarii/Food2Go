import React from "react";
import { Link } from "react-router-dom";

const DonorRequestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-green-600">Food2Go</h1>
        <div className="space-x-6">
          <Link
            to="/donor-dashboard"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Logout
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          Donation Request Details
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Food & NGO Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              NGO / Beneficiary Details
            </h3>
            <p className="text-gray-600">
              <strong>Name:</strong> Helping Hands Foundation
            </p>
            <p className="text-gray-600">
              <strong>Contact:</strong> +91 9876543210
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> 45, MG Road, Pune, Maharashtra
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Donation Details
            </h3>
            <p className="text-gray-600">
              <strong>Food Item:</strong> Cooked Rice & Dal
            </p>
            <p className="text-gray-600">
              <strong>Quantity:</strong> 20 kg
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Pickup Date:</strong> 31 Oct 2025
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Payment Information
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Payment Mode:</strong> Online
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Proceed to Payment
            </button>
          </div>

          {/* Right - Map & Delivery Partner */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Delivery Partner
            </h3>
            <p className="text-gray-600">
              <strong>Name:</strong> Ramesh Kumar
            </p>
            <p className="text-gray-600">
              <strong>Contact:</strong> +91 9123456789
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Vehicle No:</strong> MH12 AB 4321
            </p>

            <div className="w-full h-64 border rounded-lg overflow-hidden">
              <iframe
                title="Delivery Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Pune,Maharashtra"
              ></iframe>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>
                <strong>Status:</strong> Rider is on the way to pick up your
                donation.
              </p>
              <p>
                <strong>ETA:</strong> 15 minutes
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/donor-dashboard"
            className="text-green-600 hover:underline font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonorRequestPage;
