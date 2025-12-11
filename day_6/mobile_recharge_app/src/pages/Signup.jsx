import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/auth";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ name, email, mobile, password });
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        <InputBox
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <InputBox
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <InputBox
          label="Mobile"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number"
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
          Sign Up
        </Button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
