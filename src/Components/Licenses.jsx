// src/pages/Licenses.jsx
import React from 'react';
 import { motion } from 'framer-motion';

const Licenses = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto px-6 py-12 space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Licenses & Attribution
      </h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">1. Project License</h2>
        <p className="text-gray-600">
          This website and its source code are licensed under the <span className="font-semibold">MIT License</span>. 
          You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">2. Third-Party Libraries</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li><strong>React:</strong> Licensed under the MIT License</li>
          <li><strong>Shadcn Ui:</strong> Open Source under MIT License</li>
          <li><strong>Tailwind CSS:</strong> Licensed under the MIT License</li>
          <li><strong>Framer Motion:</strong> Licensed under the MIT License</li>
          <li><strong>Heroicons / React Icons / Lucide Icons:</strong> Open Source under MIT License</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">3. Images and Content</h2>
        <p className="text-gray-600">
          Images displayed in the photo gallery are either user-uploaded or sourced from free public domains 
          (e.g., pixabay) under their respective free usage licenses.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">4. Disclaimer</h2>
        <p className="text-gray-600">
          All assets, code, and content are provided "as-is" without warranty of any kind, express or implied.
          Use them at your own risk.
        </p>
      </section>

      <section className="text-center pt-6">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} [Photo Gallery] — All Rights Reserved.</p>
      </section>
    </motion.div>
  );
};

export default Licenses;
