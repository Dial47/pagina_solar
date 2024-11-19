document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-links a');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    // Testimonial slider functionality
    const testimonials = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentTestimonial = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    };

    const nextTestimonial = () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    };

    const prevTestimonial = () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    };

    prevButton.addEventListener('click', prevTestimonial);
    nextButton.addEventListener('click', nextTestimonial);

    // Show the first testimonial initially
    showTestimonial(currentTestimonial);

    // Auto-rotate testimonials
    setInterval(nextTestimonial, 5000);

    // Scroll reveal animations
    ScrollReveal().reveal('.benefit-card', { delay: 200, distance: '50px', interval: 100 });
    ScrollReveal().reveal('.about-content', { delay: 200, distance: '50px' });
    ScrollReveal().reveal('.installation-steps, .installation-image', { delay: 200, distance: '50px', interval: 100 });
    ScrollReveal().reveal('.faq-list details', { delay: 200, distance: '50px', interval: 100 });
});