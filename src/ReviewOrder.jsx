import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function ReviewOrder() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>No Order Found</h2>;
  }

  const { product, quantity, total } = data;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Review Order</h2>

      <img src={product.img} alt={product.name} width={200} />

      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Quantity: {quantity}</p>
      <h2>Total: ₹{total}</h2>

      <button
        onClick={() => navigate("/payment", { state: { total } })}
        className="review-pay-btn"
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default ReviewOrder;
