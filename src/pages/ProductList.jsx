import React, { useState } from "react";

// Sample product data
const products = [
  { id: 1, name: "Dermafique All Important Skin Toner", category: "Skin Care", price: 366, rating: 4, image: "/images/product1.jpg" },
  { id: 2, name: "MARS Aqua Splash Tinted Lip Balm", category: "Makeup", price: 139, rating: 5, image: "/images/product2.jpg" },
  { id: 3, name: "L'Oreal Paris Serum", category: "Hair Care", price: 389, rating: 3, image: "/images/product3.jpg" },
  { id: 4, name: "Dove Revitalizing Bodywash ", category: "Body Care", price: 549, rating: 4, image: "/images/product4.jpg" },
  { id: 5, name: "Carlton London Women Perfumes ", category: "Fragrances", price: 766, rating: 5, image: "/images/product5.jpg" },
  { id: 6, name: "Norelco Philips Shaver 5400", category: "Men", price: 12000, rating: 2, image: "/images/product7.jpg" },
  { id: 7, name: "COSRX Hydrating Serum for Face", category: "Skin Care", price: 400, rating: 4, image: "/images/product6.jpg" },
  { id: 8, name: "Swiss Beauty Mini Baked Shimmer Blusher", category: "Makeup", price: 239, rating: 5, image: "/images/product8.jpg" },
  { id: 9, name: "L'Oreal Paris Hyaluron Moisture", category: "Hair Care", price: 169, rating: 3, image: "/images/product9.jpg" },
  { id: 10, name: "Joy Even Tone Bright Radiance Sunscreen Body Lotion ", category: "Body Care", price: 110, rating: 4, image: "/images/product10.jpg" },
  { id: 11, name: "Carlton London Women Perfume", category: "Fragrances", price: 749, rating: 5, image: "/images/product11.jpg" },
  { id: 12, name: "The Man Company Fresh Black Edt Perfume For Men", category: "Men", price: 499, rating: 2, image: "/images/product12.jpg" },
];

const ProductList = ({ selectedFilters, searchQuery }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Filter products based on selected filters and search query
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (
      selectedFilters.category.length > 0 &&
      !selectedFilters.category.includes(product.category)
    ) {
      return false;
    }

    // Price range filter
    if (selectedFilters.priceRange) {
      const [minPrice, maxPrice] = selectedFilters.priceRange
        .split("-")
        .map((price) => parseInt(price, 10));
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }
    }

    // Rating filter
    if (selectedFilters.rating && product.rating !== parseInt(selectedFilters.rating)) {
      return false;
    }

    // Search query filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery)) {
      return false;
    }

    return true;
  });

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid black", // Black border
                borderRadius: "8px", // Rounded corners for the card
                padding: "16px", // Some padding inside the card
                backgroundColor: "#fff", // White background for the card
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for effect
                position: "relative",
              }}
            >
              {/* Heart Icon */}
              <div
                style={{ position: "absolute", top: "8px", left: "8px", cursor: "pointer" }}
                onClick={() => toggleLike(product.id)}
              >
                <img
                  src={likedProducts.includes(product.id) ? "/images/like1.png" : "/images/like.jpg"}
                  alt="heart"
                  className="w-6 h-6"
                />
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg mb-4"
              />

              {/* Divider between image and details */}
              <hr className="border-t-2 border-gray-300 mb-2" />

              {/* Product Name, Price, and Rating */}
              <div className="text-center">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="font-semibold text-red-500">${product.price}</p>

                {/* Rating */}
                <div className="flex justify-center">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <img key={i} src="/images/fstar.png" alt="star" className="w-4 h-4" />
                  ))}
                  {Array.from({ length: 5 - product.rating }, (_, i) => (
                    <img key={i} src="/images/star.png" alt="star" className="w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products match the selected filters or search query.</p>
      )}
    </div>
  );
};

export default ProductList;
