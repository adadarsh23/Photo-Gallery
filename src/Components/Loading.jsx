import React from 'react';
import gif from '../assets/Animation.gif';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800">
      <img
        src={gif}
        alt="Loading..."
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-spin-slow"
      />
      <h1 className="mt-1 text-center text-base sm:text-lg md:text-xl font-semibold text-gray-600">
        Loading image...
      </h1>
    </div>
  );
}

