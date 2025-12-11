export default function Button({ children, onClick, type = "button", style }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "12px 24px",
        backgroundColor: "#1976d2",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
        ...style
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow = "0 6px 20px rgba(25, 118, 210, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 4px 12px rgba(25, 118, 210, 0.3)";
      }}
    >
      {children}
    </button>
  );
}
