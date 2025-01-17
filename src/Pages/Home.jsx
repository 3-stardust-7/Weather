import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-emerald-700">
        <div className="text-center p-10">
          <h1 className="text-3xl font-bold">Home Page</h1>
          <p>Welcome to the Weather App!</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-sm p-10 bg-white rounded-lg shadow-md">
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
      </div>
      <Footer/>
    </>
  );
};

export default Home;
