import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* EVS Logo - Acts as Home Link */}
      <div className="logo">
        <Link to="/">EVS</Link>
      </div>

      {/* Hamburger Menu Icon - Toggles Mobile Menu */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/about" className="nav-link">About Us</Link></li>
        <li><Link to="/CurrentProjects" className="nav-link">Current Projects</Link></li>
        <li><Link to="/CompletedProjects" className="nav-link">Completed Projects</Link></li>
        <li><Link to="/OurTeam" className="nav-link">OurTeam</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/financialtransparency" className="nav-link">Financial Transparency</Link></li>

        {/* Donate Button */}
        <li>
          <button 
            className="donate-button"
            onClick={() => window.location.href="/donate"}
          >
          Donate Now
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;