import React, { useState } from "react";
import "../styles/carbon.css";
import { ref, push } from "firebase/database";
import { db } from "../../firebase"; 
import { useNavigate } from "react-router-dom";

const CarbonFootprintCalculator = () => {
  const [answers, setAnswers] = useState({
    transportation: 0,
    energy: 0,
    diet: 0,
    waste: 0,
  });
  const [totalFootprint, setTotalFootprint] = useState(null);
  const [solutions, setSolutions] = useState("");

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: Number(e.target.value) });
  };

  const getSolutions = (footprint) => {
    if (footprint < 2000) {
      return (
        "🌿 **Great Job!** You're on the right track. Maintain eco-friendly habits by conserving energy, reducing waste, and using public transport whenever possible."
      );
    } else if (footprint >= 2000 && footprint <= 4000) {
      return (
        "🌍 **Moderate Impact:** Try carpooling, reducing meat consumption, and switching to energy-efficient appliances. Small steps make a big difference!"
      );
    } else {
      return (
        "🔥 **High Impact:** Consider renewable energy sources, minimize air travel, and adopt zero-waste practices. Sustainable changes can greatly reduce your footprint!"
      );
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
      transportation: answers.transportation,
      energy: answers.energy,
      diet: answers.diet,
      waste: answers.waste,
      totalFootprint: formattedFootprint,
      solutions: solutions,
      timestamp: new Date().toISOString(),
    };

    push(ref(db, "carbonFootprints/"), carbonData)
      .then(() => {
        console.log("Data saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
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

      <button className="calculate-btn" onClick={calculateFootprint}>
        Calculate
      </button>

      {totalFootprint && (
        <div className="result">
          <h3>Your estimated carbon footprint:</h3>
          <p>{totalFootprint} kg CO₂ per year</p>
          
          <h3>Recommended Solutions:</h3>
          <p className="solution">{solutions}</p>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;
