// Components/NoInternet.jsx
import React from 'react';

export default function NoInternet() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-center px-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">No Internet Connection</h1>
        <p className="text-gray-300 text-lg mb-6">Please check your network settings and try again.</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/10437/10437263.png"
          alt="No Internet"
          className="w-40 mx-auto opacity-70"
        />
      </div>
    </div>
  );
}
