import React from "react";

const HomeSection = () => (
  <section className="home-section" id="home">
    <div className="home-content">
      <h1>
        Welcome to <span className="highlight typing-effect">EcoConnect</span>
      </h1>

      <p className="intro">
        Empowering individuals and businesses to embrace sustainability
        and make a tangible impact on our planet.
      </p>

      <div className="key-points">
        <div className="point">
          🌍 <strong>Reduce Your Carbon Footprint</strong> – Take actionable steps to minimize your environmental impact.
        </div>
        <div className="point">
          🤝 <strong>Join a Global Community</strong> – Connect with like-minded individuals and businesses dedicated to sustainability.
        </div>
        <div className="point">
          🛒 <strong>Explore Eco-Friendly Choices</strong> – Discover sustainable products, tips, and green solutions that make a difference.
        </div>
      </div>

      <button className="learn-more">Get Started!</button>
    </div>
  </section>
);

export default HomeSection;
