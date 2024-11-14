import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo1.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />

      {/* Sidebar */}
      <ul className={`sidebar ${isMenuOpen ? "active" : ""}`}>
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          className="close-icon"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Account</li>
        <button className="sidebar-login-button">Login</button>
      </ul>

      {/* Main Navbar List */}
      <ul className="navbar-list">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Account</li>
      </ul>

      <div className="navbar-button-container">
        <button className="navbar-button">Login</button>
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
          className="hamburger-icon"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
