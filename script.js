// Cape Africa Projects — script.js

// Mobile menu toggle
(function () {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  // Close on link click
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
    })
  );
})();

// Highlight active nav link based on current page
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .mobile-nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Footer year
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Contact form -> opens mail client with prefilled message
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString();
    const email = (data.get('email') || '').toString();
    const phone = (data.get('phone') || '').toString();
    const message = (data.get('message') || '').toString();
    const subject = encodeURIComponent(`Project enquiry from ${name || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProject details:\n${message}`
    );
    window.location.href = `mailto:aaqildavids@icloud.com?subject=${subject}&body=${body}`;
  });
})();
