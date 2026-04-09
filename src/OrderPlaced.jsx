import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function OrderPlaced() {
  const navigate = useNavigate();

  return (
    <div
      style={{ textAlign: "center", marginTop: "200px" }}
      className="orderPlace"
    >
      <h1>Order Placed Successfully!🎉</h1>
      <p>Your order has been confirmed.</p>

      <Button onClick={() => navigate("/pet-essentials")} className="shopping">
        Continue Shopping
      </Button>
    </div>
  );
}

export default OrderPlaced;
