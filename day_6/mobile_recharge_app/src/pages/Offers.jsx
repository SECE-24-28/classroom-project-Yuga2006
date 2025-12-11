export default function Offers() {
  const offers = [
    { title: "Cashback Offer", description: "Get 10% cashback on recharges above ₹500", code: "CASH10", icon: "💰", color: "#4caf50" },
    { title: "First Recharge", description: "Get ₹50 off on your first recharge", code: "FIRST50", icon: "🎉", color: "#ff9800" },
    { title: "Weekend Special", description: "Extra 5% off on weekend recharges", code: "WEEKEND5", icon: "🎊", color: "#9c27b0" }
  ];

  return (
    <div style={{
      minHeight: "80vh",
      background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      padding: "40px 20px"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#333",
            marginBottom: "16px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)"
          }}> Special Offers</h1>
          <p style={{
            fontSize: "18px",
            color: "#666",
            maxWidth: "500px",
            margin: "0 auto"
          }}>Save more with our exclusive deals and promotional codes</p>
        </div>
        
        <div style={{
          display: "grid",
          gap: "24px",
          marginTop: "40px"
        }}>
          {offers.map((offer, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                border: `3px solid ${offer.color}`,
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                backgroundColor: offer.color,
                borderRadius: "50%",
                opacity: "0.1"
              }}></div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <span style={{ fontSize: "32px" }}>{offer.icon}</span>
                <h3 style={{
                  color: offer.color,
                  margin: "0",
                  fontSize: "24px",
                  fontWeight: "700"
                }}>{offer.title}</h3>
              </div>
              
              <p style={{
                margin: "0 0 20px 0",
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6"
              }}>{offer.description}</p>
              
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
                padding: "16px",
                borderRadius: "12px",
                border: `2px dashed ${offer.color}`
              }}>
                <span style={{
                  fontSize: "14px",
                  color: "#666",
                  fontWeight: "500"
                }}>Promo Code:</span>
                <span style={{
                  fontWeight: "700",
                  color: offer.color,
                  fontSize: "18px",
                  letterSpacing: "2px"
                }}>{offer.code}</span>
                <button style={{
                  backgroundColor: offer.color,
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer"
                }} onClick={() => navigator.clipboard.writeText(offer.code)}>COPY</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
