import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Input change handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.warn("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:1000/api/users/login", {
        email,
        password,
      });

      toast.success("Login successful!");

      // optional: store user token or info
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("user", JSON.stringify(res.data.user));

      setTimeout(() => {
        navigate("/todo"); // redirect after login
      }, 1500);
    } catch (err) {
      console.log(err);
      toast.error(
        err.response?.data?.message || "Login failed. Try again later."
      );
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome Back!
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/sign-up"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default SignIn;
