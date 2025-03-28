import React, { useState, useEffect } from "react";
import { FaLeaf, FaChartLine, FaUsers, FaShoppingCart, FaLightbulb, FaCog, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/overview.css";

const tips = [
  "Turn off lights and unplug electronics when not in use.",
  "Reduce single-use plastics by using reusable bottles and bags.",
  "Opt for energy-efficient appliances to lower electricity consumption.",
  "Switch to a plant-based diet a few days a week to reduce carbon footprint.",
  "Use public transportation, bike, or carpool to cut down on emissions.",
  "Support brands that use sustainable and ethical practices.",
  "Compost your food waste to reduce landfill contributions.",
  "Collect rainwater for gardening and outdoor use.",
  "Buy second-hand or upcycled products instead of new ones.",
  "Reduce paper waste by switching to digital billing and notes."
];

const Overview = () => {
  const navigate = useNavigate();
  const [randomTip, setRandomTip] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, []);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🌱 EcoConnect</h2>
        <ul>
          <li className="active"><FaChartLine /> Dashboard</li>
          <li><FaUsers /> Community</li>
          <li><FaLightbulb /> Sustainability Tips</li>
          <li onClick={() => navigate("/setting")}><FaCog /> Settings</li>
        </ul>
      </aside>

      {/* Profile Section */}
      <div className="profile-section">
  <div className="avatar-container">
    <img
      src="https://via.placeholder.com/90"
      alt="Profile Avatar"
      className="profile-avatar"
    />
    <div className="profile-status"></div>
  </div>

  <div className="profile-info">
    <p className="profile-name">John Doe</p>
    <p className="profile-role">Eco Champion 🌍</p>

    <div className="profile-stats">
      <div className="stat">♻️ Eco Score: 85%</div>
      <div className="stat">🌿 CO₂ Saved: 2.5 kg</div>
    </div>

    <div className="profile-actions">
      <button className="edit-btn">Edit Profile</button>
      <button className="logout-btn">Logout</button>
    </div>
  </div>
</div>


      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome, Eco Warrior! 🌍</h1>
          <p>Track your impact and engage with the community</p>
        </header>

        {/* Dashboard Stats */}
        <div className="dashboard-cards">
          <div className="card">
            <FaLeaf className="card-icon" />
            <h3>Carbon Footprint</h3>
            <p>2.5 kg CO₂ saved this month</p>
          </div>
          <div className="card">
            <FaChartLine className="card-icon" />
            <h3>Eco Score</h3>
            <p>Your eco-friendliness rating: 85%</p>
          </div>
          <div className="card">
            <FaUsers className="card-icon" />
            <h3>Community Members</h3>
            <p>Join 10,000+ sustainability advocates</p>
          </div>
          <div className="card">
            <FaShoppingCart className="card-icon" />
            <h3>Eco Purchases</h3>
            <p>3 sustainable products bought</p>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={() => navigate("/carbon-calculator")}>Carbon Footprint</button>
            <button className="action-btn" onClick={() => navigate("/community")}>Join Community</button>
            <button className="action-btn" onClick={() => navigate("/Sustain")}>Sustainable Tips</button>
            <button className="action-btn" onClick={() => navigate("/")}>Get Eco Tips</button>
          </div>
        </section>

        {/* Sustainability Tips Section */}
        <section className="sustainability-tips">
          <h2>🌱 Sustainability Tip</h2>
          <p>{randomTip}</p>
        </section>

      </main>
    </div>
  );
};

export default Overview;