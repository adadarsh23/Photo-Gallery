import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from "../Firebase";
import { useNavigate } from 'react-router-dom';
 import { motion } from 'framer-motion'; // Animation library

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/loginsubmit');
      console.log("Login to Photo Gallery");
    } catch (err) {
      let message = '';
      if (err.code === 'auth/invalid-credential') {
        message = 'Invalid email or password. Please try again.';
      } else {
        message = 'Something went wrong. Please try again later.';
      }
      setLoginErrors(message);
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
      {/* 3D textured animated background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/3px-tile.png')] opacity-20 animate-backgroundMove"></div>
      </div>

      {/* Login Form with Animation */}
      <motion.div 
        className="relative py-3 sm:max-w-xs sm:mx-auto z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <form
          className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-2xl shadow-2xl backdrop-blur-md bg-opacity-80"
          onSubmit={handlelogin}
        >
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <motion.p 
                className="m-0 text-[18px] font-bold dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Welcome Back
              </motion.p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Get started with our app, just log in and enjoy the experience.
              </span>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <label className="font-semibold text-xs text-gray-400">Email</label>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-white border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 transition-all duration-300 focus:ring-2 focus:ring-blue-500 transform hover:scale-105 hover:shadow-lg"
                required
                type="email"
              />
            </div>

            <div className="w-full flex flex-col gap-2 relative">
              <label className="font-semibold text-xs text-gray-400">Password</label>
              <input
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-white border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 transition-all duration-300 focus:ring-2 focus:ring-blue-500 transform hover:scale-105 hover:shadow-lg"
                type={passwordVisible ? 'text' : 'password'}
                required
              />
              {/* Eye icon toggle */}
              <button
                type="button"
                className="absolute top-2 right-3 text-gray-400 hover:text-blue-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>

            {loginErrors && (
              <div className="text-red-500 text-xs mb-2">{loginErrors}</div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-8 bg-blue-600 hover:bg-blue-700 transition-all ease-in-out duration-300 text-white w-full text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg cursor-pointer select-none transform hover:scale-105 hover:shadow-lg"
              type="submit"
            >
              Login
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}