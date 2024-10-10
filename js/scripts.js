// Smooth scrolling effect for navigation
// Smooth scrolling effect for navigation with enhanced animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + startPosition;
        let startTime = null;
        const duration = 1000; // 1 second animation

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });
});

// Initialize AOS with enhanced settings
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100,
    easing: 'ease-in-out-cubic'
});

// Add 10/10 rating animations
const elements = document.querySelectorAll('.project-card, h1, h2, .animated-button');

elements.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.animation = 'pulse 0.5s infinite alternate';
    });

    el.addEventListener('mouseout', () => {
        el.style.animation = '';
    });
});

// Add a parallax effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallaxElements.forEach(el => {
        let speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Add a typing effect to headings
const headings = document.querySelectorAll('h1, h2');

headings.forEach(heading => {
    const text = heading.textContent;
    heading.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

// Add confetti effect on button click
document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});
