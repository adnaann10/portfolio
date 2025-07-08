const text = "I'm adnaan — UI/UX Designer & Frontend Developer.";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typed").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = typeEffect;

const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(elem => {
    const windowHeight = window.innerHeight;
    const elementTop = elem.getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      elem.classList.add('active');
    }
  });
});

