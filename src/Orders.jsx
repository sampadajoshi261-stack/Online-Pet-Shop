import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const cancelOrder = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel?");
    if (!confirmCancel) return;

    const updatedOrders = orders.map((order) =>
      order._id === id ? { ...order, status: "Cancelled" } : order,
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title"> Orders Dashboard📦</h2>

      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-card" key={order._id}>
            <div className="order-header">
              <h3>{order.customerName}</h3>
              <span className={`status ${order.status}`}>{order.status}</span>
            </div>

            <div className="order-body">
              <p>
                <strong>Pet:</strong> {order.petName}
              </p>
              <p>
                <strong>Price:</strong> ₹{order.price}
              </p>
              <p>
                <strong>Email:</strong> {order.email}
              </p>
              <p>
                <strong>Address:</strong> {order.address}
              </p>
            </div>

            <div className="order-footer">
              <p>Order ID: {order._id}</p>
              {order.status !== "Cancelled" && order.status !== "Delivered" && (
                <button
                  className="cancel-btn"
                  onClick={() => cancelOrder(order._id)}
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
