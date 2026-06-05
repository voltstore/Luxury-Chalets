/* ============================================================
   MAIN.JS — Logic & Dynamic Rendering
   ============================================================ */

const WA_NUMBER = '966599804296';
const WA_DEFAULT_MSG = encodeURIComponent('مرحباً، أرغب بالاستفسار عن حجز شاليه');

/* ══════════════════════════════════════════════
   WHATSAPP HELPERS
   ══════════════════════════════════════════════ */
function waLink(msg) {
  const lang = document.body.getAttribute('data-lang') || 'ar';
  const text = msg
    ? encodeURIComponent(msg)
    : (lang === 'en'
        ? encodeURIComponent("Hello, I'd like to inquire about booking a chalet")
        : WA_DEFAULT_MSG);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

function waLinkChalet(nameAr, nameEn) {
  const lang = document.body.getAttribute('data-lang') || 'ar';
  const msg  = lang === 'en'
    ? `Hello, I'd like to book the chalet: ${nameEn}`
    : `مرحباً، أرغب بحجز شاليه ${nameAr}`;
  return waLink(msg);
}

/* تحديث روابط واتساب عند تغيير اللغة */
document.addEventListener('langChanged', () => {
  document.querySelectorAll('[data-wa-chalet]').forEach(el => {
    const { nameAr, nameEn } = el.dataset;
    el.href = waLinkChalet(nameAr ? decodeURIComponent(nameAr) : '', nameEn || '');
  });
  document.querySelectorAll('[data-wa-default]').forEach(el => {
    el.href = waLink();
  });
});

/* ══════════════════════════════════════════════
   SVG ICONS LIBRARY
   ══════════════════════════════════════════════ */
const ICONS = {
  pool:     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M12 3v9"/><path d="M8 7l4-4 4 4"/></svg>',
  wifi:     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>',
  bbq:      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M8 12h8M12 8v8"/></svg>',
  parking:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>',
  cinema:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  kitchen:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 2v5l-2 2v12h8V9L14 7V2"/><path d="M10 7h4M2 12h4M2 6v12"/></svg>',
  security: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  games:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 12h4M8 10v4M15 12h.01M17 10h.01"/></svg>',
  ac:       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="9" rx="2"/><path d="M8 17H5.5a3.5 3.5 0 0 0 0 7h13a3.5 3.5 0 0 0 0-7H16M12 13v4"/></svg>',
  beach:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1"/><path d="M17 3a5 5 0 0 1-5 5 5 5 0 0 1-5-5"/></svg>',
  gym:      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 5v14M18 5v14M6 9h12M6 15h12"/></svg>',
  jacuzzi:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><circle cx="12" cy="10" r="4"/></svg>',
  fireplace:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M3 12v9M21 12v9M3 7l9-5 9 5M9 21v-6a3 3 0 0 1 6 0v6"/></svg>',
  garden:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22V12M5 12a7 7 0 0 0 14 0"/><path d="M7 10a5 5 0 0 1 10 0"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
  hiking:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 20l5-10 4 5 3-5 5 10M5 8l3-5 2 3"/></svg>',
  firepit:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 12c0-5 4-8 4-8s-1 4 1 6c.5.7 1 1 1 2a6 6 0 0 1-12 0c0-3 3-5 3-8 0 0 3 3 3 8z"/><path d="M8 21h8"/></svg>',
  playground:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v6M9 9l3 3 3-3M4 21l5-12M20 21l-5-12M4 21h16"/></svg>',
  hall:     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="10" width="18" height="11" rx="1"/><path d="M3 10l9-7 9 7"/><path d="M9 21v-5h6v5"/></svg>',
  shield:   '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  clock:    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  map:      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clean:    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M3 6h18M3 18h18"/><circle cx="20" cy="6" r="2" fill="currentColor"/></svg>',
  star:     '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  chevronR: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>',
  chevronL: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>',
  location: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  email:    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  pin:      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  time:     '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  arrowUp:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>',
  persons:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  bed:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M2 8h20v8"/><path d="M2 20h20"/><path d="M20 8V4"/></svg>',
  zoom:     '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
};

/* ══════════════════════════════════════════════
   STARS RENDERER
   ══════════════════════════════════════════════ */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full)      html += '★';
    else if (i === full && half) html += '½';
    else               html += '☆';
  }
  return html;
}

/* ══════════════════════════════════════════════
   CHALET CARD BUILDER
   ══════════════════════════════════════════════ */
function buildChaletCard(chalet) {
  const lang     = document.body.getAttribute('data-lang') || 'ar';
  const name     = lang === 'en' ? chalet.nameEn : chalet.nameAr;
  const location = lang === 'en' ? chalet.locationEn : chalet.locationAr;
  const badge    = chalet.badge ? (lang === 'en' ? chalet.badge.en : chalet.badge.ar) : null;
  const imgSrc   = chalet.images[0];
  const amenities = chalet.amenities.slice(0, 3);
  const waMsg    = lang === 'en'
    ? `Hello, I'd like to book: ${chalet.nameEn}`
    : `مرحباً، أرغب بحجز شاليه ${chalet.nameAr}`;

  return `
    <article class="chalet-card reveal" data-city="${lang === 'en' ? chalet.cityEn.toLowerCase() : chalet.cityAr}" data-cat="${chalet.category}">
      <div class="chalet-card-image img-zoom-wrap">
        <img
          src="${imgSrc}"
          alt="${name}"
          loading="lazy"
          width="640" height="400"
          onerror="this.src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=640&q=75'"
        >
        ${badge ? `<span class="chalet-card-badge">${badge}</span>` : ''}
        <div class="chalet-card-overlay"></div>
        <div class="chalet-card-quick">
          <a href="chalet-details.html?id=${chalet.id}" class="btn btn-primary btn-sm btn-ripple" data-i18n="card.details">التفاصيل</a>
        </div>
      </div>
      <div class="chalet-card-body">
        <p class="chalet-card-location">
          ${ICONS.location}
          <span>${location}</span>
        </p>
        <h3 class="chalet-card-name">${name}</h3>
        <div class="chalet-card-rating">
          <span class="stars" aria-label="تقييم ${chalet.rating}">${renderStars(chalet.rating)}</span>
          <span class="rating-count">(${chalet.reviewCount})</span>
        </div>
        <div class="chalet-card-amenities">
          ${amenities.map(a => `
            <span class="amenity-tag">
              ${ICONS[a.icon] || ''}
              ${lang === 'en' ? a.labelEn : a.labelAr}
            </span>
          `).join('')}
          <span class="amenity-tag">${ICONS.persons} ${chalet.capacity} ${lang === 'en' ? 'guests' : 'ضيف'}</span>
        </div>
        <div class="chalet-card-footer">
          <div class="chalet-price">
            <span class="chalet-price-amount">${chalet.pricePerNight.toLocaleString('ar-SA')}</span>
            <span class="chalet-price-unit">${lang === 'en' ? 'SAR / Night' : 'ريال / الليلة'}</span>
          </div>
          <div style="display:flex;gap:0.5rem">
            <a
              href="${waLink(waMsg)}"
              class="btn btn-whatsapp btn-sm btn-ripple"
              target="_blank"
              rel="noopener"
              data-wa-chalet
              data-name-ar="${encodeURIComponent(chalet.nameAr)}"
              data-name-en="${chalet.nameEn}"
              aria-label="احجز ${name} عبر واتساب"
            >
              ${ICONS.whatsapp}
            </a>
            <a href="chalet-details.html?id=${chalet.id}" class="btn btn-outline btn-sm" data-i18n="card.details">التفاصيل</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

/* ══════════════════════════════════════════════
   RENDER FEATURED CHALETS (index.html)
   ══════════════════════════════════════════════ */
function renderFeaturedChalets() {
  const container = document.getElementById('featured-chalets');
  if (!container || typeof CHALETS_DATA === 'undefined') return;

  const featured = CHALETS_DATA.filter(c => c.featured).slice(0, 4);
  container.innerHTML = featured.map(buildChaletCard).join('');
}

/* ══════════════════════════════════════════════
   RENDER ALL CHALETS (chalets.html)
   ══════════════════════════════════════════════ */
function renderAllChalets(filter = {}) {
  const container = document.getElementById('all-chalets');
  if (!container || typeof CHALETS_DATA === 'undefined') return;

  let data = [...CHALETS_DATA];

  /* فلتر المدينة */
  if (filter.city && filter.city !== 'all') {
    const lang = document.body.getAttribute('data-lang') || 'ar';
    data = data.filter(c =>
      (lang === 'en' ? c.cityEn.toLowerCase() : c.cityAr) === filter.city
    );
  }

  /* فلتر النوع */
  if (filter.cat && filter.cat !== 'all') {
    data = data.filter(c => c.category === filter.cat);
  }

  if (!data.length) {
    const lang = document.body.getAttribute('data-lang') || 'ar';
    container.innerHTML = `<p class="text-center" style="color:var(--text-muted);padding:3rem;grid-column:1/-1">${lang === 'en' ? 'No results. Try another filter.' : 'لا توجد نتائج. جرب فلتراً آخر.'}</p>`;
    return;
  }

  container.innerHTML = data.map(buildChaletCard).join('');

  /* إعادة تشغيل Observer للعناصر الجديدة */
  if (typeof revealObserver !== 'undefined') {
    container.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      revealObserver.observe(el);
    });
  }
}

/* ══════════════════════════════════════════════
   CHALET FILTER (chalets.html)
   ══════════════════════════════════════════════ */
function initChaletFilter() {
  const cityChips = document.querySelectorAll('.city-filter .filter-chip');
  const catChips  = document.querySelectorAll('.cat-filter .filter-chip');
  if (!cityChips.length) return;

  let currentCity = 'all';
  let currentCat  = 'all';

  function applyFilter() {
    renderAllChalets({ city: currentCity, cat: currentCat });
  }

  cityChips.forEach(chip => {
    chip.addEventListener('click', () => {
      cityChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCity = chip.dataset.city || 'all';
      applyFilter();
    });
  });

  catChips.forEach(chip => {
    chip.addEventListener('click', () => {
      catChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCat = chip.dataset.cat || 'all';
      applyFilter();
    });
  });
}

/* ══════════════════════════════════════════════
   RENDER CHALET DETAILS (chalet-details.html)
   ══════════════════════════════════════════════ */
function renderChaletDetails() {
  const container = document.getElementById('chalet-details-root');
  if (!container || typeof CHALETS_DATA === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  const chalet = CHALETS_DATA.find(c => c.id === id) || CHALETS_DATA[0];

  const lang = document.body.getAttribute('data-lang') || 'ar';
  const name = lang === 'en' ? chalet.nameEn : chalet.nameAr;
  const desc = lang === 'en' ? chalet.descriptionEn : chalet.descriptionAr;
  const loc  = lang === 'en' ? chalet.locationEn : chalet.locationAr;
  const waMsg = lang === 'en'
    ? `Hello, I'd like to book: ${chalet.nameEn}`
    : `مرحباً، أرغب بحجز شاليه ${chalet.nameAr}`;

  /* Update page title & breadcrumb */
  document.title = `${name} — شاليهات الفخامة`;
  const breadName = document.getElementById('breadcrumb-name');
  if (breadName) breadName.textContent = name;

  container.innerHTML = `
    <div class="details-layout" style="display:grid;grid-template-columns:1fr 360px;gap:3rem;align-items:start">

      <!-- Media + Info -->
      <div>
        <!-- Gallery -->
        <div class="details-gallery reveal">
          <div class="details-main-img img-zoom-wrap" id="main-img" data-lightbox="${chalet.images[0]}">
            <img id="main-img-src"
              src="${chalet.images[0]}"
              alt="${name}"
              width="1200" height="675"
              loading="eager"
            >
          </div>
          <div class="details-thumbs">
            ${chalet.images.slice(0, 5).map((src, i) => `
              <div class="details-thumb ${i === 0 ? 'active' : ''}"
                onclick="setMainImg('${src}', this)"
                data-lightbox="${src}"
              >
                <img src="${src}" alt="${name} ${i + 1}" loading="lazy" width="200" height="150">
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Info -->
        <div class="reveal" style="margin-top:2.5rem">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem">
            <div>
              <p class="chalet-card-location" style="margin-bottom:0.5rem">
                ${ICONS.location} <span>${loc}</span>
              </p>
              <h1 style="font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;line-height:1.15">${name}</h1>
            </div>
            <div class="chalet-card-rating" style="margin-top:0.5rem">
              <span class="stars" style="font-size:1.1rem">${renderStars(chalet.rating)}</span>
              <span class="rating-count">(${chalet.reviewCount} ${lang === 'en' ? 'reviews' : 'تقييم'})</span>
            </div>
          </div>

          <!-- Specs -->
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem">
            ${[
              { icon: 'persons', labelAr: 'الطاقة', labelEn: 'Capacity',  val: chalet.capacity + (lang === 'en' ? ' guests' : ' ضيف') },
              { icon: 'bed',     labelAr: 'غرف النوم', labelEn: 'Bedrooms', val: chalet.bedrooms },
              { icon: 'shield',  labelAr: 'الحمامات', labelEn: 'Bathrooms', val: chalet.bathrooms },
              { icon: 'map',     labelAr: 'المساحة', labelEn: 'Area',      val: chalet.area + ' m²' }
            ].map(s => `
              <div style="background:var(--bg-section);padding:1rem;border-radius:var(--radius-md);text-align:center;border:1px solid var(--border-light)">
                <div style="color:var(--gold);margin-bottom:0.4rem">${ICONS[s.icon] || ''}</div>
                <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:0.25rem">${lang === 'en' ? s.labelEn : s.labelAr}</div>
                <div style="font-weight:700;font-size:1rem">${s.val}</div>
              </div>
            `).join('')}
          </div>

          <!-- Description -->
          <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:1rem" data-i18n="details.about">${lang === 'en' ? 'About the Chalet' : 'عن الشاليه'}</h2>
          <p style="color:var(--text-secondary);line-height:1.9;margin-bottom:2rem">${desc}</p>

          <!-- Amenities -->
          <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:1.25rem" data-i18n="details.amenities">${lang === 'en' ? 'Amenities & Services' : 'المرافق والخدمات'}</h2>
          <div class="amenities-grid">
            ${chalet.amenities.map(a => `
              <div class="amenity-item">
                ${ICONS[a.icon] || ''}
                <span class="amenity-item-label">${lang === 'en' ? a.labelEn : a.labelAr}</span>
              </div>
            `).join('')}
          </div>

          <!-- Map -->
          <h2 style="font-size:1.2rem;font-weight:700;margin-top:2rem;margin-bottom:1rem" data-i18n="details.location">${lang === 'en' ? 'Location' : 'الموقع'}</h2>
          <div class="map-placeholder">
            ${ICONS.pin}
            <span style="font-weight:600">${loc}</span>
            <span style="font-size:0.82rem" data-i18n="details.mapNote">${lang === 'en' ? 'Contact us for the detailed location' : 'تواصل معنا للحصول على الموقع التفصيلي'}</span>
          </div>
        </div>
      </div>

      <!-- Booking Card -->
      <aside>
        <div class="booking-card reveal-right">
          <div class="booking-price-row">
            <span class="booking-price-amount">${chalet.pricePerNight.toLocaleString('ar-SA')}</span>
            <span class="booking-price-currency">SAR</span>
            <span class="booking-price-unit">/ ${lang === 'en' ? 'Night' : 'ليلة'}</span>
          </div>

          <a
            href="${waLink(waMsg)}"
            class="btn btn-whatsapp btn-ripple"
            style="width:100%;margin-bottom:0.75rem;font-size:1rem"
            target="_blank" rel="noopener"
            data-wa-chalet
            data-name-ar="${encodeURIComponent(chalet.nameAr)}"
            data-name-en="${chalet.nameEn}"
          >
            ${ICONS.whatsapp}
            <span data-i18n="book.now">${lang === 'en' ? 'Book Now via WhatsApp' : 'احجز الآن عبر واتساب'}</span>
          </a>

          <a
            href="tel:+966599804296"
            class="btn btn-outline"
            style="width:100%;margin-bottom:1.5rem"
          >
            ${ICONS.phone}
            <span data-i18n="book.call">${lang === 'en' ? 'Call Us' : 'اتصل بنا'}</span>
          </a>

          <p style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--gold);margin-bottom:0.75rem" data-i18n="book.includes">${lang === 'en' ? 'Includes:' : 'يشمل:'}</p>
          <ul style="display:flex;flex-direction:column;gap:0.6rem">
            ${[
              lang === 'en' ? 'Chalet preparation 2 hours before arrival' : 'تحضير الشاليه 2 ساعة قبل وصولك',
              lang === 'en' ? 'Guest assistance around the clock' : 'مساعدة الضيوف على مدار الساعة',
              lang === 'en' ? 'Daily cleaning on request' : 'تنظيف يومي عند الطلب'
            ].map(item => `
              <li style="display:flex;align-items:center;gap:0.6rem;font-size:0.85rem;color:var(--text-secondary)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                ${item}
              </li>
            `).join('')}
          </ul>

          <div style="margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--border-light);display:flex;justify-content:space-between;align-items:center">
            <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.85rem;color:var(--text-secondary)">
              <span class="stars" style="font-size:0.85rem">${renderStars(chalet.rating)}</span>
              <span>${chalet.rating} (${chalet.reviewCount})</span>
            </div>
            <span style="font-size:0.78rem;color:var(--gold);font-weight:600">✓ ${lang === 'en' ? 'Instantly Available' : 'متاح فوراً'}</span>
          </div>
        </div>
      </aside>
    </div>
  `;

  /* Lightbox on main image click */
  document.getElementById('main-img')?.addEventListener('click', () => {
    const src = document.getElementById('main-img-src')?.src;
    if (src && window._lightbox) window._lightbox.open(src);
  });
}

/* تبديل الصورة الرئيسية */
function setMainImg(src, thumbEl) {
  const mainImg = document.getElementById('main-img-src');
  if (mainImg) mainImg.src = src;

  const mainContainer = document.getElementById('main-img');
  if (mainContainer) mainContainer.dataset.lightbox = src;

  document.querySelectorAll('.details-thumb').forEach(t => t.classList.remove('active'));
  thumbEl?.classList.add('active');
}

/* ══════════════════════════════════════════════
   RENDER TESTIMONIALS
   ══════════════════════════════════════════════ */
function renderTestimonials() {
  const track = document.querySelector('.testimonials-track');
  if (!track || typeof TESTIMONIALS_DATA === 'undefined') return;

  const lang = document.body.getAttribute('data-lang') || 'ar';

  track.innerHTML = TESTIMONIALS_DATA.map(t => `
    <div class="testimonial-slide">
      <div class="testimonial-card">
        <div class="testimonial-quote">"</div>
        <div class="testimonial-stars">${renderStars(t.rating)}</div>
        <p class="testimonial-text">${lang === 'en' ? t.textEn : t.textAr}</p>
        <div class="testimonial-author">
          <img
            src="${t.avatar}"
            alt="${lang === 'en' ? t.nameEn : t.nameAr}"
            class="testimonial-avatar"
            loading="lazy"
            width="52" height="52"
          >
          <div>
            <p class="testimonial-author-name">${lang === 'en' ? t.nameEn : t.nameAr}</p>
            <p class="testimonial-author-city">${lang === 'en' ? t.cityEn : t.cityAr} — ${t.chalet}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  /* Slider dots */
  const dotsContainer = document.querySelector('.slider-dots');
  if (dotsContainer) {
    dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, i) =>
      `<button class="slider-dot ${i === 0 ? 'active' : ''}" aria-label="شهادة ${i + 1}"></button>`
    ).join('');
  }
}

/* ══════════════════════════════════════════════
   CONTACT FORM
   ══════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const lang  = document.body.getAttribute('data-lang') || 'ar';
    const name  = form.querySelector('#f-name')?.value.trim() || '';
    const phone = form.querySelector('#f-phone')?.value.trim() || '';
    const msg   = form.querySelector('#f-message')?.value.trim() || '';
    let valid   = true;

    /* Validation */
    const nameGroup  = form.querySelector('#f-name')?.closest('.form-group');
    const phoneGroup = form.querySelector('#f-phone')?.closest('.form-group');
    const msgGroup   = form.querySelector('#f-message')?.closest('.form-group');

    [nameGroup, phoneGroup, msgGroup].forEach(g => g?.classList.remove('has-error'));

    if (!name)  { nameGroup?.classList.add('has-error');  valid = false; }
    if (!phone) { phoneGroup?.classList.add('has-error'); valid = false; }
    if (!msg)   { msgGroup?.classList.add('has-error');   valid = false; }

    if (!valid) return;

    /* إرسال عبر واتساب */
    const waMsg = lang === 'en'
      ? `Hello,\nName: ${name}\nPhone: ${phone}\nMessage: ${msg}`
      : `مرحباً،\nالاسم: ${name}\nالجوال: ${phone}\nالرسالة: ${msg}`;

    window.open(waLink(waMsg), '_blank');

    /* رسالة نجاح */
    const success = document.getElementById('form-success');
    if (success) success.classList.add('show');

    form.reset();
    setTimeout(() => success?.classList.remove('show'), 5000);
  });
}

/* ══════════════════════════════════════════════
   GALLERY PAGE
   ══════════════════════════════════════════════ */
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container || typeof CHALETS_DATA === 'undefined') return;

  const allImages = [];
  const cats = ['pools', 'outdoor', 'indoor', 'night'];

  CHALETS_DATA.forEach(chalet => {
    chalet.images.forEach((src, i) => {
      allImages.push({
        src,
        cat: cats[i % cats.length],
        alt: chalet.nameAr
      });
    });
  });

  container.innerHTML = allImages.map(img => `
    <div class="gallery-item reveal" data-cat="${img.cat}" data-lightbox="${img.src}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy" width="600" height="400">
      <div class="gallery-item-overlay">
        ${ICONS.zoom}
      </div>
    </div>
  `).join('');

  /* Lightbox على gallery items */
  container.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      if (window._lightbox) window._lightbox.open(el.dataset.lightbox);
    });
  });
}

/* ══════════════════════════════════════════════
   WHATSAPP FLOAT BUTTON
   ══════════════════════════════════════════════ */
function initWaFloat() {
  const btn = document.querySelector('.whatsapp-btn');
  if (btn) {
    btn.href = waLink();
    /* update on lang change */
    document.addEventListener('langChanged', () => { btn.href = waLink(); });
  }
}

/* ══════════════════════════════════════════════
   RE-RENDER ON LANGUAGE CHANGE
   ══════════════════════════════════════════════ */
document.addEventListener('langChanged', () => {
  renderFeaturedChalets();
  renderAllChalets();
  renderTestimonials();
  renderChaletDetails();
  renderGallery();

  /* إعادة مراقبة العناصر */
  setTimeout(() => {
    if (typeof initReveal === 'function') initReveal();
  }, 50);
});

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedChalets();
  renderAllChalets();
  renderTestimonials();
  renderChaletDetails();
  renderGallery();
  initChaletFilter();
  initContactForm();
  initWaFloat();

  /* حفظ مرجع الـ Lightbox */
  window._lightbox = {
    open: (src) => {
      const lb = document.querySelector('.lightbox');
      const img = lb?.querySelector('img');
      if (lb && img) { img.src = src; lb.classList.add('active'); document.body.style.overflow = 'hidden'; }
    }
  };
});
