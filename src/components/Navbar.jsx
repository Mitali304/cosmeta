import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar"; // Ensure you have this component for the search bar

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative z-20">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between py-5 font-medium  ">
        <Link to="/">
          <img src="/images/download.png" className="w-36 h-18" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/Collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
          </NavLink>
          <NavLink to="/About" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
          </NavLink>
          <NavLink to="/Contact" className="flex flex-col items-center gap-1">
            <p>BEAUTY INSIGHT</p>
          </NavLink>
          
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <img
            src="/images/sear.png"
            className="w-6 h-6 cursor-pointer"
            alt="Search"
            onClick={() => setSearchOpen(!isSearchOpen)} // Toggle search bar
          />

           {/* Cart Icon */}
           <Link to="/login" className="relative">
            <img src="/images/profile.png" className="w-6 h-6" alt="Cart" />
           
          </Link>


          {/* Cart Icon */}
          <Link to="/Cart" className="relative">
            <img src="/images/bag.png" className="w-6 h-6" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]"></p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src="/images/menu.png"
            className="w-6 cursor-pointer sm:hidden"
            alt="Menu Icon"
          />
        </div>
      </div>

      {/* Search Bar (Visible under Nav Bar and Above Hero Section) */}
      {isSearchOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-md px-5 py-3">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            closeSearch={() => setSearchOpen(false)} // Close button logic
          />
        </div>
      )}

      {/* Mobile Side Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img src="" className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <div className="flex flex-col">
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/Collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/About"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/Contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
