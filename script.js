gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".title", {
    y:80,
    opacity:0,
    duration:1
});

gsap.from(".sub", {
    y:40,
    opacity:0,
    delay:0.3
});

gsap.from(".right", {
    scale:0.8,
    opacity:0,
    duration:1,
    delay:0.5
});

// PROJECTS
gsap.from(".card", {
    scrollTrigger:{
        trigger:".grid",
        start:"top 80%"
    },
    y:80,
    opacity:0,
    stagger:0.2
});

// CURSOR
const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+"px";

    blur.style.left = e.clientX-100+"px";
    blur.style.top = e.clientY-100+"px";
});

// MAGNETIC
document.querySelectorAll(".magnetic").forEach(el=>{
    el.addEventListener("mousemove",(e)=>{
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;

        gsap.to(el,{x:x*0.2,y:y*0.2});
    });

    el.addEventListener("mouseleave",()=>{
        gsap.to(el,{x:0,y:0});
    });
});