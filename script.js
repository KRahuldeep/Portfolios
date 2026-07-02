// ===============================
// Smooth Scroll for Navigation
// ===============================
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// Active Navigation on Scroll
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "home"; // FIX 1: default active section

    sections.forEach(section => {
         const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===============================
// Reveal Animation
// ===============================
const revealElements = document.querySelectorAll("section");

function revealSections() {

    const windowHeight = window.innerHeight;

     revealElements.forEach(section => {

        if (section.classList.contains("show")) return; // FIX

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            section.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ===============================
// Scroll To Top Button
// ===============================
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

// styles
Object.assign(topButton.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "45px",
    height: "45px",
    border: "none",
    borderRadius: "50%",
    background: "#38bdf8",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,.3)",
    zIndex: "999"
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===============================
// Typing Animation (FIXED)
// ===============================
const typingElement = document.getElementById("typing");

const words = [
    "Front-End Developer",
    "Web Designer",
    "HTML Developer",
    "CSS Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            charIndex = currentWord.length;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();
