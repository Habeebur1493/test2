import React from 'react'
import Preloader from './components/Preloader'
import './App.css'



const App = () => {
  return (

    <Preloader>
       <div>
        <h1 className='text-3xl'>Loading Page activated</h1>
        </div>
    </Preloader>
    
   
  )
}

export default App