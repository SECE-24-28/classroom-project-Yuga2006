import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import heroImg from "../assets/background.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: `url(${heroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      position: "relative",
      overflow: "hidden"
      }}>

      <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}></div>

      <div style={{
        position: "absolute",
        top: "-50%",
        right: "-50%",
        width: "200%",
        height: "200%",
        background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
        // animation: "float 6s ease-in-out infinite"
      }}></div>
      
      <div style={{
        maxWidth: "600px",
        padding: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
        }}>Welcome to Mobile Recharge App</h1>
        
        <p style={{
          fontSize: "20px",
          marginBottom: "40px",
          opacity: "0.9",
          lineHeight: "1.6"
        }}>
          Recharge your mobile instantly with best offers and secure payments
        </p>
        
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button 
            onClick={() => navigate("/recharge")}
            style={{
              padding: "16px 32px",
              fontSize: "18px",
              backgroundColor: "white",
              color: "#1976d2",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"
            }}
          >
            Start Recharge 
          </Button>
          
          <Button 
            onClick={() => navigate("/offers")}
            style={{
              padding: "16px 32px",
              fontSize: "18px",
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white"
            }}
          >
            View Offers 
          </Button>
        </div>
        
        <div style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          opacity: "0.8"
        }}>
        </div>
      </div>
    </div>
  );
}
