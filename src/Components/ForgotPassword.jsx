// src/components/ForgotPassword.js
import React, { useState } from "react";
import { app } from "../Firebase.js"; // Corrected import
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from 'firebase/auth';


const ForgotPassword = () => {
   const auth = getAuth(app);
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent! Please check your inbox.");
      setEmail(""); // Clear input
    } catch (err) {
      setError(`❌ ${err.message}`);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000); // clear after 5 sec
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      <div className=" p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto backdrop-blur-md bg-opacity-80 text-white bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-white bg-gray-800  ">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white p-3 rounded-lg transition font-semibold`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>

        {message && (
          <p className="text-green-600 mt-4 text-center font-medium">{message}</p>
        )}
        {error && (
          <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
