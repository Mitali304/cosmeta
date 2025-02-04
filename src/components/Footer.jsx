import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-gray-100 text-gray-800">
 
  <div class="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
   
    <div>
      <h2 class="text-lg font-semibold mb-4">About Us</h2>
      <p class="text-sm leading-relaxed">
        Providing the best in beauty essentials with simplicity and quality. Your trusted partner in everyday elegance.
      </p>
    </div>


    <div>
      <h2 class="text-lg font-semibold mb-4">Categories</h2>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">Skincare</a></li>
        <li><a href="#" class="hover:underline">Makeup</a></li>
        <li><a href="#" class="hover:underline">Haircare</a></li>
        <li><a href="#" class="hover:underline">Fragrances</a></li>
      </ul>
    </div>

   
    <div>
      <h2 class="text-lg font-semibold mb-4">Customer Support</h2>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">FAQ</a></li>
        <li><a href="#" class="hover:underline">Contact Us</a></li>
        <li><a href="#" class="hover:underline">Shipping & Returns</a></li>
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>


    <div>
      <h2 class="text-lg font-semibold mb-4">Stay Updated</h2>
      <form class="flex items-center gap-2">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none" 
          required 
        />
        <button 
          type="submit" 
          class="px-2 py-2 bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-800 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>


  <div class="bg-gray-200 py-4">
    <div class="container mx-auto text-center text-sm">
      <p class="mb-2">© {new Date().getFullYear()} Cosmeta. All rights reserved.</p>
      <div class="space-x-4">
        <a href="#" class="hover:underline">Terms & Conditions</a>
        <a href="#" class="hover:underline">Accessibility</a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
