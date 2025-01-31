document.addEventListener('DOMContentLoaded', function() {
    const heroTextH1 = document.querySelector('.hero-text h1');
    const heroTextP = document.querySelector('.hero-text p');
    const heroImage = document.querySelector('.hero-image img');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    heroTextH1.style.animation = 'fadeIn 1s ease-in-out';
    
    heroTextP.style.animation = 'fadeInUp 1.5s ease-in-out';
    
    heroImage.addEventListener('mouseover', () => {
    heroImage.style.transform = 'scale(1.1)';
    });
    heroImage.addEventListener('mouseout', () => {
    heroImage.style.transform = 'scale(1)';
    });
    
    navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
    link.style.color = '#007bff';
    });
    link.addEventListener('mouseout', () => {
    link.style.color = '';
    });
    });
    });