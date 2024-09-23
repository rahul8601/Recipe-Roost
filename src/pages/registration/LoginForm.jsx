import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./FirebaseConfig";

import { toast } from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("Jonas@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    try {
      setLoading(true); // Start loading

      const user = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      if (user) {
        setEmail("");
        setPassword("");
        navigate(`/`);
      }
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E4D2BA]">
      <div className="bg-[#EDC196] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Recipe Roost
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border bg-[#f0cba7] placeholder-gray-400 border-[#f3b577] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9C39] focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border placeholder-gray-400  bg-[#f0cba7] border-[#f3b577] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9C39] focus:border-transparent"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full font-bold text-gray-700 py-2 px-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#FF9C39] bg-gradient-to-r from-[#FFB93A] to-[#FF9B39] hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Sign up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to={"/"} className="text-[#FF9D39] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
