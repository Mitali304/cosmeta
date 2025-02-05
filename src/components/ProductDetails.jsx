import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL params
  const [product, setProduct] = useState(null);

  // Mock data (or you could fetch from an API)
  const products = [
    { id: 1, name: "Etude Dear Darling Lip Oil Tint", price: 599, description: "A refreshing lip tint that moisturizes and adds a hint of color.", images: ["/images/bp1.jpg"] },
    { id: 2, name: "Swiss Beauty Cream It Up Blusher", price: 254, description: "A creamy, buildable blusher for a natural, glowing flush.", images: ["/images/bp2.jpg"] },
    { id: 3, name: "Swiss Beauty Bold Matt Lip Liner", price: 99, description: "A bold, long-lasting matte lip liner for perfect definition.", images: ["/images/b3.jpg"] },
    { id: 4, name: "Moisture Matte Longstay Lipstick", price: 483, description: "A moisturizing matte lipstick that stays for hours.", images: ["/images/bp4.jpg"] },
    { id: 5, name: "Swiss Beauty Liquid Lipstick", price: 213, description: "A highly-pigmented, liquid lipstick with a smooth matte finish.", images: ["/images/bp3.jpg"] },
    { id: 6, name: "Swiss Beauty Shimmer Blusher & Highlighter", price: 100, description: "A shimmering duo for a radiant glow.", images: ["/images/b666.jpg"] },
    { id: 7, name: "Hilary Rhoda Play n Blend Gel Eyeliner", price: 185, description: "A gel eyeliner that blends smoothly and gives bold color.", images: ["/images/b777.jpg"] },
    { id: 8, name: "Swiss Beauty Matte Blusher", price: 599, description: "A soft matte blusher for a natural flush of color.", images: ["/images/b888.jpg"] },
    { id: 9, name: "Etude Dear Darling Lip Oil Tint", price: 320, description: "A nourishing lip tint with a fruity flavor.", images: ["/images/b99.jpg"] },
    { id: 10, name: "Beauty Berry Matte Eyeshadow Palette", price: 1500, description: "A vibrant eyeshadow palette with rich matte shades.", images: ["/images/b10.jpg"] },
  ];

  useEffect(() => {
    console.log('Product ID:', id); // Log product ID to check if it's being fetched correctly
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      setProduct(product);
    } else {
      console.log('Product not found!'); // Log if no product is found with this ID
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <Link to="/" style={{ textDecoration: 'none', color: '#7D3A40' }}>Back to Bestsellers</Link>
      <div style={styles.card}>
        <img src={product.images[0]} alt={product.name} style={styles.image} />
        <h2 style={styles.name}>{product.name}</h2>
        <p style={styles.price}>₹{product.price}</p>
        <p style={styles.description}>{product.description}</p>

        {/* Add to Cart Button */}
        <button style={styles.cartButton} onClick={() => alert(`${product.name} has been added to the cart!`)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  card: {
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    border: '1px solid #9CA3AF',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '16px',
  },
  price: {
    fontSize: '20px',
    color: '#7D3A40',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#333',
    marginTop: '10px',
    marginBottom: '20px',
  },
  cartButton: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#7D3A40',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default ProductDetail;
