// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function UserForm() {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/userSubmit');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-8 px-4 md:px-10 text-white flex items-center justify-center perspective-1000 pb-20">
//       <div className="w-full max-w-2xl transform transition-transform duration-700 hover:rotate-x-2 hover:rotate-y-3 hover:scale-105">
//         <h1 className="text-4xl text-center font-extrabold mb-10 tracking-wide drop-shadow-lg uppercase font-serif underline decoration-4 underline-offset-8 transition-transform duration-500 hover:scale-110 hover:rotate-1">
//           User Form Of Photo Gallery
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-blue-500/50 transform hover:-rotate-1 hover:scale-105"
//         >
//           {/* Email */}
//           <div className="relative z-0 w-full mb-8 group">
//             <input
//               type="email"
//               name="floating_email"
//               id="floating_email"
//               className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="floating_email"
//               className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
//             >
//               Email address
//             </label>
//           </div>

//           {/* Password */}
//           <div className="relative z-0 w-full mb-8 group">
//             <input
//               type="password"
//               name="floating_password"
//               id="floating_password"
//               className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="floating_password"
//               className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
//             >
//               Password
//             </label>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative z-0 w-full mb-8 group">
//             <input
//               type="password"
//               name="repeat_password"
//               id="floating_repeat_password"
//               className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="floating_repeat_password"
//               className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
//             >
//               Confirm password
//             </label>
//           </div>

//           {/* First & Last Name */}
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-8 group">
//               <input
//                 type="text"
//                 name="floating_first_name"
//                 id="floating_first_name"
//                 className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="floating_first_name"
//                 className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
//               >
//                 First name
//               </label>
//             </div>

//             <div className="relative z-0 w-full mb-8 group">
//               <input
//                 type="text"
//                 name="floating_last_name"
//                 id="floating_last_name"
//                 className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="floating_last_name"
//                 className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
//               >
//                 Last name
//               </label>
//             </div>
//           </div>

//           {/* Phone & Company */}
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-8 group">
//               <input
//                 type="tel"
//                 name="floating_phone"
//                 id="floating_phone"
//                 className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="floating_phone"
//                 className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
//               >
//                 Phone number
//               </label>
//             </div>

//             <div className="relative z-0 w-full mb-8 group">
//               <input
//                 type="text"
//                 name="floating_company"
//                 id="floating_company"
//                 className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
//                 placeholder=" "
//                 required
//               />
//               <label
//                 htmlFor="floating_company"
//                 className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
//               >
//                 Company (Ex. Google)
//               </label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-lg w-full py-3 transition-transform duration-300 transform hover:scale-110 hover:rotate-2 dark:focus:ring-blue-800"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../Firebase';
import { serverTimestamp } from 'firebase/firestore';

export default function UserForm() {
  const navigate = useNavigate();
  const db = getFirestore(app);

  // State for each field
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeat_password: '',
    first_name: '',
    last_name: '',
    phone: '',
    company: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (form.password !== form.repeat_password) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'users'), {
        email: form.email,
        password: form.password, // In production, never store plain passwords!
        first_name: form.first_name,
        last_name: form.last_name,
        phone: form.phone,
        company: form.company,
        createdAt: serverTimestamp(),
      });
      navigate('/userSubmit');
    } catch (err) {
      console.error("Firestore error:", err);
      setError('Failed to submit. Please try again.');
    }    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-8 px-4 md:px-10 text-white flex items-center justify-center perspective-1000 pb-20">
      <div className="w-full max-w-2xl transform transition-transform duration-700 hover:rotate-x-2 hover:rotate-y-3 hover:scale-105">
        <h1 className="text-4xl text-center font-extrabold mb-10 tracking-wide drop-shadow-lg uppercase font-serif underline decoration-4 underline-offset-8 transition-transform duration-500 hover:scale-110 hover:rotate-1">
          User Form Of Photo Gallery
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-blue-500/50 transform hover:-rotate-1 hover:scale-105"
        >
          {/* Email */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              value={form.email}
              onChange={handleChange}
              className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
            >
              Email address
            </label>
          </div>
          {/* Password */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              value={form.password}
              onChange={handleChange}
              className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
            >
              Password
            </label>
          </div>
          {/* Confirm Password */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              value={form.repeat_password}
              onChange={handleChange}
              className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
            >
              Confirm password
            </label>
          </div>
          {/* First & Last Name */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                name="first_name"
                id="floating_first_name"
                value={form.first_name}
                onChange={handleChange}
                className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                name="last_name"
                id="floating_last_name"
                value={form.last_name}
                onChange={handleChange}
                className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
              >
                Last name
              </label>
            </div>
          </div>
          {/* Phone & Company */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="tel"
                name="phone"
                id="floating_phone"
                value={form.phone}
                onChange={handleChange}
                className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                name="company"
                id="floating_company"
                value={form.company}
                onChange={handleChange}
                className="block py-3 px-2 w-full text-base text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-all duration-500 hover:scale-105 hover:border-blue-400"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_company"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
              >
                Company (Ex. Google)
              </label>
            </div>
          </div>
          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-xs mb-4 text-center">{error}</div>
          )}
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-lg w-full py-3 transition-transform duration-300 transform hover:scale-110 hover:rotate-2 dark:focus:ring-blue-800"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
