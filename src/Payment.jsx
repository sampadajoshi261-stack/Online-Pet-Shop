import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;

  const [method, setMethod] = useState("");
  const [upi, setUpi] = useState("");
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState("");

  const handlePayment = () => {
    if (!method) {
      setError("Please select a payment method");
      return;
    }

    if (method === "upi" && !upi.includes("@")) {
      setError("Enter valid UPI ID");
      return;
    }

    if (method === "card") {
      if (
        card.number.length !== 16 ||
        card.expiry === "" ||
        card.cvv.length !== 3
      ) {
        setError("Enter valid card details");
        return;
      }
    }

    setError("");
    localStorage.removeItem("cart");
    navigate("/success");
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment</h2>

        <p className="amount">Total Amount: ₹{total}</p>
        <div className="options">
          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={method === "upi"}
              onChange={(e) => {
                setMethod(e.target.value);
                setError("");
              }}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === "card"}
              onChange={(e) => {
                setMethod(e.target.value);
                setError("");
              }}
            />
            Card
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={method === "cod"}
              onChange={(e) => {
                setMethod(e.target.value);
                setError("");
              }}
            />
            Cash on Delivery
          </label>
        </div>
        {method === "upi" && (
          <input
            className="input"
            type="text"
            placeholder="Enter UPI ID (example@upi)"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
          />
        )}
        {method === "card" && (
          <div className="card-details">
            <input
              className="input"
              type="text"
              placeholder="Card Number"
              maxLength="16"
              value={card.number}
              onChange={(e) => setCard({ ...card, number: e.target.value })}
              required
            />
            <input
              className="input"
              type="text"
              placeholder="Expiry (MM/YY)"
              value={card.expiry}
              onChange={(e) => setCard({ ...card, expiry: e.target.value })}
              required
            />
            <input
              className="input"
              type="password"
              placeholder="CVV"
              maxLength="3"
              value={card.cvv}
              onChange={(e) => setCard({ ...card, cvv: e.target.value })}
              required
            />
          </div>
        )}
        {method === "cod" && (
          <p className="cod-text">Pay with cash when your order arrives.</p>
        )}
        {error && <p className="error">{error}</p>}
        <button onClick={handlePayment} className="pay-btn" disabled={!method}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Payment;
