import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";
import { AuthContext } from "../context/AuthContext";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

export default function Login() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (loginUser(emailOrMobile, password)) {
      login("dummy-token");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <InputBox
          label="Email or Mobile"
          type="text"
          value={emailOrMobile}
          onChange={(e) => setEmailOrMobile(e.target.value)}
          placeholder="Enter email or mobile"
          required
        />
        <InputBox
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <Button type="submit" style={{ width: "100%", marginTop: "20px" }}>
          Login
        </Button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
