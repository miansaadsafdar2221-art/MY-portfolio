
/* ============================================================
   ALEX RAVEN — PORTFOLIO SCRIPT
   ============================================================ */

'use strict';

/* ---- CUSTOM CURSOR ---- */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .project-card, .service-card, .testi-card, .info-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ---- NAV SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- HAMBURGER / MOBILE MENU ---- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---- THEME TOGGLE ---- */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
});

/* ---- TYPEWRITER ---- */
const roles = [
  'UI/UX Designer',
  'Product Designer',
  'Visual Storyteller',
  'Design Systems Lead',
  'Creative Thinker',
];
let roleIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function typewrite() {
  const current = roles[roleIdx];
  if (!deleting) {
    typeEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typewrite, 2000);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typewrite, deleting ? 45 : 90);
}
typewrite();

/* ---- INTERSECTION OBSERVER: REVEAL ---- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || (Array.from(entry.target.parentNode?.children || []).indexOf(entry.target) * 80);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, Math.min(delay, 400));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  if (!el.dataset.delay) el.dataset.delay = (i % 5) * 80;
  revealObserver.observe(el);
});

/* ---- SKILL BARS ---- */
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.bar-fill');
      fills.forEach(fill => {
        const w = fill.dataset.w;
        fill.style.width = w + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(cat => barObserver.observe(cat));

/* ---- COUNTER ANIMATION ---- */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

/* ---- PROJECT CARD COLOR TINT ---- */
document.querySelectorAll('.project-card').forEach(card => {
  const color = card.dataset.color;
  if (!color) return;
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${color}18`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

/* ---- ACTIVE NAV LINK ON SCROLL ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const scrollSpy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => scrollSpy.observe(s));

/* ---- CONTACT FORM ---- */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

function validateField(input, errorEl, msg) {
  if (!input.value.trim()) {
    input.classList.add('error');
    errorEl.textContent = msg;
    return false;
  }
  input.classList.remove('error');
  errorEl.textContent = '';
  return true;
}

function validateEmail(input, errorEl) {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  if (!valid) {
    input.classList.add('error');
    errorEl.textContent = 'Please enter a valid email address.';
  } else {
    input.classList.remove('error');
    errorEl.textContent = '';
  }
  return valid;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const v1 = validateField(fname, document.getElementById('fnameErr'), 'First name is required.');
  const v2 = validateField(lname, document.getElementById('lnameErr'), 'Last name is required.');
  const v3 = validateEmail(email, document.getElementById('emailErr'));
  const v4 = validateField(message, document.getElementById('msgErr'), 'Please write a message.');

  if (!v1 || !v2 || !v3 || !v4) return;

  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');
  btnText.style.display = 'none';
  btnLoader.style.display = '';
  submitBtn.disabled = true;

  setTimeout(() => {
    btnText.style.display = '';
    btnLoader.style.display = 'none';
    submitBtn.disabled = false;
    formSuccess.style.display = 'block';
    form.reset();
    setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
  }, 1800);
});

/* Live validation on blur */
document.getElementById('fname').addEventListener('blur', () => {
  validateField(document.getElementById('fname'), document.getElementById('fnameErr'), 'First name is required.');
});
document.getElementById('lname').addEventListener('blur', () => {
  validateField(document.getElementById('lname'), document.getElementById('lnameErr'), 'Last name is required.');
});
document.getElementById('email').addEventListener('blur', () => {
  validateEmail(document.getElementById('email'), document.getElementById('emailErr'));
});
document.getElementById('message').addEventListener('blur', () => {
  validateField(document.getElementById('message'), document.getElementById('msgErr'), 'Please write a message.');
});

/* ---- SMOOTH SCROLL for all anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---- PAGE LOAD ANIMATION ---- */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});

/* ---- PARALLAX on hero orbs ---- */
window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.hero-orb').forEach((orb, i) => {
    const factor = i === 0 ? 1 : -0.7;
    orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
  const frame = document.querySelector('.hero-visual');
  if (frame) {
    frame.style.transform = `translateY(-50%) rotateY(${x * 0.3}deg) rotateX(${-y * 0.2}deg)`;
  }
});