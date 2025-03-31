import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaChartLine, FaUsers, FaShoppingCart, FaSync } from "react-icons/fa";
import "../../styles/overview.css";

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

const MainContent = () => {
  const navigate = useNavigate();
  const [randomTip, setRandomTip] = useState("");

  const generateNewTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  };

  useEffect(() => {
    generateNewTip();
  }, []);

  return (
    <main className="dashboard-content">
      {/* Header */}
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
          <p>Your eco-friendliness rating: <strong>85%</strong></p>
        </div>
        <div className="card">
          <FaUsers className="card-icon" />
          <h3>Community Members</h3>
          <p>Join <strong>10,000+</strong> sustainability advocates</p>
        </div>
        <div className="card">
          <FaShoppingCart className="card-icon" />
          <h3>Eco Purchases</h3>
          <p><strong>3</strong> sustainable products bought</p>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-btn" onClick={() => navigate("/carbon-calculator")}>📊 Carbon Footprint</button>
          <button className="action-btn" onClick={() => navigate("/community")}>🤝 Join Community</button>
          <button className="action-btn" onClick={() => navigate("/sustain")}>🌱 Sustainable Tips</button>
          <button className="action-btn" onClick={() => navigate("/")}>💡 Get Eco Tips</button>
        </div>
      </section>

      {/* Sustainability Tips Section */}
      <section className="sustainability-tips">
        <h2>🌱 Sustainability Tip</h2>
        <div className="tip-container">
          <p>{randomTip}</p>
          <button className="refresh-tip-btn" onClick={generateNewTip}>
            <FaSync /> New Tip
          </button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
