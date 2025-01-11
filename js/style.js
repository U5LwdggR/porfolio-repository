let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => moveSlide(1), 5000); // Auto-slide every 5 seconds

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.getAttribute('data-skill-level');
        skillBar.style.width = skillLevel + '%';
    });
});
//bloquer le clic droit de la souris
document.addEventListener('contextmenu',function (event) {
    event.preventDefault();
});
// Affiche le bouton lorsqu'on défile vers le bas de 100px
window.onscroll = function() {
    let button = document.getElementById("up");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  // Défilement fluide vers le haut lorsque le bouton est cliqué
  document.getElementById("up").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };