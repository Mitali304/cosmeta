import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Collection from './pages/collection';
import About from './pages/about';
import Contect from './pages/contect';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import Placeorder from './pages/placeorder';
import Orders from './pages/orders';
import Navbar from './compnents/Navbar';
import Skincare from './compnents/Skincare';
import Makeup from './compnents/makeup';
import HairCare from './compnents/Haircare';
import BodyCare from './compnents/Bodycare';
import Fragrance from './compnents/Fragrance';
import Mens from './compnents/Mens '; // Corrected path
import Bestsellers from './compnents/Bestsellers';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/collection" element={<Collection searchQuery={searchQuery} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/product/:ProductID" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/skincare" element={<Skincare searchQuery={searchQuery} />} />
        <Route path="/makeup" element={<Makeup searchQuery={searchQuery} />} />
        <Route path="/bodycare" element={<BodyCare searchQuery={searchQuery} />} />
        <Route path="/haircare" element={<HairCare searchQuery={searchQuery} />} />
        <Route path="/fragrance" element={<Fragrance searchQuery={searchQuery} />} />
        <Route path="/mens" element={<Mens searchQuery={searchQuery} />} />
        <Route path="/bestsellers" element={<Bestsellers searchQuery={searchQuery} />} />
        
      </Routes>
    </div>
  );
};

export default App;
