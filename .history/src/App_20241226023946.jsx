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
import "./Frontend/Firstpage/page1.css";
import "./Frontend/Loader/loaderstyle.css";



const App = () => {
  const banners = [
    "https://levi.in/cdn/shop/files/Desktop_1_b9d6344b-3d31-4d4d-a472-beacd6b9fff5.jpg?v=1734948744",
    "https://i03.appmifile.com/225_operator_in/20/12/2024/ad23f5af205fee977586c6a6060b5ac1.png?thumb=1&w=2560&f=webp&q=85",
    "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwef24de00/images/homepage/desktop/Vyb_guys_d.jpg",
    "https://via.placeholder.com/800x400/FF5733",
    "https://via.placeholder.com/800x400/33FF57",
  ];

  return (
    <div>
      <Pageloader />
      <Page1 />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Home banners={banners} />
    </div>
  );
};

export default App;
