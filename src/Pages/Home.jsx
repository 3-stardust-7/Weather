import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";

const Home = () => {
     const [location, setLocation] = useState("");
     const [weather, setWeather] = useState(null);

     const handleSearch = async (event) => {
       event.preventDefault();
       // Here, you can make an API call to get the weather information (e.g., OpenWeather API).
       // For now, we are using a mock response.
       setWeather({
         location: location,
         temperature: 25,
         description: "Clear sky",
       });
     };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-emerald-700">
        <div className="text-center p-10">
          <h1 className="text-3xl font-bold">Home Page</h1>
          <p>Welcome to the Weather App!</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-sm mb-10 p-10 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">
              Hello, Tailwind CSS!
            </h1>
            <p className="mt-4 text-gray-600">
              This is a simple card component to test Tailwind CSS in your
              project.
            </p>
            <button className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">
              Click Me
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-b from-pink-500 to-indigo-500 min-h-screen flex flex-col items-center justify-center p-5">
          <h1 className="text-4xl font-bold text-black mb-4">Weather App</h1>

          {/* Search Section */}
          <form onSubmit={handleSearch} className="flex mb-6">
            <input
              type="text"
              placeholder="Enter city name"
              className="p-2 rounded-l-md text-black"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md"
            >
              Search
            </button>
          </form>

          {/* Weather Info Card */}
          {weather && (
            <div className="bg-white p-5 rounded-xl shadow-lg max-w-sm">
              <h2 className="text-2xl font-semibold text-center">
                {weather.location}
              </h2>
              <p className="text-xl text-center mt-2">
                {weather.temperature}°C
              </p>
              <p className="text-center text-gray-600">{weather.description}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
