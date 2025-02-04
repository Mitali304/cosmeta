import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Etude Dear Darling Lip Oil Tint", price: 599, images: ["/images/bp1.jpg"], description: "Juicy lip oil tint with rich moisture." },
    { id: 2, name: "Swiss Beauty Cream It Up Blusher", price: 254, images: ["/images/bp2.jpg"], description: "Long-lasting creamy blusher." },
    { id: 3, name: "Scentice Parfum d'Amour Eau De Parfum", price: 399, images: ["/images/bp5.jpg"], description: "Sophisticated fragrance for everyday wear." },
    { id: 4, name: "Moisture Matte Longstay Lipstick", price: 483, images: ["/images/bp4.jpg"], description: "Matte lipstick with hydration." },
    { id: 5, name: "Swiss Beauty Liquid Lipstick", price: 213, images: ["/images/bp3.jpg"], description: "Liquid lipstick with vibrant colors." },
  ];
  

  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.images[0]} alt={product.name} className="w-full rounded-md mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-[#7D3A40] font-bold text-xl">₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;
