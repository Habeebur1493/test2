import React from "react";
import { Route, Routes } from "react-router-dom";
import Pageloader from "./Frontend/Loader/PageLoader";
import Page1 from "./Frontend/Firstpage/Page1";
import Home from "./Frontend/Firstpage/Home";
import About from "./Frontend/Firstpage/About";
import Services from "./Frontend/Firstpage/Services";
import Contact from "./Frontend/Firstpage/Contact";
import Blog from "./Frontend/Firstpage/Blog";
import Nav from "./Frontend/Firstpage/Nav";
import "./App.css";
import "./Frontend/Loader/loaderstyle.css";


const App = () => {
  return (
    <div>
      <Pageloader />
      <Page1 />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;