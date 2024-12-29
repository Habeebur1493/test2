import React from 'react'
import './page1.css'

const Page1 = () => {


  useEffect(() => {
    const img = document.querySelectorAll(".logo img");

    const animation = gsap.fromTo(
      img, 
      { rotationY: 0 },
      {
        rotationY: 360,
        duration: 1,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.1,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);


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
            </div>
        
      </div>
    </div>
  )
}

export default Page1