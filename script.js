// GSAP
gsap.registerPlugin(ScrollTrigger);

// HERO animation
gsap.from(".hero-text", {
    y:50,
    opacity:0,
    duration:1
});

gsap.from(".hero-img", {
    scale:0.8,
    opacity:0,
    duration:1,
    delay:0.3
});

// SCROLL animation
gsap.from(".card", {
    scrollTrigger:{
        trigger:".grid",
        start:"top 80%"
    },
    y:50,
    opacity:0,
    stagger:0.2
});

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

// CURSOR HOVER EFFECT
document.querySelectorAll("a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
    });

    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});