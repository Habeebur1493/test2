import gsap from "gsap";


const text = "Spin Me!";
const h1 = document.getElementById("animated-text");

h1.innerHTML = text
    .split("")
    .map((letter) => `<span class="letter">${letter}</span>`)
    .join("");


gsap.to(".letter", {
    rotationY: 360, 
    duration: 1,
    stagger: 0.1, 
    repeat: -1, 
    ease: "power1.inOut",
});