// Ottoman Garrison Analysis Website JavaScript
// Adapted from personal academic website

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Change icon
      const icon = this.querySelector('span');
      if (icon) {
        icon.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu && !event.target.closest('nav')) {
      navMenu.classList.remove('active');
      const icon = mobileMenuToggle?.querySelector('span');
      if (icon) icon.textContent = '☰';
    }
  });
  
  // Highlight active navigation link
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkHref = (link.getAttribute('href') || '');
    const linkPage = linkHref === './' ? 'index' : linkHref.replace('.html', '');
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index') ||
        (currentPage === 'index' && linkPage === 'index')) {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - 100; // Account for sticky nav
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements with fade-in class
  document.querySelectorAll('.card, .viz-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Add current year to footer
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Language switching functionality
  const languageDropdown = document.querySelector('.language-dropdown');
  const languageToggle = document.querySelector('.language-toggle');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentLangSpan = document.querySelector('.current-lang');
  
  // Get saved language preference or default to Turkish
  let currentLang = localStorage.getItem('siteLanguage') || 'en';
  
  // Initialize language
  function initLanguage() {
    updateLanguage(currentLang);
    updateLanguageSelector(currentLang);
  }
  
  // Update language selector UI
  function updateLanguageSelector(lang) {
    if (currentLangSpan) {
      currentLangSpan.textContent = lang.toUpperCase();
    }
    langOptions.forEach(option => {
      option.classList.remove('active');
      if (option.getAttribute('data-lang') === lang) {
        option.classList.add('active');
      }
    });
  }
  
  // Update page language
  function updateLanguage(lang) {
    // Update navigation links (data-tr and data-en attributes)
    document.querySelectorAll('[data-tr][data-en]').forEach(element => {
      if (lang === 'tr') {
        element.textContent = element.getAttribute('data-tr');
      } else {
        element.textContent = element.getAttribute('data-en');
      }
    });
    
    // Update all elements with data-tr-text and data-en-text attributes
    document.querySelectorAll('[data-tr-text][data-en-text]').forEach(element => {
      if (lang === 'tr') {
        element.textContent = element.getAttribute('data-tr-text');
      } else {
        element.textContent = element.getAttribute('data-en-text');
      }
    });
    
    // Update elements with data-tr-text attribute only (for paragraphs and other content)
    document.querySelectorAll('[data-tr-text]').forEach(element => {
      // Skip if already processed above
      if (!element.hasAttribute('data-en-text')) return;
      
      if (lang === 'tr') {
        element.textContent = element.getAttribute('data-tr-text');
      } else if (element.hasAttribute('data-en-text')) {
        element.textContent = element.getAttribute('data-en-text');
      }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('siteLanguage', lang);
    currentLang = lang;
    
    // Dispatch language change event for other modules
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
  
  // Toggle language dropdown
  if (languageToggle) {
    languageToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      languageDropdown.classList.toggle('active');
    });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (languageDropdown && !e.target.closest('.language-dropdown')) {
      languageDropdown.classList.remove('active');
    }
  });
  
  // Handle language selection
  langOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedLang = this.getAttribute('data-lang');
      updateLanguage(selectedLang);
      updateLanguageSelector(selectedLang);
      languageDropdown.classList.remove('active');
    });
  });
  
  // Initialize on page load
  initLanguage();
});
