import React from "react";
import { FaChartLine, FaUsers, FaLightbulb, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/overview.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h2>🌱 EcoConnect</h2>
      <ul>
        <li className="active"><FaChartLine /> Dashboard</li>
        <li><FaUsers /> Community</li>
        <li FaLightbulb onClick={() => navigate("/sustain")}><FaLightbulb/> Sustainability Tips</li>
        <li onClick={() => navigate("/setting")}><FaCog /> Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
