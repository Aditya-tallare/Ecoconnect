import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/feature.css"
import "@fortawesome/fontawesome-free/css/all.min.css";


const HomePage = () => {
  const navigate = useNavigate();
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
      icon:"fa-solid fa-handshake",
      title:"valueable information",
      description:"Receive daily and weekly sustainability tips that help you adopt eco-conscious habits effortlessly."
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
  {/* <div className="home-image">
    <img 
      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D"
      alt="Eco-friendly environment" 
    />
  </div> */}
  
  <div className="home-content">
    <h1>Welcome to <span className="highlight">EcoConnect</span></h1>
    <p className="intro">
      Empowering individuals and businesses to embrace sustainability and make 
      a tangible impact on our planet. 
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
    <button className="learn-more">Get Started !</button>
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
              <a href="#" className="btn">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
      
      <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Reach out to us and we’ll get back to you soon!</p>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="5" placeholder="Write your message here..." required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and Description */}
        <div className="footer-section about">
          <h2 className="Green">EcoConnect 🌱</h2>
          <p>
            Connecting people and businesses to a greener future. Join us in making the planet a better place by reducing our carbon footprint.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3 className="Green">Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3 className="Green">Contact Us</h3>
          <p><i className="fa-solid fa-envelope"></i> support@ecoconnect.com</p>
          <p><i className="fa-solid fa-phone"></i> 7972163624</p>
          <p><i className="fa-solid fa-map-marker-alt"></i> Green Street, Earth 🌍</p>
        </div>

        {/* Social Media & Newsletter */}
        <div className="footer-section social">
          <h3 className="Green">Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>

          <h3 className="Green"> And Subscribe</h3>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 EcoConnect. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default HomePage;
