import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/feature.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { submitContactForm } from "./contactservice"
import { ref, set, push } from "firebase/database";
import { db } from "../../firebase"; 
import Navbar from "../Shared/Navbar";
import HomeSection from "./Home/HomeSection";
import AboutSection from "./Home/AboutSection";
import Gogreen from "./Home/Gogreen";
import FeaturesSection from "./Home/FeaturesSection";
import More from "./Home/More";
import Footer from "../Shared/Footer";




// Import your firebase instance


const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    // Push data to Firebase
    const contactRef = ref(db, "contacts");
    const newContactRef = push(contactRef);

    set(newContactRef, {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset(); // Clear form
      })
      .catch((error) => {
        alert("Error sending message: " + error.message);
      });
  };


  const features = [
    {
      icon: "fa-solid fa-leaf",
      title: "Carbon Footprint Calculator",
      description:
        "Track and monitor your carbon footprint with real-time insights and personalized suggestions to reduce environmental impact.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Eco Community",
      description:
        "Connect with like-minded individuals and organizations who share a passion for sustainability and a greener future.",
    },
    {
      icon: "fa-solid fa-store",
      title: "Sustainable Marketplace",
      description:
        "Explore eco-friendly products and services from trusted vendors that promote sustainable living.",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Sustainability Tips",
      description:
        "Receive daily and weekly sustainability tips that help you adopt eco-conscious habits effortlessly.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Valuable Information",
      description:
        "Receive daily and weekly sustainability tips that help you adopt eco-conscious habits effortlessly."
    }
  ];

  return (
    <div>
      <Navbar/>
      <HomeSection />
      <AboutSection />
      <Gogreen/>
      <FeaturesSection />
      <More/>
      {/* Contact Form */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Reach out to us and we’ll get back to you soon!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
        <Footer/>
    </div>
  );
};

export default HomePage;
