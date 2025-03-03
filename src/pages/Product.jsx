import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css"; // Ensure this CSS file is created

const products = [
    { 
      id: 1, 
      name: "Etude Dear Darling Lip Oil Tint", 
      price: 599, 
      images: ["/images/bp1.jpg"], 
      description: "A nourishing lip oil tint for long-lasting color.", 
      ingredients: "Jojoba oil, Vitamin E, Shea Butter", 
      steps: "Apply directly to lips for a glossy tint." 
    },
    { 
      id: 2, 
      name: "Swiss Beauty Cream It Up Blusher", 
      price: 254, 
      images: ["/images/bp2.jpg"], 
      description: "A creamy blusher for a natural flush.", 
      ingredients: "Beeswax, Rose Extract, Vitamin C", 
      steps: "Dab on cheeks and blend with fingers or brush." 
    },
    { 
      id: 3, 
      name: "Swiss Beauty Bold Matt Lip Liner", 
      price: 99, 
      images: ["/images/b3.jpg"], 
      description: "A smooth, matte lip liner for defined lips.", 
      ingredients: "Coconut Oil, Aloe Vera, Natural Waxes", 
      steps: "Outline lips before applying lipstick." 
    },
    { 
      id: 4, 
      name: "Moisture Matte Longstay Lipstick", 
      price: 483, 
      images: ["/images/bp4.jpg"], 
      description: "A long-lasting matte lipstick with deep pigmentation.", 
      ingredients: "Shea Butter, Castor Oil, Vitamin E", 
      steps: "Apply evenly on lips for a bold matte finish." 
    },
    { 
      id: 5, 
      name: "Swiss Beauty Liquid Lipstick", 
      price: 213, 
      images: ["/images/bp3.jpg"], 
      description: "A waterproof liquid lipstick with intense color.", 
      ingredients: "Hyaluronic Acid, Avocado Oil, Beeswax", 
      steps: "Swipe on lips and let dry for a matte effect." 
    },
    { 
      id: 6, 
      name: "Swiss Beauty Shimmer Blusher & Highlighter", 
      price: 100, 
      images: ["/images/b666.jpg"], 
      description: "A radiant highlighter and blusher for a luminous glow.", 
      ingredients: "Pearl Powder, Vitamin C, Rosehip Oil", 
      steps: "Apply to cheekbones and blend for a natural glow." 
    },
    { 
      id: 7, 
      name: "Hilary Rhoda Play n Blend Gel Eyeliner", 
      price: 185, 
      images: ["/images/b777.jpg"], 
      description: "A smooth gel eyeliner for precise, long-lasting definition.", 
      ingredients: "Aloe Vera, Jojoba Oil, Black Pigments", 
      steps: "Glide along lash line for bold, smudge-proof definition." 
    },
    { 
      id: 8, 
      name: "Swiss Beauty Matte Blusher", 
      price: 599, 
      images: ["/images/b888.jpg"], 
      description: "A lightweight matte blusher for a velvety finish.", 
      ingredients: "Kaolin Clay, Vitamin E, Rose Extract", 
      steps: "Sweep across cheeks with a brush for a soft flush." 
    },
    { 
      id: 9, 
      name: "Etude Dear Darling Lip Oil Tint", 
      price: 320, 
      images: ["/images/b99.jpg"], 
      description: "A hydrating lip tint with a juicy shine.", 
      ingredients: "Grape Seed Oil, Shea Butter, Vitamin E", 
      steps: "Apply directly for a sheer, glossy tint." 
    },
    { 
      id: 10, 
      name: "Beauty Berry Matte Eyeshadow Palette", 
      price: 1500, 
      images: ["/images/b10.jpg"], 
      description: "A versatile matte eyeshadow palette for bold looks.", 
      ingredients: "Talc, Mica, Jojoba Oil", 
      steps: "Use an eyeshadow brush to blend colors for a stunning look." 
    }
  ];
  

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [compareList, setCompareList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductReviews, setSelectedProductReviews] = useState([]); // New state for compared product reviews

  // Review state for current product
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  // Load stored reviews for the product when the component mounts or id changes
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(`reviews_${id}`)) || [];
    setReviews(storedReviews);
  }, [id]);

  // Load reviews for selected product when comparison starts
  useEffect(() => {
    if (selectedProduct) {
      const storedReviews = JSON.parse(localStorage.getItem(`reviews_${selectedProduct.id}`)) || [];
      setSelectedProductReviews(storedReviews);
    }
  }, [selectedProduct]);

  // Handle review deletion
  const handleReviewDelete = (indexToDelete) => {
    const updatedReviews = reviews.filter((_, index) => index !== indexToDelete);
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
  };

  const addToCart = () => {
    alert(`${product.name} has been added to the cart!`);
    const currentCart = JSON.parse(localStorage.getItem("storeData")) || [];
    if (!currentCart.some((item) => item.id === product.id)) {
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
    setSelectedProductReviews([]);
  };

  // Handle review submission: save review to state and localStorage
  const handleReviewSubmit = () => {
    if (reviewText.trim() === "") return;
    const newReviews = [...reviews, reviewText];
    setReviews(newReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(newReviews));
    setReviewText("");
  };

  if (!product) {
    return <h2 className="error-message">Product not found</h2>;
  }

  return (
    <>
      {/* Main product content displayed when no comparison modal is active */}
      {!selectedProduct && (
        <div className="product-container">
          <div className="left-column">
            <div className="product-image">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="extra-info">
              <div className="ingredients">
                <h3>Ingredients</h3>
                <p>{product.ingredients}</p>
              </div>
              <div className="steps-to-use">
                <h3>Steps to Use</h3>
                <p>{product.steps}</p>
              </div>
            </div>
            {/* Review Section */}
            <div className="review-section">
              <h3>Reviews</h3>
              <textarea
                className="review-input"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Enter your review..."
                rows="3"
              />
              <button onClick={handleReviewSubmit} className="btn submit-review">
                Submit Review
              </button>
              {reviews.length > 0 && (
                <div className="review-list">
                  {reviews.map((rev, index) => (
                    <div key={index} className="review-item">
                      <span>{rev}</span>
                      <button
                        className="delete-review-btn"
                        onClick={() => handleReviewDelete(index)}
                        title="Delete Review"
                      >
                        &#10005;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="right-column">
            <div className="product-details">
              <h1>{product.name}</h1>
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.description}</p>
              <div className="button-group">
                <button onClick={addToCart} className="btn add-to-cart">
                  Add to Cart
                </button>
                <button onClick={handleCompare} className="btn compare">
                  Compare
                </button>
              </div>
              {compareList && (
                <div className="compare-list">
                  <h3>Select Product to Compare</h3>
                  {products.filter((p) => p.id !== product.id).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => selectProductToCompare(p)}
                      className="compare-item"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="modal-overlay">
          <div className="comparison-section">
            <h2>Product Comparison</h2>
            <div className="comparison-columns">
              <div className="product-column">
                <h3>{product.name}</h3>
                <img src={product.images[0]} alt={product.name} />
                <p className="price">Price: ₹{product.price}</p>
                <p className="description">{product.description}</p>
                <p className="ingredients">Ingredients: {product.ingredients}</p>
                <p className="steps">Steps to Use: {product.steps}</p>
                <h4>Reviews</h4>
                {reviews.length > 0 ? reviews.map((rev, index) => <p key={index}>• {rev}</p>) : <p>No reviews yet</p>}
              </div>

              <div className="product-column">
                <h3>{selectedProduct.name}</h3>
                <img src={selectedProduct.images[0]} alt={selectedProduct.name} />
                <p className="price">Price: ₹{selectedProduct.price}</p>
                <p className="description">{selectedProduct.description}</p>
                <p className="ingredients">Ingredients: {selectedProduct.ingredients}</p>
                <p className="steps">Steps to Use: {selectedProduct.steps}</p>
                <h4>Reviews</h4>
                {selectedProductReviews.length > 0 ? selectedProductReviews.map((rev, index) => <p key={index}>• {rev}</p>) : <p>No reviews yet</p>}
              </div>
            </div>
            <button onClick={cancelComparison} className="btn cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
