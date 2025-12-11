import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, mobile } = location.state || {};

  return (
    <div style={{ padding: "20px", textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
      <div style={{ fontSize: "60px", color: "#4caf50" }}>✓</div>
      <h1 style={{ color: "#4caf50" }}>Recharge Successful!</h1>
      
      {plan && mobile && (
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
          <p><strong>Mobile Number:</strong> {mobile}</p>
          <p><strong>Amount:</strong> ₹{plan.price}</p>
          <p><strong>Validity:</strong> {plan.validity}</p>
          <p><strong>Data:</strong> {plan.data}</p>
        </div>
      )}

      <div style={{ marginTop: "30px" }}>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </div>
    </div>
  );
}
