import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="navbar">
      <div className="logo">🌱EcoConnect</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#features" className="nav-item">Features</a>
        <a href="#contact" className="nav-item">Contact</a>

        {/* More Dropdown */}
        <div className="dropdown">
          <button className="nav-item dropdown-btn" onClick={toggleDropdown}>
            More ▼
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#Gogreen" className="dropdown-item" >Gogreen</a>
              <a href="#More" className="dropdown-item">More</a>
            </div>
          )}
        </div>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      <div className="auth-buttons">
        <button className="login" onClick={() => navigate("/login")}>Login</button>
        <button className="signup" onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </header>
  );
};

export default Navbar;
