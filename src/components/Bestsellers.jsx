import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const products = [
    { id: 1, name: "Etude Dear Darling Lip Oil Tint", price: 599, images: ["/images/bp1.jpg"] },
    { id: 2, name: "Swiss Beauty Cream It Up Blusher", price: 254, images: ["/images/bp2.jpg"] },
    { id: 3, name: "Swiss Beauty Bold Matt Lip Liner", price: 99, images: ["/images/b3.jpg"] },
    { id: 4, name: "Moisture Matte Longstay Lipstick", price: 483, images: ["/images/bp4.jpg"] },
    { id: 5, name: "Swiss Beauty Liquid Lipstick", price: 213, images: ["/images/bp3.jpg"] },
    { id: 6, name: "Swiss Beauty Shimmer Blusher & Highlighter", price: 100, images: ["/images/b666.jpg"] },
    { id: 7, name: "Hilary Rhoda Play n Blend Gel Eyeliner ", price: 185, images: ["/images/b777.jpg"] },
    { id: 8, name: "Swiss Beauty Matte Blusher ", price: 599, images: ["/images/b888.jpg"] },
    { id: 9, name: "Etude Dear Darling Lip Oil Tint", price: 320, images: ["/images/b99.jpg"] },
    { id: 10, name: "Beauty Berry Matte Eyeshadow Palette", price: 1500, images: ["/images/b10.jpg"] },
  ];

  return (
    <div className=" py-1">
      <div className="my-10">
        {/* Title Section */}
        <div className="text-center py-10">
          <div style={styles.titleContainer}>
            <div style={styles.line}></div>
            <h2 className="prata-regular text-3xl font-semibold text-gray-800">
              -- BESTSELLERS --
            </h2>
            <div style={styles.line}></div>
          </div>
        </div>

        {/* Product Cards */}
        <div style={styles.container}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
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
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          ...styles.card,
          ...(liked ? styles.cardLiked : styles.cardDefault),
        }}
      >
        {/* Heart Icon */}
        <div
          onClick={toggleLike}
          style={{
            ...styles.heartContainer,
            transform: liked ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
          }}
        >
          <img
            src={liked ? '/images/like1.png' : '/images/like.jpg'}
            alt="Like"
            style={{
              ...styles.heartIcon,
              filter: liked ? 'brightness(1.2)' : 'none',
            }}
          />
        </div>

        {/* Product Image */}
        <img src={product.images[0]} alt={product.name} style={styles.image} />
        <hr style={styles.divider} />
        <h2 style={styles.name}>{product.name}</h2>
        <p style={styles.price}>₹{product.price}</p>

        {/* Add to Cart Button */}
        <button style={styles.cartButton} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
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
  cartButtonHover: {
    backgroundColor: '#631d28',
  },
  cartButtonFocus: {
    transform: 'scale(1.05)',
  },
};

export default Bestsellers;
