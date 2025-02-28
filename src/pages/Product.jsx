import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css"; // Ensure this CSS file is created

const products = [
  { id: 1, name: "Etude Dear Darling Lip Oil Tint", price: 599, images: ["/images/bp1.jpg"], description: "A nourishing lip oil tint for long-lasting color." },
  { id: 2, name: "Swiss Beauty Cream It Up Blusher", price: 254, images: ["/images/bp2.jpg"], description: "A creamy blusher for a natural flush." },
  { id: 3, name: "Swiss Beauty Bold Matt Lip Liner", price: 99, images: ["/images/b3.jpg"], description: "A smooth, matte lip liner for defined lips." },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [compareList, setCompareList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!product) {
    return <h2 className="error-message">Product not found</h2>;
  }

  const addToCart = () => {
    alert(`${product.name} has been added to the cart!`);
    const currentCart = JSON.parse(localStorage.getItem("storeData")) || [];
    if (!currentCart.some(item => item.id === product.id)) {
      currentCart.push(product);
      localStorage.setItem("storeData", JSON.stringify(currentCart));
    } else {
      alert(`${product.name} is already in the cart!`);
    }
  };

  const handleCompare = () => {
    setCompareList(!compareList);
  };

  const selectProductToCompare = (prod) => {
    setSelectedProduct(prod);
    setCompareList(false);
  };

  const cancelComparison = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-container">
      {/* Product Image */}
      <div className="product-image">
        <img src={product.images[0]} alt={product.name} />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">₹{product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="button-group">
          <button onClick={addToCart} className="btn add-to-cart">Add to Cart</button>
          <button onClick={handleCompare} className="btn compare">Compare</button>
        </div>

        {compareList && (
          <div className="compare-list">
            <h3>Select Product to Compare</h3>
            {products.filter(p => p.id !== product.id).map((p) => (
              <button key={p.id} onClick={() => selectProductToCompare(p)} className="compare-item">
                {p.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Comparison Section */}
      {selectedProduct && (
        <div className="comparison-section">
          <h2>Comparison</h2>
          <h3>{selectedProduct.name}</h3>
          <p>Price: ₹{selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
          <img src={selectedProduct.images[0]} alt={selectedProduct.name} />
          <button onClick={cancelComparison} className="btn cancel-btn">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Product;
