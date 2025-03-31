import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css"; 

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); 
  const [userName, setUserName] = useState(""); // Store logged-in user's name
  const auth = getAuth();
  const navigate = useNavigate();

  // Handle Input Changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      const user = userCredential.user;

      if (user.displayName) {
        setUserName(user.displayName); // Store user's name after login
      }

      alert(`Welcome back, ${user.displayName || "Eco Warrior"}!`);
      navigate("/overview"); // Redirect to Profile Page
    } catch (error) {
      console.error("Login Error:", error.message);

      if (error.code === "auth/user-not-found") {
        setError("No account found with this email. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Failed to log in. Please try again.");
      }
    }
  };

  // Persist User's Info on Refresh
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "Eco Warrior");
      }
    });
  }, []);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to <span className="highlight">EcoConnect</span></h2>
        <p>Log in to track your sustainability journey!</p>

        {error && <p className="error-message">{error}</p>} 

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-link">
          New here? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
