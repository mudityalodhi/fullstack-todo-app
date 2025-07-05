import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const truncateText = (text, maxLength = 120) =>
  text && text.length > maxLength ? text.slice(0, maxLength) + "…" : text || "";

const TodoCards = ({ todos, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 min-h-[150px]">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {todos.map((todo, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition relative group"
            >
              <h3 className="font-semibold text-lg mb-1">{todo.title}</h3>
              {todo.body && (
                <p className="text-sm text-gray-600">
                  {truncateText(todo.body)}
                </p>
              )}

              {/* action icons */}
              <div
                className="absolute top-2 right-2 flex gap-2
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-opacity"
              >
                <button
                  onClick={() => onEdit(idx)}
                  className="text-blue-500 hover:text-blue-700"
                  title="Edit"
                >
                  <FiEdit size={18} />
                </button>
                <button
                  onClick={() => onDelete(idx)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoCards;
