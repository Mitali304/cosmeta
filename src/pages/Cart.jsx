import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("storeData"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("storeData", JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    navigate("/checkout"); // Redirect to checkout page
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some items!</p>
      ) : (
        <div className="cart-items">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} x {item.quantity || 1}</p>
                </div>
                <div className="item-total">
                  <span>Total: ₹{item.price * (item.quantity || 1)}</span>
                </div>
                <button className="remove-btn" onClick={() => removeItemFromCart(item.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Summary</h3>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
