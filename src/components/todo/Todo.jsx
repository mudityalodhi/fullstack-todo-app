import React, { useState } from "react";
import TodoCards from "./TodoCards";
import Update from "./Update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [todos, setTodos]   = useState([]);
  const [showBody, setShowBody] = useState(false);
  const [editingIdx, setEditingIdx] = useState(null); // null ⇒ add‑mode
  const [modalOpen, setModalOpen]   = useState(false);

  /*---------------- handlers ----------------*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((p) => ({ ...p, [name]: value }));
  };

  const saveTodo = () => {
    if (!inputs.title.trim()) {
      toast.warn("Title is required");
      return;
    }

    if (editingIdx === null) {
      setTodos((p) => [...p, inputs]);         // add
      toast.success("Task added!");
      toast.info("Note: This task isn't saved permanently. Sign Up to keep your tasks!");
    } else {
      // (should never reach here in normal flow, updates are via modal)
      setTodos((p) =>
        p.map((t, i) => (i === editingIdx ? inputs : t))
      );
      toast.info("Task updated!");
      setEditingIdx(null);
    }

    setInputs({ title: "", body: "" });
    setShowBody(false);
  };

  const editTodo = (idx) => {
    setEditingIdx(idx);
    setModalOpen(true);
  };

  const handleModalSave = (data) => {
    setTodos((p) => p.map((t, i) => (i === editingIdx ? data : t)));
    toast.info("Task updated!");
    setEditingIdx(null);
    setModalOpen(false);
  };

  const deleteTodo = (idx) => {
    setTodos((p) => p.filter((_, i) => i !== idx));
    toast.error("Task deleted!");
  };

  /*---------------- UI ----------------*/
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
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          {showBody && (
            <textarea
              name="body"
              value={inputs.body}
              onChange={handleChange}
              placeholder="Add details / description..."
              className="px-4 py-2 h-24 border rounded-lg resize-none focus:ring-2 focus:ring-green-400 outline-none"
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

      {/* Toasts */}
      <ToastContainer position="top-center" autoClose={2000} />

      {/* Modal */}
      {modalOpen && (
        <Update
          initialData={todos[editingIdx]}
          onSave={handleModalSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Todo;
