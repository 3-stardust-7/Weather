import React from "react";

const Footer = () => {
  return (
    <footer className="bg-rose-700 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} WeatherApp. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Powered by{" "}
          <a
            href="https://openweathermap.org/"
            className="underline hover:text-gray-200"
          >
            OpenWeatherMap
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
