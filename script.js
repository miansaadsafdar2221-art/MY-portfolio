gsap.registerPlugin(ScrollTrigger);

/* ================= HERO ANIMATION ================= */
gsap.from(".title",{
    y:100,
    opacity:0,
    duration:1,
    ease:"power4.out"
});

gsap.from(".sub",{
    y:50,
    opacity:0,
    delay:0.3
});

gsap.from(".buttons",{
    y:50,
    opacity:0,
    delay:0.5
});

gsap.from(".right",{
    scale:0.8,
    opacity:0,
    duration:1
});

/* ================= PROJECT ANIMATION ================= */
gsap.from(".card",{
    scrollTrigger:{
        trigger:".grid",
        start:"top 80%"
    },
    y:80,
    opacity:0,
    stagger:0.2,
    duration:0.8
});

/* ================= NAVBAR SCROLL EFFECT ================= */
window.addEventListener("scroll",()=>{
    document.querySelector(".navbar")
    .classList.toggle("scrolled",window.scrollY>50);
});

/* ================= SECTION REVEAL ================= */
const sections=document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{
    sections.forEach(sec=>{
        const top=sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
});

/* ================= CUSTOM CURSOR ================= */
const cursor=document.querySelector(".cursor");
const blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    blur.style.left=e.clientX-100+"px";
    blur.style.top=e.clientY-100+"px";
});

/* ================= MAGNETIC BUTTON EFFECT ================= */
const magnets=document.querySelectorAll(".magnetic");

magnets.forEach(el=>{
    el.addEventListener("mousemove",(e)=>{
        const rect=el.getBoundingClientRect();
        const x=e.clientX-rect.left-rect.width/2;
        const y=e.clientY-rect.top-rect.height/2;

        el.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
    });

    el.addEventListener("mouseleave",()=>{
        el.style.transform="translate(0,0)";
    });
});