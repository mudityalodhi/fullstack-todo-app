import React from "react";

const Todo = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Today's Tasks
        </h2>

        {/* Input + Add button */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition">
            Add
          </button>
        </div>

        {/* Tasks Display Box */}
        <div className="bg-gray-100 rounded-lg p-4 min-h-[150px] text-gray-700">
          {/* Later: map your todos here */}
          <p className="text-center text-gray-500">No tasks added yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
