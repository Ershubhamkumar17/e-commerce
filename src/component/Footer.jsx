import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>StyleHub</h2>

          <p>
            Your essentials for curated fashion and accessories designed
            to enhance your everyday style.
          </p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">◎</a>
            <a href="#">▶</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#">Shop</a>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">Sale</a>
          <a href="#">Gift Cards</a>
        </div>

        {/* Customer Service */}
        <div className="footer-column">
          <h3>Customer Service</h3>

          <a href="#">Contact Us</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Order Tracking</a>
          <a href="#">Size Guide</a>
        </div>

        {/* Stay Connected */}
        <div className="footer-column">
          <h3>Stay Connected</h3>

          <a href="mailto:support@stylehub.com">
            support@stylehub.com
          </a>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2025 StyleHub. All rights reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;