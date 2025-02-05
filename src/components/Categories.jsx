import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Categories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setIsLoading(true); // Show loading animation
    setTimeout(() => {
      setIsLoading(false); // Hide loading animation
      navigate(category); // Redirect to the category page
    }, 1500); // Adjust the delay to match GIF duration
  };

  return (
    <div className="">
      <nav className="relative border border-gray-400 rounded-lg mt-2 ml-1 mr-1">
        {/* Button for smaller screens */}
        <button
          className="md:hidden block w-full text-left px-4 py-2 bg-gray-100 text-gray-700 font-bold border-b border-gray-300"
          onClick={toggleDropdown}
        >
          Categories
        </button>
  
        {/* Loading Animation */}
        {isLoading && (
          <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            <img src="/images/gi.gif" alt="Loading..." className="w-20 h-20" />
          </div>
        )}
  
        {/* Dropdown or Horizontal List */}
        <ul
          style={isDropdownOpen || window.innerWidth >= 768 ? styles.navList : { display: 'none' }}
          className="md:flex flex-col md:flex-row md:justify-evenly md:items-center"
        >
          <li style={styles.navItem}>
            <button onClick={() => handleCategoryClick('/skincare')} style={styles.navLink}>
              Skin Care
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleCategoryClick('/makeup')} style={styles.navLink}>
              Makeup
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleCategoryClick('/bodycare')} style={styles.navLink}>
              Body Care
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleCategoryClick('/haircare')} style={styles.navLink}>
              Hair Care
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleCategoryClick('/fragrance')} style={styles.navLink}>
              Fragrance
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleCategoryClick('/mens')} style={styles.navLink}>
              Men's
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
  

};

const styles = {
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd',
  },
  navItem: {
    padding: '10px 20px',
    textAlign: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    display: 'block',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
  },
};

export default Categories;
