import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    await axios.post("https://password-manager-backend-xkpm.onrender.com/api/auth/signup", {
      email,
      password,
    });

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="auth-box">
        <h1>Sign Up</h1>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signup}>Sign Up</button>

        <p onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}
