import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("storeData"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // Handle remove item from the cart
  const removeItemFromCart = (itemId) => {
    // Remove item from cart
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    // Update localStorage with the new cart data
    localStorage.setItem("storeData", JSON.stringify(updatedCart));
  };

  // Calculate total amount for all items in the cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const handleCheckout =() =>{
    alert("Booking Processed")
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {/* If the cart is empty */}
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some items!</p>
      ) : (
        <div className="cart-items">
          <ul>
            {/* Loop through the cart items */}
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>
                    ₹{item.price} x {item.quantity || 1}
                  </p>
                </div>
                <div className="item-total">
                  <span>Total: ₹{item.price * (item.quantity || 1)}</span>
                </div>{" "}
                {/* Remove button */}
                <button
                  className="remove-btn"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>

          {/* Cart summary */}
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
