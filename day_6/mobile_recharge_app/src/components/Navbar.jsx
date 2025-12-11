import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "./Button";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav style={{
      padding: "16px 24px",
      background: "linear-gradient(135deg, #0a1724ff 0%, #1565c0 100%)",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 20px rgba(25, 118, 210, 0.3)",
      backdropFilter: "blur(10px)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={logo} alt="Logo" style={{ width:"50px",height: "40px",objectFit:"contain"}} />
        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "700" }}>RechargeApp</h2>
      </div>
      
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        <Link 
          to="/" 
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "500",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
        >
          Home
        </Link>
        
        <Link 
          to="/recharge" 
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "500",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
        >
          Recharge
        </Link>
        
        <Link 
          to="/offers" 
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "500",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
        >
          Offers
        </Link>
        
        {isLoggedIn ? (
          <Button 
            onClick={logout} 
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              fontSize: "14px",
              fontWeight: "600"
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button style={{
              padding: "10px 20px",
              backgroundColor: "white",
              color: "#1976d2",
              fontSize: "14px",
              fontWeight: "600"
            }}>
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
