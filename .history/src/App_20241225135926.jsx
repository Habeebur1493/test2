import React from 'react'
import './App.css'
import Pageloader from './Frontend/Pageloader/Pageloader.jsx'

import Page1 from './Frontend/page1.jsx'




const App = () => {

  return (
    <div>
        <Pageloader />
        
        <Page1 />
       
    </div>
  )
}

export default App