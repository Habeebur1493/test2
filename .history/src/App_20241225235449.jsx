import React from 'react'
import './App.css'
import Pageloader from './Frontend/Loader/PageLoader.jsx'
import Page1 from './Frontend/Firstpage/Page1.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Frontend/Firstpage/Home.jsx'
import About from './Frontend/Firstpage/About.jsx'
import Services from './Frontend/Firstpage/Services.jsx'
import Contact from './Frontend/Firstpage/Contact.jsx'
import Blog from './Frontend/Firstpage/Blog.jsx'






const App = () => {

  return (
    <div>
        <Pageloader />
        
        <Page1 />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>


  )


}

export default App