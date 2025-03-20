import React, { useState } from "react";
import "../styles/signup.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signing up with:", userData);
    // Add signup logic here (API call, Firebase, etc.)
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Join <span className="highlight">EcoConnect</span></h2>
        <p>Create an account and start your sustainability journey!</p>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
