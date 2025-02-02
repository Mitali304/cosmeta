import React from "react";

const About = () => {
  return (
    <div className="p-6 min-h-screen"> {/* Very light brown background */}
      <div className="max-w-6xl mx-auto">
        {/* Section 1: Content on the Left, Image on the Right */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-pink-600 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to <span className="font-semibold">Glow Haven</span>, your ultimate destination for premium cosmetics and skincare. Our mission is to empower individuals to embrace their natural beauty while exploring the endless possibilities of self-expression through makeup and skincare.
            </p>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-700">
              Call Us Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/aboutus.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-3/4 mx-auto" /* Smaller image size */
            />
          </div>
        </div>

        {/* Section 2: Full Width Content */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-full text-center md:text-left">
            <h2 className="text-2xl font-semibold text-pink-500 mb-3">Our Journey</h2>
            <p className="text-gray-700 mb-4">
              At Glow Haven, we started with a simple idea: to create a space where beauty meets sustainability. Our products are curated with love, ensuring high-quality ingredients, cruelty-free testing, and eco-friendly packaging.
            </p>
            <p className="text-gray-700">
              From skincare essentials to bold makeup palettes, we offer a wide range of products that cater to all skin types and tones.
            </p>
          </div>
        </div>

        {/* Section 3: Content on the Left, Image on the Right */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-pink-500 mb-3">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>100% cruelty-free and ethically sourced ingredients.</li>
              <li>Affordable luxury with a wide range of options.</li>
              <li>Expertly formulated to enhance and nourish your skin.</li>
              <li>Personalized customer care and support.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/aboutus3.jpg"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg w-3/4 mx-auto" /* Smaller image size */
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
