gsap.registerPlugin(ScrollTrigger);

/* HERO TIMELINE */
gsap.timeline()
.from(".badge",{y:30,opacity:0})
.from(".title",{y:80,opacity:0})
.from(".sub",{y:40,opacity:0})
.from(".buttons",{y:40,opacity:0})
.from(".right",{scale:0.7,opacity:0});

/* CARDS */
gsap.from(".card",{
    scrollTrigger:{trigger:".grid",start:"top 80%"},
    y:80,
    opacity:0,
    stagger:0.2
});

/* NAV SCROLL */
window.addEventListener("scroll",()=>{
    document.querySelector(".navbar")
    .classList.toggle("scrolled",window.scrollY>50);
});

/* CURSOR */
const cursor=document.querySelector(".cursor");
const blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    blur.style.left=e.clientX-100+"px";
    blur.style.top=e.clientY-100+"px";
});

/* MAGNETIC */
document.querySelectorAll(".magnetic").forEach(el=>{
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

/* FLOATING DOTS */
for(let i=0;i<15;i++){
    const dot=document.createElement("div");
    dot.style.position="fixed";
    dot.style.width="4px";
    dot.style.height="4px";
    dot.style.background="#22d3ee";
    dot.style.borderRadius="50%";
    dot.style.top=Math.random()*window.innerHeight+"px";
    dot.style.left=Math.random()*window.innerWidth+"px";

    document.body.appendChild(dot);

    gsap.to(dot,{
        y:"+=100",
        duration:5+Math.random()*5,
        repeat:-1,
        yoyo:true
    });
}