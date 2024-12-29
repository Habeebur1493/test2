import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {


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

        <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/"
            >
                Home
        </NavLink>

        <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/about"
            >
                About    
        </NavLink>

        <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }    
                to="/services"
            >    
                Services
        </NavLink>   

        <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>    
                    e.isActive ? { textDecoration: "underline" } : {}
                }    
                to="/contact"
            >    
                Contact
        </NavLink>   

        <NavLink    
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>    
                    e.isActive ? { textDecoration: "underline" } : {}
                }    
                to="/blog"
            >    
                Blog
        </NavLink>
    </nav>
  );
};

export default Nav;
