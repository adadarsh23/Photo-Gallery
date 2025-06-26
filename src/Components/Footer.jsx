import React from 'react'
import logo from '../assets/Adarsh.png'
import { Link } from 'react-router-dom';
//  import { motion } from 'framer-motion'; // Import motion for animation

export default function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-800 m-4 border-t-2 border-gray-200 dark:border-gray-700 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-8 rounded-2xl" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Photo Gallery</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/licenses" className="hover:underline me-4 md:me-6">Licensing</Link>
              </li>
              <li>
                <Link to="/userForm" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">Ad Adarsh</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
