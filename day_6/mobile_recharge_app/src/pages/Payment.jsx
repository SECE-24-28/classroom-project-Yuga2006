import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const [mobile, setMobile] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/success", { state: { plan, mobile } });
  };

  if (!plan) {
    return <div style={{ padding: "20px" }}>No plan selected</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Payment</h1>
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>Plan Details</h3>
        <p>Amount: ₹{plan.price}</p>
        <p>Validity: {plan.validity}</p>
        <p>Data: {plan.data}</p>
      </div>

      <form onSubmit={handlePayment} style={{ marginTop: "30px" }}>
        <InputBox
          label="Mobile Number"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter 10 digit mobile number"
          required
        />
        <InputBox
          label="Card Number"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
          required
        />
        <InputBox
          label="CVV"
          type="password"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Enter CVV"
          required
        />
        <Button type="submit" style={{ width: "100%", marginTop: "20px" }}>
          Pay ₹{plan.price}
        </Button>
      </form>
    </div>
  );
}
