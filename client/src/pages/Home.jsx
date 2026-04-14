import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* CENTER CONTENT */}
      <div className="home-center">
        <h1>Password Manager</h1>

        <div className="home-buttons">
          <button onClick={() => navigate("/login")}>
            Login
          </button>

          <button onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="home-footer">
        <p>© 2026 Password Manager</p>
      </footer>

    </div>
  );
}