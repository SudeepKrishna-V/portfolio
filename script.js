// Initialize Lucide Icons
lucide.createIcons();

// Vanta.js 3D Background Setup
window.addEventListener('DOMContentLoaded', () => {
    if (window.VANTA) {
        window.VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff416c, // Accent color 1
            backgroundColor: 0x0d0d0d, // Dark background
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Intersection Observer for scroll animations (Brutalist style elements)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target); // Run once
        }
    });
}, observerOptions);

// Elements to animate
const animatedElements = document.querySelectorAll('.stat-box, .brutal-card, .about-text-area, .section-heading, .hero-left, .hero-visual');

// Setup initial state for animated elements
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add css class for animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);
