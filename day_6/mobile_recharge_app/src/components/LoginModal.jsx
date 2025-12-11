import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function LoginModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "400px"
        }}
      >
        <h2>Login Required</h2>
        <p>Please login to continue with payment</p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={onClose} style={{ backgroundColor: "#666" }}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
