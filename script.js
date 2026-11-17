/**
 * Grand Dial - Shared JavaScript (script.js)
 * Features:
 * 1. Accessible Mobile Hamburger Navigation Toggle with Auto-Close on Anchor Click
 * 2. 3-Click Product Catalog Filter & Quick View Modal with Realistic Imagery
 * 3. URL Query Parameter Support with Slug Normalization (auto-select category and pre-fill model in message)
 * 4. Real-Time & Submit-Time Watch Enquiry Form Validation (10-digit mobile, required fields, preferred contact method)
 * 5. Asynchronous Formspree Submission with On-Page Status Feedback & Clear Placeholder Messaging
 * 6. Google Analytics 4 (GA4) Event Tracking Helper Structure (Safe execution without active Measurement ID)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProductCatalogAndModal();
  initEnquiryForm();
  initGA4TrackingHooks();
});

/* --------------------------------------------------------------------------
   1. Accessible Navigation Menu Toggle
   -------------------------------------------------------------------------- */
function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (!menuToggle || !primaryNav) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    primaryNav.classList.toggle('is-open');
  });

  // Close when clicking outside
  document.addEventListener('click', (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !primaryNav.contains(event.target) &&
      primaryNav.classList.contains('is-open')
    ) {
      menuToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
      menuToggle.focus();
    }
  });

  // Auto-close menu when clicking internal nav links on mobile
  const navLinks = primaryNav.querySelectorAll('.nav-link, .nav-cta a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (primaryNav.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. 3-Click Interactive Product Catalog & Quick View Modal
   -------------------------------------------------------------------------- */
const WATCH_CATALOG = [
  {
    id: "GD-CHRONO-801",
    name: "Grand Chrono Gold Executive",
    category: "mens-watches",
    categoryLabel: "Men's Chronograph",
    badge: "Bestseller",
    price: "₹3,499 (Project Example)",
    originalPrice: "₹5,999",
    discount: "Illustrative Tier",
    caseSize: "43mm Solid Steel",
    movement: "Precision Quartz Chrono",
    waterResist: "5 ATM (50m)",
    warranty: "1-Year Warranty Support",
    strap: "Two-Tone Gold & Steel Bracelet",
    imgUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Grand Chrono Executive Men's Gold and Stainless Steel Watch",
    description: "Designed for corporate professionals and celebration milestones in Indore. Features triple chronograph sub-dials, sapphire-coated crystal, date window, and a brushed gold stainless steel deployment clasp."
  },
  {
    id: "GD-AURA-204",
    name: "Aura Rose Gold Mesh",
    category: "womens-watches",
    categoryLabel: "Women's Elegance",
    badge: "Trending",
    price: "₹2,199 (Project Example)",
    originalPrice: "₹3,999",
    discount: "Illustrative Tier",
    caseSize: "34mm Slim Bezel",
    movement: "Japanese Quartz",
    waterResist: "3 ATM (30m)",
    warranty: "1-Year Warranty Support",
    strap: "Milanese Magnetic Mesh Band",
    imgUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Aura Rose Gold Mesh Minimalist Women's Watch",
    description: "A breathtaking minimalist timepiece for modern women. Ultra-slim 6.8mm case profile, diamond-cut indices, and flexible rose-gold mesh that wraps comfortably around any wrist size."
  },
  {
    id: "GD-STEALTH-505",
    name: "Urban Stealth Digital",
    category: "digital-watches",
    categoryLabel: "Digital & Student Wear",
    badge: "Student Pick",
    price: "₹1,299 (Project Example)",
    originalPrice: "₹2,499",
    discount: "Illustrative Tier",
    caseSize: "44mm Shockproof Resin",
    movement: "Digital Multi-Function",
    waterResist: "50m Water Resistance",
    warranty: "1-Year Warranty Support",
    strap: "Reinforced Silicone Band",
    imgUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Urban Stealth Digital Multi-Function Sports Watch",
    description: "Built for college students and active gym wear in Vijay Nagar. Includes backlight, split stopwatch, dual time zones, countdown timer, and heavy impact resistance."
  },
  {
    id: "GD-HERITAGE-102",
    name: "Heritage Classic Roman",
    category: "analog-watches",
    categoryLabel: "Classic Analog",
    badge: "Timeless",
    price: "₹1,899 (Project Example)",
    originalPrice: "₹3,299",
    discount: "Illustrative Tier",
    caseSize: "40mm Polished Steel",
    movement: "3-Hand Quartz",
    waterResist: "3 ATM (30m)",
    warranty: "1-Year Warranty Support",
    strap: "Genuine Stitched Tan Leather",
    imgUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Heritage Classic Roman Dial Analog Watch with Leather Strap",
    description: "Refined vintage styling featuring Roman numeral markers and hand-stitched leather. Slides smoothly beneath formal shirt cuffs for interviews, meetings, and dinners."
  },
  {
    id: "GD-VELOCE-909",
    name: "Veloce Sport Chrono",
    category: "mens-watches",
    categoryLabel: "Men's Sport",
    badge: "New Arrival",
    price: "₹2,899 (Project Example)",
    originalPrice: "₹4,999",
    discount: "Illustrative Tier",
    caseSize: "42mm Matte Black PVD",
    movement: "High-Beat Quartz",
    waterResist: "5 ATM (50m)",
    warranty: "1-Year Warranty Support",
    strap: "Textured Sport Silicone",
    imgUrl: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Veloce Sport Chrono Matte Black Men's Watch",
    description: "Motorsport-inspired matte black dial with tachymeter scale, gold accents, and luminous hands that glow in low light. Tough, sweat-resistant, and visually arresting."
  },
  {
    id: "GD-PAIR-777",
    name: "Monarch Couple Milestone Set",
    category: "gift-watches",
    categoryLabel: "Couple & Gift Set",
    badge: "Gift Box Included",
    price: "₹4,999 (Project Example)",
    originalPrice: "₹8,999",
    discount: "Illustrative Tier",
    caseSize: "His 42mm / Hers 32mm",
    movement: "Matched Quartz Pair",
    waterResist: "3 ATM (30m)",
    warranty: "1-Year Dual Warranty",
    strap: "Two-Tone Stainless Steel",
    imgUrl: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Monarch Couple Watch Milestone Gift Presentation Set",
    description: "The ideal anniversary and celebratory gift. Includes two harmonized watches housed in a premium satin-lined gift box with complimentary personalized gift presentation."
  }
];

function initProductCatalogAndModal() {
  const modalBackdrop = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  // 1. Filter Category Logic
  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterVal === 'all' || cardCategory === filterVal) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 2. Open Modal on Click
  const quickViewBtns = document.querySelectorAll('.js-quick-view');
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const watchId = btn.getAttribute('data-watch-id');
      const watchData = WATCH_CATALOG.find(w => w.id === watchId);
      if (watchData) {
        populateModal(watchData);
        openModal();
      }
    });
  });

  function populateModal(w) {
    const modalTag = document.getElementById('modal-model-tag');
    const modalTitle = document.getElementById('modal-watch-title');
    const modalCurPrice = document.getElementById('modal-current-price');
    const modalOrigPrice = document.getElementById('modal-orig-price');
    const modalDiscount = document.getElementById('modal-discount-tag');
    const modalDesc = document.getElementById('modal-desc');
    const modalCase = document.getElementById('modal-spec-case');
    const modalMvmt = document.getElementById('modal-spec-movement');
    const modalWater = document.getElementById('modal-spec-water');
    const modalStrap = document.getElementById('modal-spec-strap');
    const modalWarranty = document.getElementById('modal-spec-warranty');

    if (modalTag) modalTag.textContent = `${w.id} • ${w.categoryLabel}`;
    if (modalTitle) modalTitle.textContent = w.name;
    if (modalCurPrice) modalCurPrice.textContent = w.price;
    if (modalOrigPrice) modalOrigPrice.textContent = w.originalPrice;
    if (modalDiscount) modalDiscount.textContent = w.discount;
    if (modalDesc) modalDesc.textContent = w.description;
    if (modalCase) modalCase.textContent = w.caseSize;
    if (modalMvmt) modalMvmt.textContent = w.movement;
    if (modalWater) modalWater.textContent = w.waterResist;
    if (modalStrap) modalStrap.textContent = w.strap;
    if (modalWarranty) modalWarranty.textContent = w.warranty;

    // Update modal image if present
    const modalImg = document.getElementById('modal-watch-img');
    if (modalImg && w.imgUrl) {
      modalImg.src = w.imgUrl;
      modalImg.alt = w.imgAlt || w.name;
    }

    // Set CTA Button URL with parameters
    const modalCta = document.getElementById('modal-enquire-cta');
    if (modalCta) {
      modalCta.href = `contact.html?watch=${encodeURIComponent(w.name)}&category=${encodeURIComponent(w.categoryLabel)}&model=${encodeURIComponent(w.id)}`;
    }
  }

  function openModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Watch Enquiry Form Validation & Formspree Submission
   -------------------------------------------------------------------------- */
function initEnquiryForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  const customerName = document.getElementById('customer-name');
  const mobileNumber = document.getElementById('mobile-number');
  const emailAddress = document.getElementById('email-address');
  const watchCategory = document.getElementById('watch-category');
  const budgetRange = document.getElementById('budget-range');
  const messageField = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');

  // Pre-fill fields from URL parameters with slug normalization
  const urlParams = new URLSearchParams(window.location.search);
  const watchParam = urlParams.get('watch');
  const categoryParam = urlParams.get('category');
  const modelParam = urlParams.get('model');

  if (watchParam && messageField && !messageField.value) {
    messageField.value = `I would like to enquire about the ${watchParam} (Model ${modelParam || 'Custom'}). Please share current availability and details.`;
  }

  // Slug-normalized category matching (e.g. "mens-watches" matches "Men's Watches")
  function normalizeKey(str) {
    return (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  if (watchCategory && categoryParam) {
    const targetNorm = normalizeKey(categoryParam);
    for (let option of watchCategory.options) {
      const optNorm = normalizeKey(option.value);
      if (optNorm && (optNorm.includes(targetNorm) || targetNorm.includes(optNorm))) {
        option.selected = true;
        break;
      }
    }
  }

  function showError(input, errorId, message) {
    if (!input) return;
    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('show');
    }
  }

  function clearError(input, errorId) {
    if (!input) return;
    input.classList.remove('input-error');
    input.removeAttribute('aria-invalid');
    const errorEl = document.getElementById(errorElId => errorElId === errorId ? errorId : null) || document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('show');
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const digitsOnlyPattern = /^\d{10}$/;

  // Real-time input listeners
  let formStarted = false;
  function triggerFormStart() {
    if (!formStarted) {
      formStarted = true;
      trackGA4Event('enquiry_form_start', { form_name: 'watch_enquiry_form' });
    }
  }

  if (customerName) {
    customerName.addEventListener('input', () => {
      triggerFormStart();
      if (customerName.value.trim().length >= 2) {
        clearError(customerName, 'customer-name-error');
      }
    });
  }

  if (mobileNumber) {
    mobileNumber.addEventListener('input', () => {
      triggerFormStart();
      mobileNumber.value = mobileNumber.value.replace(/\D/g, '');
      if (mobileNumber.value.length === 10) {
        clearError(mobileNumber, 'mobile-error');
      }
    });
  }

  if (emailAddress) {
    emailAddress.addEventListener('input', () => {
      triggerFormStart();
      const emailVal = emailAddress.value.trim();
      if (emailVal === '' || emailPattern.test(emailVal)) {
        clearError(emailAddress, 'email-error');
      }
    });
  }

  if (watchCategory) {
    watchCategory.addEventListener('change', () => {
      triggerFormStart();
      if (watchCategory.value !== '') {
        clearError(watchCategory, 'category-error');
      }
    });
  }

  function validateForm() {
    let isValid = true;
    let firstErrorField = null;

    // Customer Name (Required, min 2 chars)
    const nameVal = customerName ? customerName.value.trim() : '';
    if (!nameVal) {
      showError(customerName, 'customer-name-error', 'Please enter your name.');
      isValid = false;
      if (!firstErrorField) firstErrorField = customerName;
    } else if (nameVal.length < 2) {
      showError(customerName, 'customer-name-error', 'Name must be at least 2 characters long.');
      isValid = false;
      if (!firstErrorField) firstErrorField = customerName;
    } else {
      clearError(customerName, 'customer-name-error');
    }

    // Mobile Number (Required, exactly 10 digits)
    const mobileVal = mobileNumber ? mobileNumber.value.trim() : '';
    if (!mobileVal) {
      showError(mobileNumber, 'mobile-error', 'Please enter your 10-digit mobile number.');
      isValid = false;
      if (!firstErrorField) firstErrorField = mobileNumber;
    } else if (!digitsOnlyPattern.test(mobileVal)) {
      showError(mobileNumber, 'mobile-error', 'Mobile number must be exactly 10 digits.');
      isValid = false;
      if (!firstErrorField) firstErrorField = mobileNumber;
    } else {
      clearError(mobileNumber, 'mobile-error');
    }

    // Email Address (Optional, validated only if entered)
    const emailVal = emailAddress ? emailAddress.value.trim() : '';
    if (emailVal.length > 0 && !emailPattern.test(emailVal)) {
      showError(emailAddress, 'email-error', 'Please enter a valid email format (e.g. name@example.com) or leave blank.');
      isValid = false;
      if (!firstErrorField) firstErrorField = emailAddress;
    } else {
      clearError(emailAddress, 'email-error');
    }

    // Watch Category (Required)
    if (watchCategory && !watchCategory.value) {
      showError(watchCategory, 'category-error', 'Please select a watch category.');
      isValid = false;
      if (!firstErrorField) firstErrorField = watchCategory;
    } else if (watchCategory) {
      clearError(watchCategory, 'category-error');
    }

    if (firstErrorField) {
      firstErrorField.focus();
    }

    return isValid;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (formStatus) {
      formStatus.classList.add('is-hidden');
      formStatus.className = 'form-status is-hidden';
      formStatus.textContent = '';
    }

    if (!validateForm()) return;

    const formAction = form.getAttribute('action') || '';
    
    // Explicit Formspree placeholder check
    if (formAction.includes('YOUR_FORMSPREE_ID') || formAction.includes('PASTE_ENDPOINT_HERE') || formAction.includes('PLACEHOLDER')) {
      if (formStatus) {
        formStatus.className = 'form-status status-error';
        formStatus.innerHTML = `
          <strong>Academic Project Submission Notice (Formspree Endpoint Pending):</strong><br>
          Your form inputs have successfully passed all validation checks! 
          To enable live cloud email deliveries, please insert your active Formspree Form ID in <code>contact.html</code> (e.g. <code>https://formspree.io/f/xyzabc</code>).
        `;
        formStatus.classList.remove('is-hidden');
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    const originalButtonText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Submitting Watch Enquiry...</span>';

    try {
      const formData = new FormData(form);
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        if (formStatus) {
          formStatus.className = 'form-status status-success';
          formStatus.innerHTML = `
            <strong>Thank you! Your watch enquiry has been submitted successfully.</strong><br>
            Our Grand Dial team in Vijay Nagar, Indore will review your selected watch category and contact you shortly with available models and pricing.
          `;
          formStatus.classList.remove('is-hidden');
          formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        form.reset();
        trackGA4Event('enquiry_form_submit', {
          watch_category: watchCategory ? watchCategory.value : 'unspecified',
          budget_range: budgetRange ? budgetRange.value : 'unspecified'
        });
      } else {
        const data = await response.json().catch(() => null);
        let errorText = 'Unable to send enquiry. Please check the details or reach out to us via enquiry form.';
        if (data && data.errors && data.errors.length > 0) {
          errorText = data.errors.map(err => err.message).join(', ');
        }
        if (formStatus) {
          formStatus.className = 'form-status status-error';
          formStatus.textContent = errorText;
          formStatus.classList.remove('is-hidden');
        }
      }
    } catch (networkError) {
      if (formStatus) {
        formStatus.className = 'form-status status-error';
        formStatus.innerHTML = `
          <strong>Network Error:</strong> Could not connect to the server. Please check your internet connection and try again.
        `;
        formStatus.classList.remove('is-hidden');
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalButtonText;
    }
  });
}

/* --------------------------------------------------------------------------
   4. Safe GA4 Tracking Helper Structure
   -------------------------------------------------------------------------- */
function trackGA4Event(eventName, eventParams = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

function initGA4TrackingHooks() {
  // Track Enquire Clicks
  document.querySelectorAll('a[href*="contact.html"], .btn-primary').forEach(el => {
    el.addEventListener('click', () => {
      const ctaText = el.textContent ? el.textContent.trim() : 'Enquiry Button';
      trackGA4Event('click_enquire', { cta_label: ctaText });
    });
  });

  // Track Collection Filter / Card Clicks
  document.querySelectorAll('.filter-btn, .collection-card a').forEach(el => {
    el.addEventListener('click', () => {
      const label = el.textContent ? el.textContent.trim() : 'Collection';
      trackGA4Event('click_collection', { collection_target: label });
    });
  });

  // Track Call / Contact Clicks
  document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"]').forEach(el => {
    el.addEventListener('click', () => {
      trackGA4Event('click_call', { link_url: el.getAttribute('href') });
    });
  });
}

