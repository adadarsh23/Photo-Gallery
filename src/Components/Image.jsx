import  { useState, useEffect } from 'react';
import ImageItems from './ImageItems';
import Loading from './Loading.jsx';

export default function Image({ category }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  // You can customize these tags
  const popularTags = [
    "Nature", "Technology", "People", "Animals", "Travel",
    "Food", "Sports", "Business", "Art", "Fashion"
  ];

  const fetchImages = async () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_URL;
    const searchTerm = category || query || 'photo';
    const perPage = 21;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchTerm)}&image_type=photo&pretty=true&per_page=${perPage}&page=${page}`;

    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setData(data.hits);
      setTotalPages(Math.ceil(data.totalHits / perPage));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, query, page]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(searchQuery);
  };

  // When a tag is clicked, set it as the search query and trigger search
  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setQuery(tag);
    setPage(1);
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const pageNumbers = [];
  const visiblePages = 5;
  let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  let endPage = startPage + visiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="px-4 py-6">
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search for images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded-l-md border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </form>

      {/* Tags Section */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 ">
        {popularTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full border text-sm transition
              ${searchQuery === tag
                ? "bg-blue-900 text-white border-blue-700"
                : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-100 hover:text-blue-700"}
            `}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
        {loading ? (
          <div className="col-span-full text-center">
            <Loading />
          </div>
        ) : data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="transform transition duration-500 hover:scale-110 hover:shadow-xl relative"
            >
              <ImageItems
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
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
              No Images Found
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Try searching for something else!
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>

          {pageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={`px-3 py-1 rounded ${
                page === pageNum
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
