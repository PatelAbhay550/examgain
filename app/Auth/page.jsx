"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen pt-28 pb-8 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {/* Form */}
        <form>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={toggleForm}
              className="text-blue-500 font-semibold cursor-pointer hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
