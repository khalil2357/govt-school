// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    mobileNav.classList.contains('open')
      ? spans[1].style.opacity = '0'
      : spans[1].style.opacity = '1';
  });
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString('bn-BD');
  }, 16);
}

const counters = document.querySelectorAll('[data-count]');
let counted = false;

const observeCounters = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counted) {
      counted = true;
      counters.forEach(el => {
        animateCounter(el, parseInt(el.getAttribute('data-count')));
      });
    }
  });
}, { threshold: 0.3 });

counters.forEach(el => observeCounters.observe(el));

// ===== SCROLL ANIMATION =====
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ===== STICKY HEADER SHADOW =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header && header.classList.add('scrolled');
  } else {
    header && header.classList.remove('scrolled');
  }
});

// ===== RESULT SEARCH =====
const resultForm = document.getElementById('resultForm');
const resultOutput = document.getElementById('resultOutput');

if (resultForm) {
  resultForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const roll = document.getElementById('rollInput').value;
    const exam = document.getElementById('examInput').value;
    const year = document.getElementById('yearInput').value;

    if (!roll || !exam || !year) {
      showToast('সকল তথ্য পূরণ করুন', 'error');
      return;
    }

    // Simulate result
    if (resultOutput) {
      resultOutput.innerHTML = `
        <div style="background:#e8f5ee;border:1.5px solid #009441;border-radius:12px;padding:28px;margin-top:20px;">
          <h3 style="color:#006a2e;font-size:18px;margin-bottom:16px;font-family:'Hind Siliguri',sans-serif;">📋 পরীক্ষার ফলাফল</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
            <div><span style="font-size:12px;color:#777;">রোল নম্বর</span><br><strong style="font-size:16px;">${roll}</strong></div>
            <div><span style="font-size:12px;color:#777;">পরীক্ষা</span><br><strong style="font-size:16px;">${exam}</strong></div>
            <div><span style="font-size:12px;color:#777;">সন</span><br><strong style="font-size:16px;">${year}</strong></div>
            <div><span style="font-size:12px;color:#777;">জিপিএ</span><br><strong style="font-size:22px;color:#009441;">৫.০০</strong></div>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:13px;font-family:'Hind Siliguri',sans-serif;">
            <thead>
              <tr style="background:#006a2e;color:#fff;">
                <th style="padding:8px 12px;text-align:left;">বিষয়</th>
                <th style="padding:8px 12px;text-align:center;">প্রাপ্ত নম্বর</th>
                <th style="padding:8px 12px;text-align:center;">গ্রেড</th>
              </tr>
            </thead>
            <tbody>
              ${[['বাংলা','৮৮','A+'],['ইংরেজি','৮২','A+'],['গণিত','৯১','A+'],['বিজ্ঞান','৮৬','A+'],['সমাজ বিজ্ঞান','৮৪','A+']].map((r,i) =>
                `<tr style="background:${i%2===0?'#f5f5f5':'#fff'}">
                  <td style="padding:8px 12px;">${r[0]}</td>
                  <td style="padding:8px 12px;text-align:center;">${r[1]}</td>
                  <td style="padding:8px 12px;text-align:center;color:#009441;font-weight:700;">${r[2]}</td>
                </tr>`
              ).join('')}
            </tbody>
          </table>
          <div style="text-align:right;margin-top:16px;">
            <button onclick="window.print()" style="background:#c8102e;color:#fff;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;font-family:'Hind Siliguri',sans-serif;font-size:13px;font-weight:600;">🖨️ প্রিন্ট করুন</button>
          </div>
        </div>`;
      resultOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// ===== ADMISSION FORM =====
const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
  admissionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ আবেদন সফলভাবে জমা হয়েছে! আপনার আবেদন আইডি: ADM-২০২৫-০০৪৭৮', 'success');
    admissionForm.reset();
  });
}

// ===== TOAST NOTIFICATIONS =====
function showToast(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `
    position:fixed;bottom:28px;right:28px;z-index:9999;
    background:${type === 'success' ? '#009441' : '#c8102e'};
    color:#fff;padding:14px 24px;border-radius:10px;
    font-size:14px;font-family:'Hind Siliguri',sans-serif;
    box-shadow:0 8px 30px rgba(0,0,0,0.2);
    max-width:380px;line-height:1.5;
    animation:slideIn 0.3s ease;
  `;
  toast.textContent = msg;

  const style = document.createElement('style');
  style.textContent = `@keyframes slideIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`;
  document.head.appendChild(style);

  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 4000);
}

// ===== TAB SYSTEM =====
document.querySelectorAll('[data-tab-trigger]').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.tabTrigger;
    const target = btn.dataset.tab;
    document.querySelectorAll(`[data-tab-trigger="${group}"]`).forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-tab-content="${group}"]`).forEach(c => c.classList.add('hidden'));
    btn.classList.add('active');
    document.querySelector(`[data-tab-content="${group}"][data-tab-id="${target}"]`)?.classList.remove('hidden');
  });
});

// ===== ACTIVE NAV =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
    a.closest('li')?.classList.add('active');
  }
});

// ===== NOTICE FILTER TABS =====
document.querySelectorAll('.notice-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.notice-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.notice-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});