export default function InputBox({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      {label && <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#333" }}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          padding: "14px 16px",
          fontSize: "16px",
          border: "2px solid #e0e0e0",
          borderRadius: "8px",
          boxSizing: "border-box",
          transition: "all 0.3s ease",
          backgroundColor: "#fafafa"
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#1976d2";
          e.target.style.backgroundColor = "white";
          e.target.style.boxShadow = "0 0 0 3px rgba(25, 118, 210, 0.1)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#e0e0e0";
          e.target.style.backgroundColor = "#fafafa";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
