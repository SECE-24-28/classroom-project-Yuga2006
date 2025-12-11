import OperatorCard from "../components/OperatorCard";
import jioLogo from "../assets/Jio.png";
import airtelLogo from "../assets/airtel.jpg";
import viLogo from "../assets/VI.jpg";

export default function Recharge() {
  const operators = [
    { name: "Jio", logo: jioLogo, operator: "jio" },
    { name: "Airtel", logo: airtelLogo, operator: "airtel" },
    { name: "VI", logo: viLogo, operator: "vi" }
  ];

  return (
    <div style={{
      minHeight: "80vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "40px 20px"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#333",
            marginBottom: "16px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)"
          }}>Select Your Operator</h1>
          <p style={{
            fontSize: "18px",
            color: "#666",
            maxWidth: "500px",
            margin: "0 auto"
          }}>Choose your mobile network operator to view available recharge plans</p>
        </div>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "40px"
          }}
        >
          {operators.map((op) => (
            <OperatorCard key={op.operator} {...op} />
          ))}
        </div>
        
        <div style={{
          marginTop: "60px",
          textAlign: "center",
          padding: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "16px",
          backdropFilter: "blur(10px)"
        }}>
          <h3 style={{ color: "#333", marginBottom: "16px" }}>Why Choose Us?</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px"
          }}>
            <div>
              <span style={{ fontSize: "24px" }}>⚡</span>
              <p style={{ margin: "8px 0 0 0", color: "#666" }}>Lightning Fast</p>
            </div>
            <div>
              <span style={{ fontSize: "24px" }}>🔒</span>
              <p style={{ margin: "8px 0 0 0", color: "#666" }}>100% Secure</p>
            </div>
            <div>
              <span style={{ fontSize: "24px" }}>🎆</span>
              <p style={{ margin: "8px 0 0 0", color: "#666" }}>Best Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
