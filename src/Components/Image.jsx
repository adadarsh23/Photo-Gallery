import React, { useState, useEffect } from 'react';
import ImageItems from './ImageItems';
import Loading from './Loading.jsx';

export default function Image({ category }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query, page) => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_URL;
    const searchTerm = category || query || 'photo';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchTerm)}&image_type=photo&pretty=true&per_page=21&page=${page}`;

    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(query, page);
    // eslint-disable-next-line
  }, [category, query, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(searchQuery);
  };

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="px-4 py-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full text-white max-w-md rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </form>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
        {loading ? (
          <div className="col-span-full text-center"><Loading /></div>
        ) : data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="transform transition duration-500 hover:scale-110 hover:rotate-3d hover:shadow-xl relative"
            >
              <ImageItems
                key={item.id}
                webformatURL={item.webformatURL}
                views={item.views}
                likes={item.likes}
                comments={item.comments}
                imageWidth={item.imageWidth}
                imageHeight={item.imageHeight}
                pageURL={item.pageURL}
                tags={item.tags ? item.tags.slice(0, 10) : "No tags available"}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt="No Images Found"
              className="w-60 h-60 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">No Images Found</h2>
            <p className="text-gray-500 dark:text-gray-400">Try searching for something else!</p>
          </div>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
