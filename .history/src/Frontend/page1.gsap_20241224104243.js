import gsap from "gsap";



const text = "Spin Me!";
const h1 = document.getElementById("animated-text");

h1.innerHTML = text
    .split("")
    .map((letter) => `<span class="letter">${letter}</span>`)
    .join("");


gsap.to(".letter", {
    rotationY: 360, // Spin effect
    duration: 1,
    stagger: 0.1, // Delay between each letter
    repeat: -1, // Infinite loop
    ease: "power1.inOut",
});