import React, { useEffect } from 'react'
import './preloader.css'
import './animations/index.js'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, []);

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