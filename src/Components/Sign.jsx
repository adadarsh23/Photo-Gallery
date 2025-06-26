import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from "../Firebase.js";
import { OAuthProvider } from 'firebase/auth';

export default function Sign() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpErrors, setSignUpErrors] = useState('');
  const auth = getAuth(app);


  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/signInSubmit');
    } catch (err) {
      setSignUpErrors('Google sign-in failed. Please try again.');
      console.log(err);
    }
  };
  const handleAppleSignIn = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      await signInWithPopup(auth, provider);
      navigate('/signInSubmit');
    } catch (err) {
      setSignUpErrors('Apple sign-in failed. Please try again.');
      console.log(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/signInSubmit');
      console.log("Sign up to Photo Gallery");
    } catch (err) {
      let message = '';
      if (err.code === 'auth/email-already-in-use') {
        message = 'Email already in use. Please try another email.';
      } else if (err.code === 'auth/invalid-email') {
        message = 'Invalid email address.';
      } else if (err.code === 'auth/weak-password') {
        message = 'Password should be at least 6 characters.';
      } else {
        message = 'Something went wrong. Please try again later.';
      }
      setSignUpErrors(message);
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/3px-tile.png')] opacity-20 animate-backgroundMove"></div>
      </div>
      {/* Animated Card */}
      <motion.div
        className="relative py-8 px-6 sm:max-w-sm w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl backdrop-blur-md bg-opacity-80 z-10"
        initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03, rotateY: 3 }}
      >
        <p className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-4">Sign Up</p>
        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs font-semibold text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
              className="text-white border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:scale-105 hover:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-xs font-semibold text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="text-white border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:scale-105 hover:shadow-lg"
            />
            <div className="text-right text-xs mt-1">
              <Link to="/forgot-password" className="text-blue-400 hover:underline">Forgot Password?</Link>
            </div>
          </div>
          {signUpErrors && (
            <div className="text-red-500 text-xs mb-2">{signUpErrors}</div>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-8 bg-blue-600 hover:bg-blue-700 transition-all ease-in-out duration-300 text-white w-full text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            type="submit"
          >
            Sign Up
          </motion.button>
        </form>
        {/* Social Login Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="border-t border-gray-300 flex-grow mr-3"></div>
          <span className="text-gray-400 text-xs">Or Sign In with</span>
          <div className="border-t border-gray-300 flex-grow ml-3"></div>
        </div>
        {/* Social Login Icons */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-700 transition"
            onClick={handleGoogleSignIn}
          >
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="h-6 w-6" />
          </button>
          {/* You can add handlers for Twitter/GitHub if you implement them */}
          <button className="p-2 rounded-full hover:bg-gray-700 transition" type="button" onClick={handleAppleSignIn}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/mac-os.png" alt="Apple Logo" className="h-6 w-6" />
          </button>

        </div>
        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?
          <Link to="/login" className="text-blue-400 hover:underline ml-1">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
}