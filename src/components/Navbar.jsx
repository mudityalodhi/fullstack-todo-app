import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FcTodoList size={28} />
          <span className="tracking-wide">TODO</span>
        </Link>

        {/* -------- Desktop Menu -------- */}
        <ul className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/todo" className="hover:text-blue-500">
              Todo
            </Link>
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/sign-up">
                  <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded-lg hover:bg-blue-50">
                    Sign In
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-sm text-gray-600">Hi, {user?.username}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600"
                >
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>

        {/* -------- Hamburger (mobile) -------- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* -------- Mobile Dropdown -------- */}
      <div
        className={`md:hidden px-6 overflow-hidden transition-all duration-300 origin-top ${
          menuOpen
            ? "scale-y-100 opacity-100 max-h-screen"
            : "scale-y-0 opacity-0 max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/todo" onClick={() => setMenuOpen(false)}>
              Todo
            </Link>
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/sign-up" onClick={() => setMenuOpen(false)}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50">
                    Sign In
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-sm text-gray-600">Hi, {user?.username}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
