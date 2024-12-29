import React from 'react'
import './preloader.css'

const Preloader = () => {
  return (
    <div className='preloader'>
        <div className='text-container'>
            <span>MAX</span>
            <span className='loader'></span>
            <span>TIBER</span>
        </div>
    </div>
  )
}

export default Preloader