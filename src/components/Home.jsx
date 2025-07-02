import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen  bg-white flex flex-col justify-center items-center text-center px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
        Organize your <br />
        work and life, finally.
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Become focused, organized, and calm with <br />
        Todo App — The world's #1 task manager.
      </p>

      {/* Button */}
      <Link to="/todo">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-md hover:bg-red-600 transition duration-300">
          Make Todo List
        </button>
      </Link>
    </div>
  );
};

export default Home;
