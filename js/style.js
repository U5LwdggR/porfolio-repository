/*document.addEventListener('DOMContentLoaded', function() {

        // Typing Animation with your specific phrases
    const typed = new Typed('.typing', {
        strings: ['Lowe Darel', 'Développeur Fullstack Junior', 'Passionné par l\'informatique', 'Disponible pour réaliser vos projets'],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typing Animation
    const typed = new Typed('.typing', {
        strings: ['Steve Darel', 'Développeur Web', 'Designer', 'Freelance'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Animate Skills Bars on Scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-progress')) {
                    animateSkillBars();
                }
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    document.querySelectorAll('.skill-progress, .about-section, .skills-section, .projects-section, .contact-section').forEach(section => {
        observer.observe(section);
    });

    // Counter Animation for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounters() {
        statNumbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(counter);
                    number.textContent = target;
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
    
    // Only animate counters when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});*/
document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Empêcher le défilement quand le menu est ouvert
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Animation de typing
    const typingText = document.getElementById('typing-text');
    const phrases = [
        "Lowe Darel",
        "Développeur Fullstack Junior",
        "Passionné par l'informatique",
        "Disponible pour réaliser vos projets"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseBetweenPhrases = 1500;
    
    function type() {
        const currentPhrase = phrases[phraseIndex % phrases.length];
        
        if (isDeleting) {
            // Effacer le texte
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Écrire le texte
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Vérifier si on a fini d'écrire la phrase
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause avant de commencer à effacer
            typingSpeed = pauseBetweenPhrases;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Passer à la phrase suivante
            isDeleting = false;
            phraseIndex++;
            typingSpeed = 500; // Pause avant de commencer la nouvelle phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Démarrer l'animation après un court délai
    setTimeout(type, 1000);
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
