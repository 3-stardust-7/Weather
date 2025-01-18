import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-emerald-700 text-center p-4 ">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>This app shows weather information using a weather API.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
