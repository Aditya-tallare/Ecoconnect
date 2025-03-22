import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h2 className="Green">EcoConnect 🌱</h2>
            <p>
              Connecting people and businesses to a greener future. Join us in making the planet a better place by reducing our carbon footprint.
            </p>
          </div>

          <div className="footer-section links">
            <h3 className="Green">Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="Green">Contact Us</h3>
            <p><i className="fa-solid fa-envelope"></i> support@ecoconnect.com</p>
            <p><i className="fa-solid fa-phone"></i> 7972163624</p>
            <p><i className="fa-solid fa-map-marker-alt"></i> Green Street, Earth 🌍</p>
          </div>

          <div className="footer-section social">
            <h3 className="Green">Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 EcoConnect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer