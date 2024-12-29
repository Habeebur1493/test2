import React from "react";
import { Route, Routes } from "react-router-dom";
import Pageloader from "./Frontend/Loader/PageLoader";
import Page1 from "./Frontend/Firstpage/Page1";
import Home from "./Frontend/Firstpage/Home";
import Products from "./Frontend/Firstpage/Products";
import Services from "./Frontend/Firstpage/Services";
import Contact from "./Frontend/Firstpage/Contact";
import Blog from "./Frontend/Firstpage/Blog";
import Nav from "./Frontend/Firstpage/Nav";
import "./App.css";
import "./Frontend/Firstpage/page1.css";
import "./Frontend/Loader/loaderstyle.css";
import 



const App = () => {
  const banners = [
    "https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_285_11_24_WinterRetreat_V1?resMode=sharp2&wid=1600&hei=642",
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a79fdedf-c088-4a27-925a-5948d42135e6.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    "https://images.hindustantimes.com/tech/img/2021/10/06/1600x900/IMG-20211005-WA0007_1633522371964_1633522436021.jpg",
    "https://www.sony.co.in/content/dam/sony/contents/regional-FSMC/india/common/homepage/primary-tout/2024/cich-bravia/CICH-Banner_D.jpg",
    "https://www.boat-lifestyle.com/cdn/shop/files/480_Desktop_2_1440x.png?v=1733813003",
  ];

  return (
    <div>
      <Pageloader />
      <Page1 />
      <Nav />
      <Routes>
        <Route path="/" element={<Home banners ={banners}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      
    </div>
  );
};

export default App;
