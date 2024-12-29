import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {
  const activeStyle = { 
    textDecoration: "underline", 
    color: "red", 
};

  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");


    // Animate the navigation links
    gsap.from(navLinks, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 4,
      stagger: 0.2, // Adds a delay between each link
    });
  }, []);

  return (
    <nav>
      <h1>Mary London</h1>

      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : null)}>
        About
      </NavLink>
      <NavLink to="/services" style={({ isActive }) => (isActive ? activeStyle : null)}>
        Services
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : null)}>
        Contact
      </NavLink>
      <NavLink to="/blog" style={({ isActive }) => (isActive ? activeStyle : null)}>
        Blog
      </NavLink>
    </nav>
  );
};

export default Nav;
