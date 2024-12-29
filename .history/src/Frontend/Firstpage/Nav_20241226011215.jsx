import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./M-removebg-preview.png"; 




const Nav = () => {
  const activeStyle = { textDecoration: "none", 
    color: "red", fontWeight: "bold", fontSize: "20px", 
    padding: "5px", marginright: "10px" };

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
