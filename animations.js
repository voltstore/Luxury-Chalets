/* ============================================================
   ANIMATIONS.JS — Premium Motion | Emil Design Principles
   ============================================================ */

/* ══════════════════════════════════════════════
   SCROLL REVEAL (Intersection Observer)
   ══════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      /* إيقاف المراقبة بعد الظهور لأداء أفضل */
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

function initReveal() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ══════════════════════════════════════════════
   PARALLAX (Hero Background)
   GPU-only: transform translateY
   ══════════════════════════════════════════════ */
function initParallax() {
  const heroImg = document.querySelector('.hero-bg img');
  if (!heroImg) return;

  /* Passive listener for performance */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;
    if (scrollY > maxScroll) return;
    const offset = scrollY * 0.3;
    heroImg.style.transform = `scale(1.06) translateY(${offset}px)`;
  }, { passive: true });
}

/* ══════════════════════════════════════════════
   COUNTER ANIMATION
   Uses requestAnimationFrame — smooth & GPU
   ══════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1800) {
  const isFloat = target % 1 !== 0;
  const startTime = performance.now();
  const start = 0;

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    /* easeOutExpo */
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = start + (target - start) * eased;

    el.textContent = isFloat
      ? current.toFixed(1)
      : Math.floor(current).toLocaleString('ar');

    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString('ar');
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  const counterEls = document.querySelectorAll('[data-counter]');
  if (!counterEls.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseFloat(entry.target.dataset.counter);
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => counterObserver.observe(el));
}

/* ══════════════════════════════════════════════
   TESTIMONIALS SLIDER
   ══════════════════════════════════════════════ */
class TestimonialsSlider {
  constructor(container) {
    if (!container) return;
    this.container = container;
    this.track     = container.querySelector('.testimonials-track');
    this.slides    = container.querySelectorAll('.testimonial-slide');
    this.dots      = container.querySelectorAll('.slider-dot');
    this.prevBtn   = container.querySelector('.slider-btn-prev');
    this.nextBtn   = container.querySelector('.slider-btn-next');
    this.current   = 0;
    this.total     = this.slides.length;
    this.autoTimer = null;

    if (!this.track || !this.total) return;
    this.init();
  }

  init() {
    this.prevBtn?.addEventListener('click', () => { this.go(this.current - 1); this.resetAuto(); });
    this.nextBtn?.addEventListener('click', () => { this.go(this.current + 1); this.resetAuto(); });
    this.dots?.forEach((dot, i) => {
      dot.addEventListener('click', () => { this.go(i); this.resetAuto(); });
    });

    /* Touch/Swipe */
    let startX = 0;
    this.track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    this.track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) this.go(diff > 0 ? this.current + 1 : this.current - 1);
      this.resetAuto();
    }, { passive: true });

    this.startAuto();
    this.update();
  }

  go(index) {
    this.current = ((index % this.total) + this.total) % this.total;
    this.update();
  }

  update() {
    this.track.style.transform = `translateX(${
      document.dir === 'rtl'
        ? this.current * 100
        : -this.current * 100
    }%)`;

    this.dots?.forEach((dot, i) => dot.classList.toggle('active', i === this.current));
  }

  startAuto() {
    this.autoTimer = setInterval(() => this.go(this.current + 1), 5000);
  }

  resetAuto() {
    clearInterval(this.autoTimer);
    this.startAuto();
  }
}

/* ══════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ══════════════════════════════════════════════ */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ══════════════════════════════════════════════
   NAVBAR SCROLL EFFECT
   ══════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ══════════════════════════════════════════════
   BACK TO TOP
   ══════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ══════════════════════════════════════════════
   HAMBURGER / MOBILE DRAWER
   ══════════════════════════════════════════════ */
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const drawer    = document.querySelector('.nav-drawer');
  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    drawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* إغلاق عند الضغط على رابط */
  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* إغلاق عند الضغط خارج القائمة */
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !drawer.contains(e.target)) {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ══════════════════════════════════════════════
   PRELOADER
   ══════════════════════════════════════════════ */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 400);
  });

  /* Fallback: أخفِ بعد 3 ثوانٍ حتى لو لم تكتمل تحميل الصور */
  setTimeout(() => preloader.classList.add('hidden'), 3000);
}

/* ══════════════════════════════════════════════
   SMOOTH ACTIVE NAV LINK
   ══════════════════════════════════════════════ */
function initActiveNav() {
  const links = document.querySelectorAll('.nav-link[href]');
  const page  = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ══════════════════════════════════════════════
   DARK MODE TOGGLE
   ══════════════════════════════════════════════ */
function initDarkMode() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateToggleIcon(saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(next);
  });

  function updateToggleIcon(theme) {
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
}

/* ══════════════════════════════════════════════
   LIGHTBOX
   ══════════════════════════════════════════════ */
class Lightbox {
  constructor() {
    this.el  = document.querySelector('.lightbox');
    this.img = this.el?.querySelector('img');
    if (!this.el) return;
    this.init();
  }

  init() {
    /* إغلاق بالضغط على الخلفية أو زر الإغلاق */
    this.el.addEventListener('click', e => {
      if (e.target === this.el || e.target.closest('.lightbox-close')) {
        this.close();
      }
    });

    /* إغلاق بـ Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.close();
    });

    /* عناصر Gallery */
    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', () => this.open(el.dataset.lightbox));
    });
  }

  open(src) {
    if (!this.img) return;
    this.img.src = src;
    this.el.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.el.classList.remove('active');
    document.body.style.overflow = '';
    /* تأخير مسح الـ src لتجنب وميض */
    setTimeout(() => { if (this.img) this.img.src = ''; }, 300);
  }
}

/* ══════════════════════════════════════════════
   GALLERY FILTER
   ══════════════════════════════════════════════ */
function initGalleryFilter() {
  const chips = document.querySelectorAll('.gallery-filter .filter-chip');
  const items = document.querySelectorAll('.gallery-item[data-cat]');
  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const cat = chip.dataset.cat;
      items.forEach(item => {
        const match = cat === 'all' || item.dataset.cat === cat;
        item.classList.toggle('filter-hide', !match);
        item.classList.toggle('filter-show', match);
      });
    });
  });
}

/* ══════════════════════════════════════════════
   BUTTON RIPPLE
   ══════════════════════════════════════════════ */
function initRipple() {
  document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect   = btn.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height) * 2;
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;
      const circle = document.createElement('span');
      circle.className = 'ripple-circle';
      circle.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`;
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

/* ══════════════════════════════════════════════
   INIT ALL
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initReveal();
  initParallax();
  initCounters();
  initScrollProgress();
  initNavbar();
  initBackToTop();
  initHamburger();
  initActiveNav();
  initDarkMode();
  initGalleryFilter();
  initRipple();

  /* Slider */
  const sliderContainer = document.querySelector('.testimonials-slider');
  if (sliderContainer) new TestimonialsSlider(sliderContainer);

  /* Lightbox */
  new Lightbox();
});
