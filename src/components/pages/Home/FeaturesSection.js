import React from "react";

const features = [
  { icon: "fa-solid fa-leaf", title: "Carbon Footprint Calculator", description: "Track and monitor your carbon footprint with real-time insights." },
  { icon: "fa-solid fa-handshake", title: "Eco Community", description: "Connect with like-minded individuals who share a passion for sustainability." },
  { icon: "fa-solid fa-store", title: "Sustainable Marketplace", description: "Explore eco-friendly products and services." },
  { icon: "fa-solid fa-lightbulb", title: "Sustainability Tips", description: "Receive daily and weekly sustainability tips." },
];

const FeaturesSection = () => (
  <section className="features" id="features">
    <h2 className="heading">Our <span>Features</span></h2>
    <div className="feature-container">
      {features.map((feature, index) => (
        <div className="feature-box" key={index}>
          <i className={feature.icon}></i>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
          <a href="#" className="btn">Learn More</a>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
