import React from 'react'
import './App.css'
import Pageloader from  './Frontend/Pageloader.jsx'
import Page1 from './Frontend/page1.jsx'
import LetterSpin from "./Frontend/LetterSpin";
import pageloader from "./Frontend/Pageloader.css";


const App = () => {

  return (
    <div>
        <LetterSpin />
        
        <Pageloader />
        
        <Page1 />
       
    </div>
  )
}

export default App