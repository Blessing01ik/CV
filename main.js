document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  const overlay = document.querySelector('.overlay');

  // Toggle menu open/close
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  // Close menu when overlay is clicked
  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    toggle.classList.remove('open');
    overlay.classList.remove('show');
  });

  // Optional: Close menu on navigation link click (for single-page apps)
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.classList.remove('open');
      overlay.classList.remove('show');
    });
  });
});