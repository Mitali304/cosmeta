import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    zip: "",
    shipping: "Standard",
    paymentMethod: "Credit Card",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value.trim(),
    }));
  };

  const handleOrder = () => {
    const requiredFields = [
      "firstName", "lastName", "email", "phone",
      "country", "city", "address", "zip", "shipping", "paymentMethod"
    ];

    // Validate required fields
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in ${field.replace(/([A-Z])/g, " $1")}.`);
        return;
      }
    }

    // Validate credit card details if the payment method is Credit Card
    if (formData.paymentMethod === "Credit Card") {
      if (!formData.cardNumber || !formData.expiration || !formData.cvv) {
        alert("Please enter your credit card details.");
        return;
      }
    }

    alert("Order Placed Successfully!");

    // Clear cart after successful checkout
    localStorage.removeItem("cart");

    // Redirect to homepage after 1 second
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-box">
        <h2>Checkout</h2>

        {/* Contact Information */}
        <div className="section">
          <h3>Contact Information</h3>
          <div className="input-group">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        </div>

        {/* Shipping Information */}
        <div className="section">
          <h3>Shipping Information</h3>
          <div className="input-group">
            <input type="text" name="country" placeholder="Country/Region" onChange={handleChange} required />
            <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          </div>
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input type="text" name="zip" placeholder="Zip/Postal Code" onChange={handleChange} required />
        </div>

        {/* Delivery Options */}
        <div className="section">
          <h3>Delivery</h3>
          <div className="radio-group">
            <label>
              <input type="radio" name="shipping" value="Standard" checked={formData.shipping === "Standard"} onChange={handleChange} />
              <span className="custom-radio"></span> Standard Shipping (Free)
            </label>
            <label>
              <input type="radio" name="shipping" value="Express" checked={formData.shipping === "Express"} onChange={handleChange} />
              <span className="custom-radio"></span> Express Shipping ($10)
            </label>
          </div>
        </div>

        {/* Payment Options */}
        <div className="section">
          <h3>Payment</h3>
          <div className="radio-group">
            <label>
              <input type="radio" name="paymentMethod" value="Credit Card" checked={formData.paymentMethod === "Credit Card"} onChange={handleChange} />
              <span className="custom-radio"></span> Credit Card
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="Google Pay" checked={formData.paymentMethod === "Google Pay"} onChange={handleChange} />
              <span className="custom-radio"></span> Cash On Delivery</label>
            
              
          </div>

          {formData.paymentMethod === "Credit Card" && (
            <div className="card-details">
              <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} required />
              <div className="input-group">
                <input type="text" name="expiration" placeholder="Expiration Date (MM/YY)" onChange={handleChange} required />
                <input type="text" name="cvv" placeholder="CVV" onChange={handleChange} required />
              </div>
            </div>
          )}
        </div>

        <button className="purchase-btn" onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
