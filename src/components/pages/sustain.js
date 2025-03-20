import React, { useState, useEffect } from "react";
import { FaLeaf, FaLightbulb } from "react-icons/fa";
import "../styles/sustain.css";

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

const SustainabilityTips = () => {
  const [randomTip, setRandomTip] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, []);

  return (
    <div className="sustainability-page">
      <header className="sustainability-header">
        <h1><FaLeaf /> Sustainability Tips <FaLightbulb /></h1>
        <p>Learn how to live a greener and more eco-friendly life.</p>
      </header>

      <section className="tip-box">
        <h2>🌍 Today's Tip:</h2>
        <p>{randomTip}</p>
      </section>

      <section className="tips-list">
        <h2>More Ways to Help the Planet:</h2>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>🌱 {tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SustainabilityTips;
