import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./M-removebg-preview.png"; // Adjust the path based on your file structure
import "./page1.css";

const Nav = () => {
  const activeStyle = { textDecoration: "underline", color: "red" };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>ary London</h1>
      </div>

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
