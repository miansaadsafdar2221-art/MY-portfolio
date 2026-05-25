// ==========================================
//   SAAD SAFDAR — PORTFOLIO JS
// ==========================================

gsap.registerPlugin(ScrollTrigger);

/* ── CUSTOM CURSOR ── */
const dot  = document.getElementById('dot');
const ring = document.getElementById('ring');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

/* ── NAVBAR SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

/* ── HERO ENTRANCE ANIMATIONS ── */
gsap.from('.hero-tag',       { opacity: 0, y: 20, duration: 0.8, delay: 0.2 });
gsap.from('.hero-title .word', {
  opacity: 0, y: 60, duration: 0.8,
  stagger: 0.1, delay: 0.4, ease: 'power3.out'
});
gsap.from('.hero-sub',       { opacity: 0, y: 20, duration: 0.8, delay: 0.9 });
gsap.from('.hero-btns',      { opacity: 0, y: 20, duration: 0.8, delay: 1.1 });
gsap.from('.hero-stats',     { opacity: 0, y: 20, duration: 0.8, delay: 1.3 });
gsap.from('.avatar-wrap',    {
  opacity: 0, scale: 0.85,
  duration: 1.2, delay: 0.6,
  ease: 'back.out(1.7)'
});
gsap.from('.badge-float',    {
  opacity: 0, y: 20,
  duration: 0.8, stagger: 0.2, delay: 1.2
});

/* ── SCROLL REVEAL ── */
gsap.utils.toArray('.reveal').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    }
  );
});

/* ── FLOATING PARTICLES IN HERO ── */
const heroEl = document.querySelector('.hero');
const colors = ['#5eead4', '#818cf8', '#f472b6'];

for (let i = 0; i < 20; i++) {
  const p    = document.createElement('div');
  const size = Math.random() * 3 + 1;

  p.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: ${colors[Math.floor(Math.random() * 3)]};
    border-radius: 50%;
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    opacity: ${Math.random() * 0.5 + 0.2};
    pointer-events: none;
    z-index: 1;
  `;

  heroEl.appendChild(p);

  gsap.to(p, {
    y: (Math.random() - 0.5) * 60,
    x: (Math.random() - 0.5) * 30,
    duration: 3 + Math.random() * 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: Math.random() * 3
  });
}

/* ── 3D TILT ON CARDS ── */
document.querySelectorAll('.project-card').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width  / 2;
    const y = e.clientY - r.top  - r.height / 2;
    el.style.transform = `translateY(-8px) rotateX(${-y / 30}deg) rotateY(${x / 30}deg)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

/* ── MAGNETIC BUTTONS ── */
document.querySelectorAll('.btn-primary, .btn-ghost, .nav-cta').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.3;
    const y = (e.clientY - r.top  - r.height / 2) * 0.3;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});