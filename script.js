// Smooth scrolling with offset (for sticky navbar)
const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const sectionTop = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    });
});


// Active link highlight (scroll spy)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 50;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});