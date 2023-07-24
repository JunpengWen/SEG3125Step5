import React from 'react';
import Footer from './Footer';
import {  useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    window.alert('Payment successful! Thank you for your order!');
    navigate("/");

  };

  return (
    <div className="checkout">
      <div className="main">
        <br />
        <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', fontSize: '2.5em' }}>CheckOut</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
          <label htmlFor="creditCardNumber">Credit Card Number</label>
          <input type="number" id="creditCardNumber" min="0" required />
          <label htmlFor="expirationDate">Expiration Date</label>
          <input type="date" id="expirationDate" required />
          <label htmlFor="CVV">CVV</label>
          <input type="number" id="CVV" min="0" required />
          <button type="submit">Check Out</button>
        </form>
        <br />
      </div>

      <Footer/>
    </div>
  );
};

export default CheckOut;
