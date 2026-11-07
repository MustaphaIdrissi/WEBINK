/* ============================================================
   ██████╗  █████╗ ████████╗ █████╗     ███████╗███████╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗
   ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗    ██╔════╝██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
   ██║  ██║███████║   ██║   ███████║    ███████╗█████╗  ██║        ██║   ██║██║   ██║██╔██╗ ██║
   ██║  ██║██╔══██║   ██║   ██╔══██║    ╚════██║██╔══╝  ██║        ██║   ██║██║   ██║██║╚██╗██║
   ██████╔╝██║  ██║   ██║   ██║  ██║    ███████║███████╗╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
   ============================================================
   TEEPUBLIC STOREFRONT — script.js
   ============================================================ */

/* ============================================================
   ╔══════════════════════════════════════════════════════════╗
   ║          ★  CONFIGURATION — EDIT THIS SECTION  ★        ║
   ╚══════════════════════════════════════════════════════════╝

   HOW TO CUSTOMIZE:
   1. Replace storeConfig values with your real info.
   2. Add your designs to the `designs` array below.
   3. Each design object needs:
        title       — The design name shown on the card
        image       — A direct URL to the design image (JPG/PNG/WebP)
        description — Short text shown on the card and in the modal
        category    — Must match one of the CATEGORIES list (case-sensitive)
        products    — Array of product types this design is available on
        teePublicUrl — The full URL to this design's TeePublic page

   CATEGORIES available (add more if needed):
     "Animals" | "Gaming" | "Funny" | "Quotes" | "Minimal" | "Nature" | "Other"
   ============================================================ */

   const storeConfig = {
    storeName:    "InkDrop Studio",          // ← REPLACE: Your store/brand name
    storeUrl:     "YOUR_TEEPUBLIC_STORE_URL" // ← REPLACE: e.g. https://www.teepublic.com/user/yourname
  };
  
  const CATEGORIES = [
    "Animals",
    "Gaming",
    "Funny",
    "Quotes",
    "Minimal",
    "Nature",
    "Other"
  ];
  
  // ──────────────────────────────────────────────────────────────
  // ★ ADD YOUR DESIGNS HERE — duplicate an object to add more ★
  // ──────────────────────────────────────────────────────────────
  const designs = [
    {
      title:        "Cosmic Cat",
      // ↑ REPLACE: Your design title
      image:        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
      // ↑ REPLACE: Direct URL to your design's preview image
      description:  "An adventurous feline floating through the cosmos. Perfect for cat lovers and space enthusiasts alike.",
      // ↑ REPLACE: A short, compelling description of your design
      category:     "Animals",
      // ↑ REPLACE: One of the CATEGORIES listed above
      products:     ["T-Shirt", "Hoodie", "Sticker", "Mug"],
      // ↑ REPLACE: Products this design is available on
      teePublicUrl: "https://www.teepublic.com/"
      // ↑ REPLACE: The full URL to THIS design on TeePublic
    },
    {
      title:        "Pixel Quest",
      image:        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
      description:  "Retro pixel art controller design for the gamers who remember the golden age of 8-bit adventures.",
      category:     "Gaming",
      products:     ["T-Shirt", "Hoodie", "Phone Case"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Monday Mood",
      image:        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      description:  "Because every Monday deserves a brutally honest t-shirt. Relatable humor for the office and beyond.",
      category:     "Funny",
      products:     ["T-Shirt", "Mug", "Sticker"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Stay Wild",
      image:        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      description:  "A bold nature-inspired quote design for the free spirits and adventure seekers. Let the wild call.",
      category:     "Quotes",
      products:     ["T-Shirt", "Hoodie", "Tote Bag"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Geometric Wave",
      image:        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80",
      description:  "Clean, minimal geometric wave pattern with a modern aesthetic. Less is definitely more.",
      category:     "Minimal",
      products:     ["T-Shirt", "Sticker", "Phone Case", "Tote Bag"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Forest Spirit",
      image:        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
      description:  "Deep in the forest lives a spirit — this design captures the mystery and calm of nature's soul.",
      category:     "Nature",
      products:     ["T-Shirt", "Hoodie", "Sticker"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Neon Fox",
      image:        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80",
      description:  "A vivid, neon-styled fox illustration that glows in all the right ways. Designed for the bold.",
      category:     "Animals",
      products:     ["T-Shirt", "Hoodie", "Sticker", "Mug", "Phone Case"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "404: Coffee Not Found",
      image:        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
      description:  "Every programmer's nightmare — a coffee shortage. Funny tech humor for developers who run on caffeine.",
      category:     "Funny",
      products:     ["T-Shirt", "Mug", "Sticker", "Hoodie"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Mountain Zen",
      image:        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      description:  "Minimalist mountain silhouette design for the hiking enthusiast who finds peace in the peaks.",
      category:     "Nature",
      products:     ["T-Shirt", "Hoodie", "Tote Bag"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "The Grid",
      image:        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      description:  "Cyberpunk-inspired grid design with neon lines. Enter the digital world in style.",
      category:     "Gaming",
      products:     ["T-Shirt", "Phone Case", "Sticker"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Be Present",
      image:        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      description:  "A mindfulness reminder you can wear. Two words, infinite depth. For the intentionally alive.",
      category:     "Quotes",
      products:     ["T-Shirt", "Hoodie", "Tote Bag"],
      teePublicUrl: "https://www.teepublic.com/"
    },
    {
      title:        "Abstract Bloom",
      image:        "https://images.unsplash.com/photo-1490750967868-88df5691cc85?w=600&q=80",
      description:  "A soft, abstract floral design with flowing colors. Elegant, wearable art for everyday life.",
      category:     "Minimal",
      products:     ["T-Shirt", "Tote Bag", "Phone Case"],
      teePublicUrl: "https://www.teepublic.com/"
    }
  ];
  
  /* ============================================================
     ╔══════════════════════════════════════════════════════════╗
     ║           APPLICATION LOGIC — DO NOT EDIT BELOW          ║
     ║  (unless you are a developer adding custom features)     ║
     ╚══════════════════════════════════════════════════════════╝
     ============================================================ */
  
  // ──────────────────────────────────────────────────────────────
  // State
  // ──────────────────────────────────────────────────────────────
  let filteredDesigns    = [...designs];
  let currentCategory    = "all";
  let currentSearchQuery = "";
  let activeDesignIndex  = null;
  
  // ──────────────────────────────────────────────────────────────
  // DOM References
  // ──────────────────────────────────────────────────────────────
  const DOM = {
    body:           document.body,
    header:         document.getElementById("header"),
    themeToggle:    document.getElementById("themeToggle"),
    navHamburger:   document.getElementById("navHamburger"),
    navMobile:      document.getElementById("navMobile"),
    navLinks:       document.querySelectorAll(".nav__link"),
    mobileLinks:    document.querySelectorAll("[data-close-mobile]"),
    searchInput:    document.getElementById("searchInput"),
    clearSearch:    document.getElementById("clearSearch"),
    categoryBtns:   document.querySelector(".filter-bar__categories"),
    resetFilters:   document.getElementById("resetFilters"),
    emptyReset:     document.getElementById("emptyReset"),
    designsGrid:    document.getElementById("designsGrid"),
    designsCount:   document.getElementById("designsCount"),
    designsEmpty:   document.getElementById("designsEmpty"),
    modal:          document.getElementById("designModal"),
    modalOverlay:   document.getElementById("modalOverlay"),
    modalClose:     document.getElementById("modalClose"),
    modalImage:     document.getElementById("modalImage"),
    modalCategory:  document.getElementById("modalCategory"),
    modalTitle:     document.getElementById("modalTitle"),
    modalDesc:      document.getElementById("modalDescription"),
    modalProducts:  document.getElementById("modalProducts"),
    modalCta:       document.getElementById("modalCta"),
    contactForm:    document.getElementById("contactForm"),
    formSuccess:    document.getElementById("formSuccess"),
    backToTop:      document.getElementById("backToTop"),
    footerYear:     document.getElementById("footerYear"),
    navStoreBtn:    document.getElementById("navStoreBtn"),
    heroStoreBtn:   document.getElementById("heroStoreBtn"),
    aboutStoreBtn:  document.getElementById("aboutStoreBtn"),
    footerStoreBtn: document.getElementById("footerStoreBtn"),
    mobileStoreBtn: document.getElementById("mobileStoreBtn"),
  };
  
  // ──────────────────────────────────────────────────────────────
  // INIT
  // ──────────────────────────────────────────────────────────────
  function init() {
    applyStoreConfig();
    initTheme();
    buildCategoryFilters();
    renderDesigns(designs);
    attachEventListeners();
    initScrollObserver();
    initNavHighlight();
    setFooterYear();
  }
  
  // ──────────────────────────────────────────────────────────────
  // Apply storeConfig to the DOM
  // ──────────────────────────────────────────────────────────────
  function applyStoreConfig() {
    // Page title
    document.title = `${storeConfig.storeName} – Premium Graphic Tees & Merchandise`;
  
    // Store URL buttons
    const storeButtons = [
      DOM.navStoreBtn, DOM.heroStoreBtn, DOM.aboutStoreBtn,
      DOM.footerStoreBtn, DOM.mobileStoreBtn
    ];
    storeButtons.forEach(btn => {
      if (btn && storeConfig.storeUrl !== "YOUR_TEEPUBLIC_STORE_URL") {
        btn.href = storeConfig.storeUrl;
      }
    });
  
    // Store name in logo elements
    document.querySelectorAll(".nav__logo-text").forEach(el => {
      // Keep accent span
      const accent = el.querySelector(".nav__logo-accent");
      if (accent) {
        const name = storeConfig.storeName;
        const half = Math.ceil(name.length / 2);
        el.childNodes[0].nodeValue = name.slice(0, half);
        accent.textContent = name.slice(half);
      }
    });
  }
  
  // ──────────────────────────────────────────────────────────────
  // THEME (dark / light)
  // ──────────────────────────────────────────────────────────────
  function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    setTheme(theme, false);
  }
  
  function setTheme(theme, save = true) {
    if (theme === "dark") {
      DOM.body.classList.add("dark-mode");
      DOM.body.classList.remove("light-mode");
    } else {
      DOM.body.classList.add("light-mode");
      DOM.body.classList.remove("dark-mode");
    }
    if (save) localStorage.setItem("theme", theme);
  }
  
  function toggleTheme() {
    const isDark = DOM.body.classList.contains("dark-mode");
    setTheme(isDark ? "light" : "dark");
  }
  
  // ──────────────────────────────────────────────────────────────
  // CATEGORY FILTER BUTTONS (dynamic)
  // ──────────────────────────────────────────────────────────────
  function buildCategoryFilters() {
    // Extract categories actually used in designs (preserving CATEGORIES order)
    const usedCategories = CATEGORIES.filter(cat =>
      designs.some(d => d.category === cat)
    );
  
    usedCategories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.category = cat;
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = cat;
      DOM.categoryBtns.appendChild(btn);
    });
  }
  
  // ──────────────────────────────────────────────────────────────
  // FILTERING & SEARCH LOGIC
  // ──────────────────────────────────────────────────────────────
  function filterDesigns() {
    const query = currentSearchQuery.toLowerCase().trim();
  
    filteredDesigns = designs.filter(design => {
      const matchesCategory = currentCategory === "all" || design.category === currentCategory;
      const matchesSearch   = !query || design.title.toLowerCase().includes(query)
                                     || design.description.toLowerCase().includes(query)
                                     || design.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  
    renderDesigns(filteredDesigns);
  }
  
  function resetFilters() {
    currentCategory    = "all";
    currentSearchQuery = "";
    DOM.searchInput.value = "";
    DOM.clearSearch.hidden = true;
  
    // Reset category buttons
    DOM.categoryBtns.querySelectorAll(".filter-btn").forEach(btn => {
      const isAll = btn.dataset.category === "all";
      btn.classList.toggle("filter-btn--active", isAll);
      btn.setAttribute("aria-pressed", isAll ? "true" : "false");
    });
  
    filteredDesigns = [...designs];
    renderDesigns(filteredDesigns);
  }
  
  // ──────────────────────────────────────────────────────────────
  // RENDER DESIGN CARDS
  // ──────────────────────────────────────────────────────────────
  function renderDesigns(list) {
    // Count label
    const total = list.length;
    const suffix = total === 1 ? "design" : "designs";
    DOM.designsCount.textContent =
      total === designs.length
        ? `Showing all ${total} ${suffix}`
        : `Showing ${total} of ${designs.length} ${suffix}`;
  
    // Empty state
    const isEmpty = total === 0;
    DOM.designsEmpty.hidden = !isEmpty;
    DOM.designsGrid.hidden  = isEmpty;
  
    if (isEmpty) { DOM.designsGrid.innerHTML = ""; return; }
  
    // Render cards
    DOM.designsGrid.innerHTML = list.map((design, i) =>
      `<article
        class="design-card"
        role="listitem"
        data-index="${designs.indexOf(design)}"
        style="animation-delay:${i * 60}ms"
        tabindex="0"
        aria-label="Design: ${escapeHtml(design.title)}"
      >
        <div class="design-card__image-wrap">
          <img
            class="design-card__image"
            src="${escapeHtml(design.image)}"
            alt="${escapeHtml(design.title)} design preview"
            loading="lazy"
            decoding="async"
            onerror="this.src='https://placehold.co/600x450/6C47FF/FFFFFF?text=${encodeURIComponent(design.title)}'"
          />
          <span class="design-card__category-badge">${escapeHtml(design.category)}</span>
        </div>
        <div class="design-card__body">
          <h3 class="design-card__title">${escapeHtml(design.title)}</h3>
          <p class="design-card__desc">${escapeHtml(design.description)}</p>
          <div class="design-card__products" aria-label="Available products">
            ${design.products.slice(0, 4).map(p =>
              `<span class="design-card__tag">${escapeHtml(p)}</span>`
            ).join("")}
            ${design.products.length > 4
              ? `<span class="design-card__tag">+${design.products.length - 4} more</span>`
              : ""}
          </div>
          <a
            href="${escapeHtml(design.teePublicUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            class="design-card__cta"
            aria-label="View ${escapeHtml(design.title)} on TeePublic"
            onclick="event.stopPropagation()"
          >
            View on TeePublic ↗
          </a>
        </div>
      </article>`
    ).join("");
  
    // Attach card click handlers (for modal)
    DOM.designsGrid.querySelectorAll(".design-card").forEach(card => {
      card.addEventListener("click", () => openModal(parseInt(card.dataset.index, 10)));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(parseInt(card.dataset.index, 10));
        }
      });
    });
  }
  
  // ──────────────────────────────────────────────────────────────
  // MODAL
  // ──────────────────────────────────────────────────────────────
  function openModal(index) {
    const design = designs[index];
    if (!design) return;
  
    activeDesignIndex = index;
  
    // Populate
    DOM.modalImage.src             = design.image;
    DOM.modalImage.alt             = `${design.title} design preview`;
    DOM.modalCategory.textContent  = design.category;
    DOM.modalTitle.textContent     = design.title;
    DOM.modalDesc.textContent      = design.description;
    DOM.modalProducts.innerHTML    = design.products.map(p =>
      `<span class="modal__product-tag">${escapeHtml(p)}</span>`
    ).join("");
    DOM.modalCta.href              = design.teePublicUrl;
    DOM.modalCta.setAttribute("aria-label", `View ${design.title} on TeePublic`);
  
    // Open
    DOM.modal.classList.add("open");
    DOM.modal.setAttribute("aria-hidden", "false");
    DOM.body.style.overflow = "hidden";
  
    // Focus trap — move focus to close button
    requestAnimationFrame(() => DOM.modalClose.focus());
  }
  
  function closeModal() {
    DOM.modal.classList.remove("open");
    DOM.modal.setAttribute("aria-hidden", "true");
    DOM.body.style.overflow = "";
  
    // Return focus to the card that opened the modal
    if (activeDesignIndex !== null) {
      const card = DOM.designsGrid.querySelector(`[data-index="${activeDesignIndex}"]`);
      if (card) card.focus();
      activeDesignIndex = null;
    }
  }
  
  // ──────────────────────────────────────────────────────────────
  // MOBILE NAV
  // ──────────────────────────────────────────────────────────────
  function toggleMobileNav() {
    const isOpen = DOM.navMobile.classList.toggle("open");
    DOM.navHamburger.classList.toggle("open", isOpen);
    DOM.navHamburger.setAttribute("aria-expanded", String(isOpen));
    DOM.navMobile.setAttribute("aria-hidden", String(!isOpen));
  }
  
  function closeMobileNav() {
    DOM.navMobile.classList.remove("open");
    DOM.navHamburger.classList.remove("open");
    DOM.navHamburger.setAttribute("aria-expanded", "false");
    DOM.navMobile.setAttribute("aria-hidden", "true");
  }
  
  // ──────────────────────────────────────────────────────────────
  // CONTACT FORM (client-side validation demo)
  // ──────────────────────────────────────────────────────────────
  function validateContact(e) {
    e.preventDefault();
    let valid = true;
  
    const name    = document.getElementById("contactName");
    const email   = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");
    const nameErr    = document.getElementById("nameError");
    const emailErr   = document.getElementById("emailError");
    const messageErr = document.getElementById("messageError");
  
    // Reset
    [name, email, message].forEach(el => el.classList.remove("error"));
    [nameErr, emailErr, messageErr].forEach(el => el.textContent = "");
  
    if (!name.value.trim()) {
      name.classList.add("error");
      nameErr.textContent = "Please enter your name.";
      valid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      email.classList.add("error");
      emailErr.textContent = "Please enter a valid email address.";
      valid = false;
    }
  
    if (!message.value.trim() || message.value.trim().length < 10) {
      message.classList.add("error");
      messageErr.textContent = "Message must be at least 10 characters.";
      valid = false;
    }
  
    if (valid) {
      // In a real project, send to an API or form service here.
      DOM.formSuccess.hidden = false;
      DOM.contactForm.reset();
      // Hide success message after 5 seconds
      setTimeout(() => { DOM.formSuccess.hidden = true; }, 5000);
    }
  }
  
  // ──────────────────────────────────────────────────────────────
  // SCROLL OBSERVER (for scroll-reveal animations)
  // ──────────────────────────────────────────────────────────────
  function initScrollObserver() {
    if (!("IntersectionObserver" in window)) {
      // Fallback: show everything immediately
      document.querySelectorAll(".scroll-reveal").forEach(el => el.classList.add("revealed"));
      return;
    }
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // fire once
        }
      });
    }, { threshold: 0.12 });
  
    document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));
  }
  
  // ──────────────────────────────────────────────────────────────
  // NAV ACTIVE LINK on scroll
  // ──────────────────────────────────────────────────────────────
  function initNavHighlight() {
    const sections = ["home", "designs", "products", "about", "contact"];
    const sectionEls = sections.map(id => document.getElementById(id)).filter(Boolean);
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          DOM.navLinks.forEach(link => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
            link.setAttribute("aria-current", isActive ? "page" : "false");
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
  
    sectionEls.forEach(el => observer.observe(el));
  }
  
  // ──────────────────────────────────────────────────────────────
  // SCROLL: header shadow + back-to-top visibility
  // ──────────────────────────────────────────────────────────────
  function onWindowScroll() {
    const scrolled = window.scrollY > 40;
    DOM.header.classList.toggle("scrolled", scrolled);
  
    const showBtn = window.scrollY > 400;
    DOM.backToTop.hidden = !showBtn;
    DOM.backToTop.classList.toggle("visible", showBtn);
  }
  
  // ──────────────────────────────────────────────────────────────
  // FOOTER YEAR
  // ──────────────────────────────────────────────────────────────
  function setFooterYear() {
    if (DOM.footerYear) DOM.footerYear.textContent = new Date().getFullYear();
  }
  
  // ──────────────────────────────────────────────────────────────
  // ESCAPE HTML (XSS prevention)
  // ──────────────────────────────────────────────────────────────
  function escapeHtml(str) {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return String(str).replace(/[&<>"']/g, m => map[m]);
  }
  
  // ──────────────────────────────────────────────────────────────
  // DEBOUNCE
  // ──────────────────────────────────────────────────────────────
  function debounce(fn, delay = 200) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  
  // ──────────────────────────────────────────────────────────────
  // ATTACH ALL EVENT LISTENERS
  // ──────────────────────────────────────────────────────────────
  function attachEventListeners() {
  
    // Theme
    DOM.themeToggle.addEventListener("click", toggleTheme);
  
    // Mobile nav
    DOM.navHamburger.addEventListener("click", toggleMobileNav);
    DOM.mobileLinks.forEach(link => link.addEventListener("click", closeMobileNav));
  
    // Search
    DOM.searchInput.addEventListener("input", debounce(e => {
      currentSearchQuery = e.target.value;
      DOM.clearSearch.hidden = currentSearchQuery.length === 0;
      filterDesigns();
    }, 250));
  
    DOM.clearSearch.addEventListener("click", () => {
      DOM.searchInput.value = "";
      currentSearchQuery = "";
      DOM.clearSearch.hidden = true;
      DOM.searchInput.focus();
      filterDesigns();
    });
  
    // Category filter buttons (event delegation)
    DOM.categoryBtns.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
  
      currentCategory = btn.dataset.category;
  
      DOM.categoryBtns.querySelectorAll(".filter-btn").forEach(b => {
        const active = b === btn;
        b.classList.toggle("filter-btn--active", active);
        b.setAttribute("aria-pressed", String(active));
      });
  
      filterDesigns();
    });
  
    // Reset buttons
    DOM.resetFilters.addEventListener("click", resetFilters);
    if (DOM.emptyReset) DOM.emptyReset.addEventListener("click", resetFilters);
  
    // Modal close
    DOM.modalClose.addEventListener("click", closeModal);
    DOM.modalOverlay.addEventListener("click", closeModal);
  
    // Keyboard: Escape closes modal, Tab traps focus inside modal
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && DOM.modal.classList.contains("open")) {
        closeModal();
      }
    });
  
    // Contact form
    if (DOM.contactForm) DOM.contactForm.addEventListener("submit", validateContact);
  
    // Scroll
    window.addEventListener("scroll", onWindowScroll, { passive: true });
  
    // Back to top
    DOM.backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Smooth scroll for all internal # links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", e => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        const offset = 80; // nav height buffer
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  
    // Responsive: close mobile nav on resize to desktop
    window.addEventListener("resize", debounce(() => {
      if (window.innerWidth > 1024) closeMobileNav();
    }, 100));
  }
  
  // ──────────────────────────────────────────────────────────────
  // RUN
  // ──────────────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", init);
  