// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 31, 63, 0.98)';
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(0, 31, 63, 0.95)';
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
    }
});

// Mobile Menu Toggle (Simplified)
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

// Create mobile menu button if it doesn't exist
if (window.innerWidth <= 768) {
    const menuBtn = document.createElement('div');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.style.color = 'white';
    menuBtn.style.fontSize = '1.5rem';
    menuBtn.style.cursor = 'pointer';
    nav.appendChild(menuBtn);

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

// Portfolio Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

// Contact Form Submission (Mock)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you! Your message has been sent successfully. We will get back to you soon.');
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });
}
