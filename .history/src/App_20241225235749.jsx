import React from 'react'
import './App.css'
import Pageloader from './Frontend/Loader/PageLoader.jsx'
import Page1 from './Frontend/Firstpage/Page1.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Frontend/Firstpage/Home'
import About from './Frontend/Firstpage/About'
import Services from './Frontend/Firstpage/Services'
import Contact from './Frontend/Firstpage/Contact'
import Blog from './Frontend/Firstpage/Blog'






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