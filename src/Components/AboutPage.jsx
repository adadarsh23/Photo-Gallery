import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import back1 from '../assets/back1.jpg';
import back2 from '../assets/back2.jpg';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 sm:p-8 dark:bg-gray-900"
      style={{ backgroundImage: `url(${back1})` }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className=" bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-4xl w-full text-center text-gray-800 dark:bg-gray-800 dark:text-white"
      >
         <h1 className="text-4xl text-center text-neutral-50 font-extrabold mb-6 tracking-wide drop-shadow-lg uppercase font-serif underline decoration-4 underline-offset-8 transform transition-all duration-300 hover:scale-110">
            About us of Photo Gallery
          </h1>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          Welcome to our Photo Gallery! We capture beautiful moments and showcase stunning visuals from around the world.
        </p>

        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={back2}
            alt="Gallery"
            className="w-full h-64 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          <div className="p-4 bg-white bg-opacity-70 rounded-xl shadow-md text-gray-800 dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-sm sm:text-base">To capture and share the beauty of the world through high-quality photography.</p>
          </div>
          <div className="p-4 bg-white bg-opacity-70 rounded-xl shadow-md text-gray-800 dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-sm sm:text-base">Inspiring people with stunning visuals and unforgettable moments.</p>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back Home
        </button>
      </motion.div>
    </div>
  );
};

export default AboutPage;
