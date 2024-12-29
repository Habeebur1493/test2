import React, { useEffect } from 'react'
import './Firstpage/page1.css'


const Page1 = () => {

  return (
    <div>
        <div className='page1'>
            <div className='overlay'>
            <nav>
            <div className='logo'>
              <img src="src\Frontend\M-removebg-preview.png"/>
              <h1>ary London</h1>
            </div>  
            
            

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <hr />
            </div>
        
      </div>
    </div>
  )
}

export default Page1