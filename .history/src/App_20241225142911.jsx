import React from 'react'
import './App.css'
import Pageloader from './Frontend/Loader/PageLoader.jsx'
import Page1 from './Frontend/Firstpage/Page1.jsx'
import { BrowseRouter } from 'react-router-dom'

const App = () => {

  return (
    <div>
        <Pageloader />
        
        <Page1 />

      

    </div>

  )


}

export default App