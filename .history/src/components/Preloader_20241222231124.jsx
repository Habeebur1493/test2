import React, { useEffect } from 'react'
import './preloader.css'

const Preloader = () => {

    useEffect(() => {
        
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