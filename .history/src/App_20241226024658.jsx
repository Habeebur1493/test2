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
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a79fdedf-c088-4a27-925a-5948d42135e6.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    "https://img-cdn.thepublive.com/fit-in/1200x675/afaqs/media/post_attachments/ad15bed6547ef607471505e5eee20aa337b163f3f654779129d25266d0ee103a.jpg",
    "https://www.sony.co.in/content/dam/sony/contents/regional-FSMC/india/common/homepage/primary-tout/2024/cich-bravia/CICH-Banner_D.jpg",
    "https://www.boat-lifestyle.com/cdn/shop/files/480_Desktop_2_1440x.png?v=1733813003",
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
