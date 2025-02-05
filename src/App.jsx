import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contect from './pages/Contect';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Placeorder from './pages/Placeorder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Skincare from './components/Skincare';
import Makeup from './components/Makeup';
import HairCare from './components/HairCare';
import BodyCare from './components/BodyCare';
import Fragrance from './components/Fragrance';
import Mens from './components/Mens '; // Corrected path
import Bestsellers from './components/Bestsellers';


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
