import React from 'react';
import './navbar.css'; // Import your CSS for styling
import logo from "../assets/download-removebg-preview (1).png"; // Adjust the path as needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links left">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links right">
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
