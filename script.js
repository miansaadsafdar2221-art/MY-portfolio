for(let i=0;i<12;i++){
    const dot=document.createElement("div");

    dot.style.position="absolute";
    dot.style.width="3px";
    dot.style.height="3px";
    dot.style.background="#22d3ee";
    dot.style.borderRadius="50%";

    dot.style.top=Math.random()*100+"%";
    dot.style.left=Math.random()*100+"%";

    document.querySelector(".hero").appendChild(dot);

    gsap.to(dot,{
        y:30,
        duration:2+Math.random()*2,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
    });
}