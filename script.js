// Fade in body after content has loaded
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

let lastScrollTop = 0;
const nav = document.querySelector('nav');
const scrollThreshold = 2; // Add this line
let hideTimeout;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            nav.classList.add('hide');
        }, 10); // 150ms delay
    } else if (scrollTop < lastScrollTop) {
        clearTimeout(hideTimeout);
        nav.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
});

// Use Intersection Observer for card reveals
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        } else {
            entry.target.classList.remove('reveal');
        }
    });
}, {
    threshold: 0.1
});

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});