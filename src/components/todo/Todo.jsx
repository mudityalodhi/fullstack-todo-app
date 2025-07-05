import React, { useState } from "react";
import TodoCards from "./TodoCards";

const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [todos, setTodos] = useState([]);
  const [showBody, setShowBody] = useState(false);
  const [editingIdx, setEditingIdx] = useState(null); // null ⇒ add‑mode

  /* input change */
  const handleChange = (e) =>
    setInputs((p) => ({ ...p, [e.target.name]: e.target.value }));

  /* add new OR save edit */
  const saveTodo = () => {
    if (!inputs.title.trim()) return;

    if (editingIdx === null) {
      setTodos((p) => [...p, inputs]); // add
    } else {
      setTodos((p) =>
        p.map((t, i) => (i === editingIdx ? inputs : t)) // update
      );
      setEditingIdx(null);
    }

    setInputs({ title: "", body: "" });
    setShowBody(false);
  };

  /* edit click */
  const editTodo = (idx) => {
    setInputs(todos[idx]);
    setEditingIdx(idx);
    setShowBody(true);
  };

  /* delete click */
  const deleteTodo = (idx) =>
    setTodos((p) => p.filter((_, i) => i !== idx));

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Today's Tasks</h2>

        {/* input section */}
        <div className="flex flex-col gap-3 mb-6">
          <input
            name="title"
            value={inputs.title}
            onFocus={() => setShowBody(true)}
            onChange={handleChange}
            placeholder="Enter task title..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
          />

          {showBody && (
            <textarea
              name="body"
              value={inputs.body}
              onChange={handleChange}
              placeholder="Add details / description..."
              className="px-4 py-2 rounded-lg border border-gray-300 h-24 resize-none focus:ring-2 focus:ring-green-400 outline-none"
            />
          )}

          <button
            onClick={saveTodo}
            className="self-end bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            {editingIdx === null ? "Add" : "Save"}
          </button>
        </div>

        {/* list */}
        <TodoCards todos={todos} onEdit={editTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
