gsap.registerPlugin(ScrollTrigger);

gsap.from(".left",{
    y:50,
    opacity:0,
    duration:1
});

gsap.from(".right",{
    scale:0.8,
    opacity:0,
    duration:1,
    delay:0.3
});

gsap.from(".card",{
    scrollTrigger:{
        trigger:".grid",
        start:"top 80%"
    },
    y:50,
    opacity:0,
    stagger:0.2
});

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
    cursor.style.top=e.clientY+"px";
    cursor.style.left=e.clientX+"px";
});

document.querySelectorAll("a").forEach(el=>{
    el.addEventListener("mouseenter",()=>{
        cursor.style.transform="translate(-50%,-50%) scale(1.8)";
    });

    el.addEventListener("mouseleave",()=>{
        cursor.style.transform="translate(-50%,-50%) scale(1)";
    });
});