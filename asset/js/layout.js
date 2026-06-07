// Shared header HTML string
const HEADER_HTML = `
<!-- TOP BAR -->
<div class="topbar">
  <div class="container">
    <div class="topbar-inner">
      <div class="topbar-left">
        <span>📞 +৮৮০-২-৯৮৭৬৫৪৩</span>
        <span>✉️ info@school.edu.bd</span>
        <span>🕐 সকাল ৮টা - বিকাল ৪টা</span>
      </div>
      <div class="topbar-right">
        <div class="social-links">
          <a href="#" title="Facebook">𝑓</a>
          <a href="#" title="YouTube">▶</a>
          <a href="#" title="Twitter">𝕏</a>
        </div>
        <button class="lang-btn">English</button>
      </div>
    </div>
  </div>
</div>

<!-- HEADER -->
<header class="header">
  <div class="container">
    <div class="header-main">
      <div class="school-brand">
        <div class="school-logo">🏫</div>
        <div>
          <div class="school-name-en">Bangladesh Government High School</div>
          <div class="school-name-bn">বাংলাদেশ সরকারি <span>উচ্চ বিদ্যালয়</span></div>
          <div class="school-tagline">EIIN: ১২৩৪৫ | BANBEIS কোড: ৬৭৮৯০ | ঢাকা, বাংলাদেশ</div>
        </div>
      </div>
      <div class="header-info">
        <div class="info-item">
          <div class="info-icon">📅</div>
          <div>
            <div class="info-label">প্রতিষ্ঠাকাল</div>
            <div class="info-value">১৯৫২ সাল</div>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🎓</div>
          <div>
            <div class="info-label">শ্রেণি</div>
            <div class="info-value">ষষ্ঠ – দশম</div>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🏅</div>
          <div>
            <div class="info-label">পাসের হার</div>
            <div class="info-value">৯৮.৫%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- NAVBAR -->
<nav class="navbar">
  <div class="container">
    <div class="navbar-inner">
      <ul class="nav-menu" id="navMenu">
        <li><a href="../index.html">🏠 হোম</a></li>
        <li>
          <a href="about.html">বিদ্যালয় সম্পর্কে <span class="arrow">▾</span></a>
          <ul class="dropdown">
            <li><a href="about.html">বিদ্যালয়ের ইতিহাস</a></li>
            <li><a href="about.html#vision">লক্ষ্য ও উদ্দেশ্য</a></li>
            <li><a href="about.html#committee">পরিচালনা পর্ষদ</a></li>
            <li><a href="about.html#awards">পুরস্কার ও অর্জন</a></li>
          </ul>
        </li>
        <li>
          <a href="academic.html">একাডেমিক <span class="arrow">▾</span></a>
          <ul class="dropdown">
            <li><a href="academic.html">শ্রেণিসমূহ</a></li>
            <li><a href="academic.html#routine">ক্লাস রুটিন</a></li>
            <li><a href="academic.html#syllabus">সিলেবাস</a></li>
            <li><a href="academic.html#grading">গ্রেডিং সিস্টেম</a></li>
          </ul>
        </li>
        <li><a href="notice.html">📋 নোটিশ বোর্ড</a></li>
        <li><a href="result.html">📊 ফলাফল</a></li>
        <li><a href="teachers.html">👩‍🏫 শিক্ষকমণ্ডলী</a></li>
        <li><a href="gallery.html">🖼️ গ্যালারি</a></li>
        <li><a href="contact.html">📞 যোগাযোগ</a></li>
      </ul>
      <div class="nav-cta">
        <button class="btn-nav btn-nav-outline" onclick="window.location.href='admission.html'">ভর্তি তথ্য</button>
        <button class="btn-nav btn-nav-solid" onclick="window.location.href='portals.html'">পোর্টাল লগইন</button>
      </div>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
  <div class="mobile-nav" id="mobileNav">
    <a href="../index.html">🏠 হোম</a>
    <a href="about.html">বিদ্যালয় সম্পর্কে</a>
    <a href="academic.html">একাডেমিক</a>
    <a href="notice.html">নোটিশ বোর্ড</a>
    <a href="result.html">ফলাফল</a>
    <a href="teachers.html">শিক্ষকমণ্ডলী</a>
    <a href="gallery.html">গ্যালারি</a>
    <a href="contact.html">যোগাযোগ</a>
    <a href="admission.html">ভর্তি তথ্য</a>
    <a href="portals.html">পোর্টাল লগইন</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-row">
          <div class="footer-logo">🏫</div>
          <div class="footer-school-name">
            বাংলাদেশ সরকারি উচ্চ বিদ্যালয়
            <small>Bangladesh Government High School</small>
          </div>
        </div>
        <p class="footer-desc">১৯৫২ সাল থেকে শিক্ষার আলো ছড়িয়ে দিচ্ছে আমাদের বিদ্যালয়। জ্ঞান, মেধা ও মূল্যবোধে গড়ে তুলছি আগামীর প্রজন্ম।</p>
        <div class="footer-contact">
          <div class="footer-contact-item"><span class="icon">📍</span> <span>মতিঝিল, ঢাকা – ১০০০, বাংলাদেশ</span></div>
          <div class="footer-contact-item"><span class="icon">📞</span> <span>+৮৮০-২-৯৮৭৬৫৪৩</span></div>
          <div class="footer-contact-item"><span class="icon">✉️</span> <span>info@school.edu.bd</span></div>
        </div>
      </div>
      <div class="footer-col">
        <h4>দ্রুত লিঙ্ক</h4>
        <div class="footer-links">
          <a href="../index.html">হোম</a>
          <a href="about.html">বিদ্যালয় সম্পর্কে</a>
          <a href="notice.html">নোটিশ বোর্ড</a>
          <a href="result.html">ফলাফল</a>
          <a href="teachers.html">শিক্ষকমণ্ডলী</a>
          <a href="gallery.html">গ্যালারি</a>
          <a href="contact.html">যোগাযোগ</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>পোর্টাল</h4>
        <div class="footer-links">
          <a href="portals.html">শিক্ষার্থী পোর্টাল</a>
          <a href="portals.html">শিক্ষক পোর্টাল</a>
          <a href="portals.html">প্রশাসন প্যানেল</a>
          <a href="admission.html">অনলাইন ভর্তি</a>
          <a href="result.html">ফলাফল অনুসন্ধান</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>অবস্থান</h4>
        <div class="footer-map">📍<br>মতিঝিল, ঢাকা</div>
        <p style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.6;margin-top:8px;">🕐 সকাল ৮টা – বিকাল ৪টা<br>শুক্রবার ও সরকারি ছুটি বন্ধ</p>
      </div>
    </div>
  </div>
  <div style="background:rgba(0,0,0,0.3);border-top:1px solid rgba(255,255,255,0.06);">
    <div class="container">
      <div class="footer-bottom">
        <span>© ২০২৫ বাংলাদেশ সরকারি উচ্চ বিদ্যালয়। সর্বস্বত্ব সংরক্ষিত।</span>
        <div class="footer-bottom-links">
          <a href="#">গোপনীয়তা নীতি</a>
          <a href="#">ব্যবহারের শর্তাবলী</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

// Inject header & footer
function injectLayout() {
  const headerTarget = document.getElementById('site-header');
  const footerTarget = document.getElementById('site-footer');
  if (headerTarget) headerTarget.innerHTML = HEADER_HTML;
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;
}

if (document.getElementById('site-header') || document.getElementById('site-footer')) {
  injectLayout();
} else {
  document.addEventListener('DOMContentLoaded', injectLayout);
}
