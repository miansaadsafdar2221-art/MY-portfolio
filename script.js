// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.onclick = () => nav.classList.toggle('active');


// Typing effect
const text = ["Frontend Developer", "UI Designer", "JavaScript Developer"];
let i = 0, j = 0, current = "", isDeleting = false;

const typing = document.querySelector(".typing");

function type() {
    current = text[i];
    typing.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) j++;
    else if (isDeleting && j > 0) j--;
    else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();