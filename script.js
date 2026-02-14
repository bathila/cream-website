// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Simple reveal on scroll effect
document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-midnight/90', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-midnight/90', 'shadow-lg');
    }
});
