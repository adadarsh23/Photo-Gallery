import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/magni.jpg';
import Tilt from "react-parallax-tilt";

export function ErrorSection7() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={logo} 
          alt="404"
          className="h-full w-full object-cover animate-pulse"
        />
      </div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-8">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.05}
        >
          <motion.h1
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-9xl text-neutral-50 mb-6 tracking-wide drop-shadow-lg uppercase font-serif underline decoration-4 underline-offset-8 font-extrabold"
          >
            404
          </motion.h1>
        </Tilt>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-2xl text-neutral-50 font-extrabold tracking-wide drop-shadow-lg uppercase font-serif underline decoration-4 underline-offset-8"
        >
          Sorry, the page you are looking for doesn't exist.
        </motion.p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
        >
          Go Back Home
        </motion.a>
      </div>
    </div>
  );
}

export default ErrorSection7;
