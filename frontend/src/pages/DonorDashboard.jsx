import React, { useEffect, useState } from "react";

export default function DonorDashboard() {
  const [ngos, setNgos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // 🟢 Your API Gateway URL
  const API_URL = "https://vrfcrbi6w3.execute-api.us-east-1.amazonaws.com/dev";

useEffect(() => {
  async function fetchNgos() {
    try {
      const res = await fetch(`${API_URL}/ngos`);
      if (!res.ok) throw new Error("Failed to fetch NGOs");

      // ✅ Get parsed JSON directly
      const response = await res.json();

      // 🟢 Case 1: If Lambda proxy integration wraps in `body`
      const data = response.body ? JSON.parse(response.body) : response;

      setNgos(data);
    } catch (err) {
      console.error("Error fetching NGOs:", err);
    } finally {
      setLoading(false);
    }
  }
  fetchNgos();
}, []);


  const filteredNgos = ngos.filter((ngo) =>
    (ngo.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="bg-green-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Food2Go</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">My Donations</a>
          <a href="#" className="hover:text-gray-200">Profile</a>
          <a href="#" className="hover:text-gray-200">Logout</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-green-700">Available NGOs</h2>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search NGOs..."
            className="border border-gray-300 rounded-full px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading NGOs...</p>
        ) : filteredNgos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNgos.map((ngo, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
              >
                <img
                  src={ngo.imageURL || "https://source.unsplash.com/400x250/?ngo,food"}
                  alt={ngo.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-700">{ngo.name}</h3>
                  <p className="text-gray-500">{ngo.location || ngo.City}</p>
                  <p className="mt-2 text-gray-700 text-sm">
                    Contact: {ngo.contact || "Not provided"}
                  </p>
                  <button className="mt-4 bg-green-600 text-white w-full py-2 rounded-full hover:bg-green-700 transition">
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No NGOs found.</p>
        )}
      </div>
    </div>
  );
}
