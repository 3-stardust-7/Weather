import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-lime-500 p-4 h-20 text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">WeatherApp</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
