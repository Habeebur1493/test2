import React from "react";
import Pageloader from "./Frontend/Loader/PageLoader";
import Page1 from "./Frontend/Firstpage/Page1";
import { Router, Routes } from "react-router-dom";
import Home from "./Frontend/Firstpage/Home";
import About from "./Frontend/Firstpage/About";
import Services from "./Frontend/Firstpage/Services";
import Contact from "./Frontend/Firstpage/Contact";
import Blog from "./Frontend/Firstpage/Blog";
import Nav from "./Frontend/Firstpage/Nav";


const App = () => {
  return (
    <div>
      <Pageloader />
      <Page1 />
      <Nav/>

        <Router>
          <Routes path="/" element={<Home />} />
          <Routes path="/about" element={<About />} />
          <Routes path="/services" element={<Services />} />
          <Routes path="/contact" element={<Contact />} />
          <Routes path="/blog" element={<Blog />} />
        </Router>
    </div>
  );
};

export default App;
