import React, { useState } from "react";
import "../styles/carbon.css";
import { ref, push } from "firebase/database";
import { db } from "../../firebase"; 
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CarbonFootprintCalculator = () => {
  const [answers, setAnswers] = useState({
    transportation: 0,
    energy: 0,
    diet: 0,
    waste: 0,
  });
  const [totalFootprint, setTotalFootprint] = useState(null);
  const [solutions, setSolutions] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: Number(e.target.value) });
  };

  const getSolutions = (footprint) => {
    if (footprint < 2000) {
      setProgress(30);
      return "🌿 Great Job! Maintain eco-friendly habits like reducing waste and using public transport.";
    } else if (footprint >= 2000 && footprint <= 4000) {
      setProgress(60);
      return "🌍 Moderate Impact: Try carpooling, eating less meat, and switching to energy-efficient appliances.";
    } else {
      setProgress(90);
      return "🔥 High Impact: Consider renewable energy sources, minimize air travel, and adopt zero-waste practices.";
    }
  };

  const calculateFootprint = () => {
    const footprint =
      answers.transportation * 2.3 +
      answers.energy * 1.8 +
      answers.diet * 1.2 +
      answers.waste * 0.5;

    const formattedFootprint = footprint.toFixed(2);
    setTotalFootprint(formattedFootprint);

    const solutions = getSolutions(footprint);
    setSolutions(solutions);

    const carbonData = {
      ...answers,
      totalFootprint: formattedFootprint,
      solutions,
      timestamp: new Date().toISOString(),
    };

    push(ref(db, "carbonFootprints/"), carbonData)
      .then(() => console.log("Data saved successfully!"))
      .catch((error) => console.error("Error saving data:", error));
  };

  return (
    <div className="carbon-calculator">
      <h2>🌍 Carbon Footprint Calculator</h2>
      <p>Estimate your environmental impact and find practical solutions to reduce it.</p>

      <div className="questions-container">
        {[{ label: "How many miles do you drive per week?", name: "transportation" },
          { label: "How much is your monthly electricity bill ($)?", name: "energy" },
          { label: "How often do you eat meat? (times per week)", name: "diet" },
          { label: "How many bags of waste do you produce per week?", name: "waste" }].map(({ label, name }) => (
          <div className="question" key={name}>
            <label>{label}</label>
            <input type="number" name={name} onChange={handleChange} min="0" />
          </div>
        ))}
      </div>

      <button className="calculate-btn" onClick={calculateFootprint}>Calculate</button>

      {totalFootprint && (
        <div className="result">
          <h3>Your Estimated Carbon Footprint:</h3>
          <div className="progress-bar-container">
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={buildStyles({
                textColor: "#4CAF50",
                pathColor: progress < 60 ? "#4CAF50" : "#FF5722",
                trailColor: "#D9EAD3",
              })}
            />
          </div>
          <p>{totalFootprint} kg CO₂ per year</p>

          <h3>Recommended Solutions:</h3>
          <p className="solution">{solutions}</p>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;