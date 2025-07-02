import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl text-center">
        {/* Title with animated border */}
        <div className="relative inline-block group px-6 py-4 rounded-xl mb-3">
          <h1 className="text-4xl md:text-5xl font-bold text-black z-10 relative">
            About This App
          </h1>

          {/* Top Border */}
          <span className="absolute top-0 left-1/2 w-0 h-[2px] bg-red-500 rounded-full transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>

          {/* Bottom Border */}
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-500 rounded-full transition-all duration-300 group-hover:left-0 group-hover:w-full delay-100"></span>

          {/* Left Border */}
          <span className="absolute top-1/2 left-0 w-[2px] h-0 bg-red-500 rounded-full transition-all duration-300 group-hover:top-0 group-hover:h-full delay-200"></span>

          {/* Right Border */}
          <span className="absolute top-1/2 right-0 w-[2px] h-0 bg-red-500 rounded-full transition-all duration-300 group-hover:top-0 group-hover:h-full delay-300"></span>
        </div>


        {/* Paragraphs */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          The TODO App is built to help you stay organized and productive.
          Whether it's your daily tasks or life goals — this app makes it simple
          to plan, track, and accomplish everything with clarity and ease.
        </p>
        <p className="text-gray-600 text-base">
          Built with ❤️ by{" "}
          <span className="font-semibold text-red-500">Muditya Lodhi</span> in
          2025.
        </p>
      </div>
    </div>
  );
};

export default About;
