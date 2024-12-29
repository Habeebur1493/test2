import React from 'react'
import './App.css'
import Pageloader from  './Frontend/Pageloader.jsx'
import Page1 from './Frontend/page1.jsx'
import { useGSAP } from "@gsap/react";


const App = () => {

  return (
    <div>
        
        <Pageloader />
        
        <Page1 />
       
    </div>
  )
}

export default App