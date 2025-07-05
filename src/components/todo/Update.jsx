import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

const Update = ({ initialData, onSave, onClose }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => setData(initialData), [initialData]);

  const handleChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.title.trim()) return;
    onSave(data);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md sm:max-w-lg rounded-xl shadow-xl p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FiX size={22} />
        </button>

        <h3 className="text-xl font-semibold mb-4 text-center">Update Task</h3>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Title"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
          <textarea
            name="body"
            value={data.body}
            onChange={handleChange}
            placeholder="Description"
            className="px-4 py-2 h-24 border rounded-lg resize-none focus:ring-2 focus:ring-green-400 outline-none"
          />
          <button
            type="submit"
            className="self-end bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
