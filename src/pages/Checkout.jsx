import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    alert("Order Placed Successfully!");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="address" placeholder="Shipping Address" onChange={handleChange} required />
      <select name="paymentMethod" onChange={handleChange}>
        <option value="Cash on Delivery">Cash on Delivery</option>
        <option value="Card Payment">Card Payment</option>
      </select>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
