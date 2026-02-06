// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            ?.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Contact Form Submission (Frontend Only) =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been received successfully.`);
        contactForm.reset();
    });
}

// ===== Scroll-to-Top Button =====
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    border: none;
    border-radius: 50%;
    background: #ffd369;
    color: #333;
    font-size: 18px;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Typing Effect =====
const typingText = document.querySelector(".typing-text");
const text = "Aspiring Full Stack Web Developer | ML Enthusiast";
let index = 0;

function typeEffect() {
    if (typingText && index < text.length) {
        typingText.textContent += text.charAt(index++);
        setTimeout(typeEffect, 80);
    }
}

if (typingText) {
    typingText.textContent = "";
    typeEffect();
}

// ===== Scroll Reveal Animation =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const offset = sec.offsetTop - 400;
        if (window.scrollY >= offset) {
            sec.classList.add("show");
        }
    });
});
