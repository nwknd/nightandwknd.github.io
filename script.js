/* Night and Wknd — Main Script */

(function () {
  'use strict';

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links--mobile');
  const overlay = document.querySelector('.nav-overlay');

  function closeNav() {
    navLinks.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    navLinks.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.contains('is-open');
      isOpen ? closeNav() : openNav();
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    if (overlay) {
      overlay.addEventListener('click', closeNav);
    }
  }

  // Header background on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener(
      'scroll',
      function () {
        header.classList.toggle('scrolled', window.scrollY > 50);
      },
      { passive: true },
    );
  }

  // Scroll-triggered animations
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });

  // Auto copyright year
  var yearEl = document.querySelector('.year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
