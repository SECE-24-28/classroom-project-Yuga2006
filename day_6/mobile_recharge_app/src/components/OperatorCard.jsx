import { useNavigate } from "react-router-dom";

export default function OperatorCard({ name, logo, operator }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/plans/${operator}`)}
      style={{
        border: "2px solid #e0e0e0",
        borderRadius: "16px",
        padding: "30px 20px",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
        e.currentTarget.style.borderColor = "#1976d2";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.borderColor = "#e0e0e0";
      }}
    >
      <div style={{
        width: "120px",
        height: "120px",
        margin: "0 auto 20px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "3px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa"
      }}>
        <img src={logo} alt={name} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
      </div>
      <h3 style={{ margin: "0", color: "#333", fontSize: "18px", fontWeight: "600" }}>{name}</h3>
      <p style={{ margin: "8px 0 0 0", color: "#666", fontSize: "14px" }}>Select Plans</p>
    </div>
  );
}
