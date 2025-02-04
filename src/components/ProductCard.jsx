import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
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
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src={liked ? '/images/like1.png' : '/images/like.jpg'}
          alt="Like"
          style={{
            ...styles.heartIcon,
            filter: liked ? 'hue-rotate(300deg) brightness(1.2)' : 'none',
          }}
        />
      </div>

      {/* Product Image */}
      <img src={product.images[0]} alt={product.name} style={styles.image} />
      <hr style={styles.divider} />
      <h2 style={styles.name}>{product.name}</h2>
      <p style={styles.price}>₹{product.price}</p>
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    borderRadius: '8px',
    padding: '12px',
    width: '200px',
    textAlign: 'center',
    margin: '10px',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    textDecoration: 'none',
    border: '1px solid #9CA3AF',
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
  },
  heartIcon: {
    width: '24px',
    height: '24px',
    transition: 'filter 0.3s ease',
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
  },
};

export default ProductCard;
