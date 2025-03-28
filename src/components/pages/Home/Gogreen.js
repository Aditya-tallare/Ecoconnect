import React, { useEffect, useState } from "react";

const WhyGoGreen = () => {
  const [users, setUsers] = useState(0);
  const [trees, setTrees] = useState(0);

  useEffect(() => {
    const userInterval = setInterval(() => {
      setUsers((prev) => (prev < 5000 ? prev + 50 : 5000));
    }, 10);

    const treeInterval = setInterval(() => {
      setTrees((prev) => (prev < 10000 ? prev + 100 : 10000));
    }, 10);

    return () => {
      clearInterval(userInterval);
      clearInterval(treeInterval);
    };
  }, []);

  return (
    <section 
      className="bg-cover bg-center bg-no-repeat relative h-[100vh] flex items-center" 
      id="why-go-green"
      style={{ backgroundImage: "" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white p-14 animate-fade-in">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide">
          Why <span className="text-primary">Go Green?</span>
        </h1>
        <p className="text-2xl leading-relaxed mb-8">
          Embrace sustainable practices to reduce your environmental footprint and build a healthier planet.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
          EcoConnect inspires eco-friendly habits, helping individuals and businesses contribute positively to environmental change.
        </p>
        <p className="italic text-gray-400 mb-8">"Every small step counts towards a greener future."</p>
        <button className="bg-primary text-primary-foreground py-3 px-12 rounded-full shadow-lg hover:bg-primary/90 transition transform hover:scale-105">
          Learn More
        </button>

        {/* Impact Metrics Section */}
        <div className="mt-14 flex justify-center gap-16">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-accent drop-shadow-lg">{users}+</h3>
            <p className="text-lg text-gray-300">Users Impacted</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-accent drop-shadow-lg">{trees}+</h3>
            <p className="text-lg text-gray-300">Trees Planted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGoGreen;
