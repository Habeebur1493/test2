import React from 'react'
import { gsap } from "gsap";




const gsaploader = () => {

    gsap.to("h1", {duration: 1, rotation: 360, repeat: -1, ease: "power1.inOut"});


  return (
    <div>

    </div>
  )
}

export default gsaploader