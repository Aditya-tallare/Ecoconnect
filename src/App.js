import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import Login from "../src/components/pages/login";
import Signup from "../src/components/pages/signup";
import Overview from "../src/components/pages/overview";
import CarbonFootprintCalculator from "./components/carbon/carbon-calculator";
import SustainabilityTips from "../src/components/pages/sustain";
import CommunityPage from "../src/components/pages/community";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/carbon-calculator" element={<CarbonFootprintCalculator/>}/>
        <Route path="/sustain" element={<SustainabilityTips/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
