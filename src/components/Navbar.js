import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import Logo from "../assets/mangala.PNG";
import icon from "../assets/Matrilab.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <i className="bi bi-envelope"></i>
              <span>test@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="bi bi-telephone"></i>
              <span>+91010101010</span>
            </div>
          </div>
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>

      
      <div className="main-navbar">
        <div className="container-max-width navbar-container">
          <div className="logo-section">
            <Link to="/matrilab/">
              <img src={icon} alt="Logo" className="logo" />
            </Link>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
          <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
            <Link
              to="/matrilab"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/matrilab/packages"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              to="/matrilab/members"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              Members
            </Link>
            <Link
              to="/matrilab/stories"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              to="/matrilab/contact"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="actions">
              <select className="language-select">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <Link to="/matrilab/login">
                <button className="login-btn">
                  <i className="bi bi-person"></i> Login
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
