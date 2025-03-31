import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css"; 

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const auth = getAuth();
  const navigate = useNavigate(); 

  // Handle Input Changes
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle Signup Form Submission
  const handleSignup = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const user = userCredential.user;

      // Update Display Name in Firebase
      await updateProfile(user, {
        displayName: userData.name,
      });

      alert("User Registered Successfully!");
      navigate("/overview"); // Redirect to Profile Page after signup

    } catch (error) {
      console.error("Error signing up:", error.message);

      // 🔴 Improved Error Handling
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use. Please try logging in.");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters.");
      } else {
        alert("Failed to register. Please try again.");
      }
    }
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
              placeholder="User Name"
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
