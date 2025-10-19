document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Mobile dropdown toggle
  dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.classList.toggle('active');
      }
    });
  });

  // Desktop hover menu
  dropdowns.forEach(drop => {
    if (window.innerWidth > 768) {
      drop.addEventListener('mouseenter', () => drop.classList.add('active'));
      drop.addEventListener('mouseleave', () => drop.classList.remove('active'));
    }
  });

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      dropdowns.forEach(drop => drop.classList.remove('active'));
    }
  });

  // Reset menu on resize
  window.addEventListener('resize', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    dropdowns.forEach(drop => drop.classList.remove('active'));
  });
});
