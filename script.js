// Sticky Nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Hamburger Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'fixed';
  navLinks.style.top = '70px';
  navLinks.style.right = '24px';
  navLinks.style.background = 'rgba(250,247,240,0.98)';
  navLinks.style.padding = '20px 30px';
  navLinks.style.borderRadius = '16px';
  navLinks.style.boxShadow = '0 8px 32px rgba(26,52,9,0.14)';
  navLinks.style.gap = '18px';
});

// Form Submit
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  success.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => success.classList.add('hidden'), 5000);
}

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply initial hidden state and observe
document.querySelectorAll(
  '.product-card, .location-card, .why-point, .stat, .about-img-wrap, .about-text, .contact-form, .contact-text'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)';
  observer.observe(el);
});

// Smooth active link highlight
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = '#c8a040';
    }
  });
});
