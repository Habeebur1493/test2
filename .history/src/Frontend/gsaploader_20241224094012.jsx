import React from 'react'
import { gsap } from "gsap";




const gsaploader = () => {

    gsap.to("h1", {duration: 1, rotation: 360, repeat: -1, ease: "power1.inOut"});


  return (
    <div>
      <h1> Mary London</h1>
          <br />
          <p>SINCE 2025</p>
      </div>
  )
}

export default gsaploader