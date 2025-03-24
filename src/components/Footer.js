import React from 'react';
import "../styles/styles.css"
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-max-width footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Our site is flexible for both men and women. In this modern era, it is very possible to choose your partner and feel comfortable.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/stories">Stories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><a href="javascript:void(0)">Privacy Policy</a></li>
            <li><a href="javascript:void(0)">Terms of Service</a></li>
            <li><a href="javascript:void(0)">Purchase Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="tel:+917339645053">+91 123456789</a></li>
            <li><a href="mailto:democompany@gmail.com">rishtaconnect2025@gmail.com</a></li>
            <li><a href="javascript:void(0)">Indore, India</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024. All Rights Reserved By Rishta Connect</p>

      </div>
    </footer>
  );
};

export default Footer;