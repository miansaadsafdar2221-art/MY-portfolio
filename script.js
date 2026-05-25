gsap.registerPlugin(ScrollTrigger);

gsap.from(".title",{y:80,opacity:0});
gsap.from(".right",{scale:0.8,opacity:0});

gsap.from(".card",{
    scrollTrigger:{trigger:".grid",start:"top 80%"},
    y:80,
    opacity:0,
    stagger:0.2
});

const cursor=document.querySelector(".cursor");
const blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    blur.style.left=e.clientX-100+"px";
    blur.style.top=e.clientY-100+"px";
});