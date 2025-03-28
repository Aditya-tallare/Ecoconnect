import React from "react";

const AboutSection = () => (
  <section className="about-section bg-cover bg-center bg-no-repeat relative h-[90vh] flex items-center" id="about" 
    style={{ backgroundImage: "url('https://www.wbcsd.org/wp-content/uploads/2023/10/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg')" }}>
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white p-12 animate-fade-in">
      <h1 className="text-6xl font-extrabold mb-6">
        About <span className="text-primary">EcoConnect</span>
      </h1>
      <p className="text-xl leading-relaxed mb-8">
        Empowering individuals and businesses to embrace sustainability for a greener future.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        EcoConnect is a revolutionary platform designed to simplify your journey towards eco-friendly living. From carbon tracking to sustainable product recommendations, we've got you covered.
      </p>
      <p className="italic text-gray-300 mb-6">"Join us in creating a sustainable tomorrow."</p>
      <button className="bg-primary text-primary-foreground py-3 px-10 rounded-full shadow-lg hover:bg-primary/90 transition transform hover:scale-105">
        Learn More
      </button>
    </div>
  </section>
);

export default AboutSection;