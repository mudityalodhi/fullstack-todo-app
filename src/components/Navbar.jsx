import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 px-6 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600 cursor-pointer"
        >
          <FcTodoList size={28} />
          <span className="tracking-wide">TODO</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/todo" className="hover:text-blue-500 transition">
              Todo
            </Link>
          </li>

          {/* Routed Buttons */}
          <li>
            <Link to="/sign-up">
              <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition shadow-sm">
                Sign Up
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded-lg hover:bg-blue-50 transition">
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <button className="bg-red-400 text-white px-3 py-1.5 rounded-lg hover:bg-red-500 transition">
                Log Out
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-700 focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden px-6 overflow-hidden transform transition-all duration-300 ease-in-out origin-top ${
          menuOpen
            ? "scale-y-100 opacity-100 max-h-screen"
            : "scale-y-0 opacity-0 max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium py-4">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/todo"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Todo
            </Link>
          </li>
          <li>
            <Link to="/sign-up" onClick={() => setMenuOpen(false)}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition shadow-sm">
                Sign Up
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <Link to="/logout" onClick={() => setMenuOpen(false)}>
              <button className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">
                Log Out
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
