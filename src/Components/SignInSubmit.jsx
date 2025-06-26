import React from 'react'
import { Link } from 'react-router-dom';
 import { motion } from 'framer-motion';


export default function SignInSubmit() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 relative overflow-hidden">
      
            {/* Moving Animated Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden animate-pulseBackground">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5 mix-blend-overlay" />
            </div>
      
            {/* 3D Main Card */}
            <motion.div
              className="relative bg-white/20 dark:bg-gray-900/20 rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-8 backdrop-blur-2xl border border-white/10 transition-transform duration-500 hover:shadow-3xl z-10"
              initial={{ opacity: 0, scale: 0.8, rotateX: -10, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Title */}
              <motion.h1
                className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-wide uppercase font-serif drop-shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                SignIn Successful
              </motion.h1>
      
      
              {/* Description */}
              <motion.p
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Your Sign In form has been successfully submitted to the <span className="text-cyan-400 font-semibold">Photo Gallery</span>.
              </motion.p>
      
              {/* Button */}
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all"
                >
                  Go Back To Home
                </motion.button>
              </Link>
            </motion.div>
      
            {/* Custom keyframes for floating background */}
            <style>{`
              @keyframes pulseBackground {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              .animate-pulseBackground {
                background-size: 400% 400%;
                animation: pulseBackground 20s ease infinite;
              }
            `}</style>
          </div>
  )
}
