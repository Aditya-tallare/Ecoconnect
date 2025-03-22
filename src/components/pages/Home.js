import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/feature.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { submitContactForm } from "../pages/contactservice"
import { ref, set, push } from "firebase/database";
import { db } from "../../firebase"; 
import Footer from "./Footer";
// Import your firebase instance


const HomePage = () => {
  const navigate = useNavigate();


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
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">🌱EcoConnect</div>
        <nav className="nav-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#features" className="nav-item">Features</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="login" onClick={() => navigate("/login")}>Login</button>
          <button className="signup" onClick={() => navigate("/Signup")}>Sign up</button>
        </div>
      </header>

      {/* Home Section */}
      <section className="home-section" id="home">
        <div className="home-content">
          <h1>
            Welcome to <span className="highlight typing-effect">EcoConnect</span>
          </h1>

          <p className="intro ">
            Empowering individuals and businesses to embrace sustainability
            and make a tangible impact on our planet.
          </p>

          <div className="key-points">
            <div className="point">
              🌍 <strong>Reduce Your Carbon Footprint</strong> – Take actionable steps to minimize
              your environmental impact.
            </div>
            <div className="point">
              🤝 <strong>Join a Global Community</strong> – Connect with like-minded individuals
              and businesses dedicated to sustainability.
            </div>
            <div className="point">
              🛒 <strong>Explore Eco-Friendly Choices</strong> – Discover sustainable products,
              tips, and green solutions that make a difference.
            </div>
          </div>

          <button className="learn-more">Get Started!</button>
        </div>
      </section>


      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-content">
          <h1>About <span className="highlight">EcoConnect</span></h1>
          <p className="intro">
            EcoConnect is a revolutionary platform designed to help individuals and
            businesses transition to a more sustainable lifestyle.
          </p>
          <p className="intro">
            lorem34 EcoConnect is a revolutionary platform designed to help individuals and
            businesses transition to a more sustainable lifestyle.
          </p>
          <p className="intro">
            EcoConnect is a revolutionary platform designed to help individuals and
            businesses transition to a more sustainable lifestyle.
          </p>

          <button className="learn-more">Learn More</button>
        </div>

        <div className="about-image">
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
            alt="Eco-friendly environment"
          />
        </div>
      </section>
      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="heading">
          Our <span>Features</span>
        </h2>

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
