import React from "react";
import Pageloader from "./Frontend/Loader/PageLoader";
import Page1 from "./Frontend/Firstpage/Page1";
import Home from "./Frontend/Firstpage/Home";
import About from "./Frontend/Firstpage/About";
import Services from "./Frontend/Firstpage/Services";
import Contact from "./Frontend/Firstpage/Contact";
import Blog from "./Frontend/Firstpage/Blog";
import Nav from "./Frontend/Firstpage/Nav";
import { BrowserRouter as Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Pageloader />
      <Page1 />
      <Nav/>

        <Routes>
          <Routes path="/" element={<Home />} />
          <Routes path="/about" element={<About />} />
          <Routes path="/services" element={<Services />} />
          <Routes path="/contact" element={<Contact />} />
          <Routes path="/blog" element={<Blog />} />
        </Routes>
    </div>
  );
};

export default App;
