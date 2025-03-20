import React, { useState } from "react";
import "../styles/carbon.css";
import { useNavigate } from "react-router-dom";

const CarbonFootprintCalculator = () => {
  const [answers, setAnswers] = useState({
    transportation: 0,
    energy: 0,
    diet: 0,
    waste: 0,
  });
  const [totalFootprint, setTotalFootprint] = useState(null);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: Number(e.target.value) });
  };

  const calculateFootprint = () => {
    const footprint =
      answers.transportation * 2.3 + // Transport emissions
      answers.energy * 1.8 + // Home energy usage
      answers.diet * 1.2 + // Food impact
      answers.waste * 0.5; // Waste impact

    setTotalFootprint(footprint.toFixed(2));
  };

  return (
    <div className="carbon-calculator">
      <h2>Carbon Footprint Calculator</h2>
      <p>Estimate your carbon footprint and find ways to reduce it.</p>
      <div className="question">
        <label>How many miles do you drive per week?</label>
        <input type="number" name="transportation" onChange={handleChange} />
      </div>
      <div className="question">
        <label>How much is your monthly electricity bill ($)?</label>
        <input type="number" name="energy" onChange={handleChange} />
      </div>
      <div className="question">
        <label>How often do you eat meat? (times per week)</label>
        <input type="number" name="diet" onChange={handleChange} />
      </div>
      <div className="question">
        <label>How many bags of waste do you produce per week?</label>
        <input type="number" name="waste" onChange={handleChange} />
      </div>
      <button className="calculate-btn" onClick={calculateFootprint}>Calculate</button>

      {totalFootprint && (
        <div className="result">
          <h3>Your estimated carbon footprint:</h3>
          <p>{totalFootprint} kg CO₂ per year</p>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;
