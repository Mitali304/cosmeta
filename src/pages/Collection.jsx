import React, { useState } from "react";
import ProductList from "./ProductList"; // Import from the pages directory

const Collection = ({ searchQuery }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: "",
    rating: "",
  });

  const [showFilters, setShowFilters] = useState(false); // State to toggle the visibility of filters on small screens

  const categories = [
    "Skin Care",
    "Makeup",
    "Hair Care",
    "Body Care",
    "Fragrances",
    "Men",
  ];

  // Handle category checkbox changes
  const handleCategoryChange = (category) => {
    setSelectedFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category],
    }));
  };

  // Inline styles for product cards
  const productCardStyle = {
    position: "relative",
    borderRadius: "8px",
    padding: "12px",
    width: "220px",
    textAlign: "center",
    margin: "10px",
    transition: "transform 0.3s ease, border-color 0.3s ease",
    textDecoration: "none",
    border: "1px solid #D1D5DB", // Light border around product card
    background: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const likedCardStyle = {
    border: "1px solid #7D3A40", // Darker border for liked products
  };

  const heartContainerStyle = {
    position: "absolute",
    top: "8px",
    left: "8px",
    cursor: "pointer",
    zIndex: 10,
  };

  const heartIconStyle = {
    width: "24px",
    height: "24px",
    transition: "filter 0.3s ease, transform 0.3s ease",
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-6 px-4 sm:px-6 md:px-10 border-t">
      {/* Filter Section */}
      <div className="w-full sm:w-1/4">
        <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
          <button
            className="sm:hidden block text-lg font-semibold mb-4 text-blue-600 hover:text-blue-800 transition duration-300"
            onClick={() => setShowFilters(!showFilters)} // Toggle the filter visibility
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Only show the filter section if showFilters is true on small screens */}
          {(showFilters || window.innerWidth >= 640) && (
            <>
              {/* Category Filter */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3 text-gray-800">CATEGORIES</p>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition duration-200"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectedFilters.category.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="text-sm font-light text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3 text-gray-800">PRICE RANGE</p>
                <select
                  className="border border-gray-300 rounded px-2 py-1 w-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedFilters.priceRange}
                  onChange={(e) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      priceRange: e.target.value,
                    }))
                  }
                >
                  <option value="">Select</option>
                  <option value="0-25">$0 - $25</option>
                  <option value="25-50">$25 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3 text-gray-800">RATING</p>
                <div className="flex flex-col gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label
                      key={star}
                      className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200 ${
                        selectedFilters.rating === String(star)
                          ? "bg-gray-100 border-gray-400"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="rating"
                        className="hidden"
                        value={star}
                        checked={selectedFilters.rating === String(star)}
                        onChange={(e) =>
                          setSelectedFilters((prev) => ({
                            ...prev,
                            rating: e.target.value,
                          }))
                        }
                      />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: star }, (_, i) => (
                          <img
                            key={i}
                            src={`/images/fstar.png`}
                            alt="filled star"
                            className="w-5 h-5"
                          />
                        ))}
                        {Array.from({ length: 5 - star }, (_, i) => (
                          <img
                            key={i}
                            src={`/images/star.png`}
                            alt="empty star"
                            className="w-5 h-5"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-light text-gray-600">
                        {star} Star{star > 1 && "s"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Products</h2>

        <div className="bg-gray-100 rounded-lg p-4">
          {/* Dynamically display products */}
          <ProductList selectedFilters={selectedFilters} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
