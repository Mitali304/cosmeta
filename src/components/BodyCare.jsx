import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Body Wash", "Lotion", "Scrub", "Body Mist","Sunscreen"];

const BodyCare = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(2000);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const skincareProducts = [
    { id: 1, name: "Vaseline Cocoa Glow Serum In Lotion", price: 299, category: "Lotion", images: ["/body/p1.jpg"] },
    { id: 2, name: "Fiama Body Wash Shower Gel ", price: 115, category: "Body Wash", images: ["/body/p2.jpg"] },
    { id: 3, name: "Dove Body Polish Exfoliating Scrub", price: 535, category: "Scrub", images: ["/body/p3.jpg"] },
    { id: 4, name: "ITARI Women Crush Body Mist", price: 359, category: "Body Mist", images: ["/body/p4.jpg"] },
    { id: 5, name: "Joy Sunscreen Body Lotion", price: 199, category: "Sunscreen", images: ["/body/p5.jpg"] },
    { id: 6, name: "Mamaearth Rice Water Hydrating Body Lotion", price: 304, category: "Lotion", images: ["/body/p6.jpg"] },
    { id: 7, name: "Dove Dryness Care Bodywash ", price: 395, category: "Body Wash", images: ["/body/p7.jpg"] },
    { id: 8, name: "NIVEA Body Lotion Natural Glow, Cell Repair", price: 358, category: "Lotion", images: ["/body/p8.jpg"] },
    { id: 9, name: "mCaffeine Exfoliating Coffee Body Scrub", price: 359, category: "Scrub", images: ["/body/p9.jpg"] },
    { id: 10, name: "RENEE Bohemian Zest Body Mist", price: 307, category: "Body Mist", images: ["/body/p10.jpg"] },
    { id: 11, name: "Dove Soothing Rose & Aloe Vera Body Wash", price: 359, category: "Body Wash", images: ["/body/p11.jpg"] },
    { id: 12, name: "Gracellon Almond Shea Butter Body Scrub", price: 220, category: "Scrub", images: ["/body/p12.jpg"] },
    { id: 13, name: "Princess by RENEE Disney Moana Body Mist", price: 412, category: "Body Mist", images: ["/body/p13.jpg"] },
    { id: 14, name: "Dove Glow Recharge Serum Body Wash", price: 487, category: "Body Wash", images: ["/body/p14.jpg"] },
    { id: 15, name: "Vaseline Sun Protect SPF 30 Body Lotion", price: 365, category: "Sunscreenn", images: ["/body/p15.jpg"] },
  ];

  // ✅ Logging for debugging
  console.log("Selected Category: ", selectedCategory);
  console.log("Filtering Products for Category: ", selectedCategory);
  console.log("Products Before Filter: ", skincareProducts);

  // ✅ Filtering logic
  const filteredProducts = skincareProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  console.log("Filtered Products: ", filteredProducts);

  return (
    <div className="bg-gray-50 py-1">
      <div className="my-10">
        {/* Categories and Filter Navbar */}
        <div className="flex flex-wrap justify-between shadow-md bg-white py-3 px-4 md:px-8">
          <div className="flex flex-wrap gap-10">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-lg font-semibold px-4 py-2 rounded transition-colors duration-300 ${
                  selectedCategory === category ? "bg-gray-800 text-white" : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filter Button */}
          <div className="text-center mt-4 md:mt-0">
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded"
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? "Hide Filters" : "Show Filters"}
            </button>
          </div>
        </div>

        {/* Price Range Filter */}
        {showFilter && (
          <div className="my-4 md:my-6 flex flex-wrap justify-between px-4 md:px-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <label className="text-gray-800 font-semibold">Price Range: </label>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="ml-2">Up to ₹{priceRange}</span>
            </div>
          </div>
        )}

        {/* Title Section */}
        <div className="text-center py-10">
          <div style={styles.titleContainer}>
            <div style={styles.line}></div>
            <h2 className="prata-regular text-3xl font-semibold text-gray-800">
              -- BODYCARE PRODUCTS --
            </h2>
            <div style={styles.line}></div>
          </div>
        </div>

        {/* Product Cards */}
        <div style={styles.container}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <SkincareCard key={product.id} product={product} />)
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const SkincareCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  const addToCart = () => {
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div style={{ ...styles.card, ...(liked ? styles.cardLiked : styles.cardDefault) }}>
      <div
        onClick={toggleLike}
        style={{
          ...styles.heartContainer,
          transform: liked ? "scale(1.2)" : "scale(1)",
          transition: "transform 0.3s ease, background-color 0.3s ease",
        }}
      >
        <img
          src={liked ? "/images/like1.png" : "/images/like.jpg"}
          alt="Like"
          style={{
            ...styles.heartIcon,
            filter: liked ? "brightness(1.2)" : "none",
          }}
        />
      </div>
      <img src={product.images[0]} alt={product.name} style={styles.image} />
      <hr style={styles.divider} />
      <h2 style={styles.name}>{product.name}</h2>
      <p style={styles.price}>₹{product.price}</p>
      <button style={styles.cartButton} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: '300px',
    borderTop: '2px solid #4A4A4A',
    margin: '0 15px',
  },
  card: {
    position: 'relative',
    borderRadius: '8px',
    padding: '12px',
    width: '220px',
    textAlign: 'center',
    margin: '10px',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    textDecoration: 'none',
    border: '1px solid #9CA3AF',
    background: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardLiked: {
    border: '1px solid #7D3A40',
  },
  cardDefault: {
    border: '1px solid #9CA3AF',
  },
  heartContainer: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    cursor: 'pointer',
    zIndex: 10,
  },
  heartIcon: {
    width: '24px',
    height: '24px',
    transition: 'filter 0.3s ease, transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #9CA3AF',
    margin: '10px 0',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '6px',
  },
  price: {
    fontSize: '14px',
    color: '#7D3A40',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cartButton: {
    display: 'inline-block',
    width: '100%',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#7D3A40',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

export default BodyCare;