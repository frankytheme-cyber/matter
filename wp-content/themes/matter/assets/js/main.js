(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Page hero enter ---- */
  var pageHeroShell = document.querySelector(".page-hero-secondary__shell");
  if (pageHeroShell && !reduceMotion) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        pageHeroShell.classList.add("page-ready");
      });
    });
  } else if (pageHeroShell) {
    pageHeroShell.classList.add("page-ready");
  }

  /* ---- Hero video expand ---- */
  var heroCard  = document.getElementById("hero-card");
  var expandBtn = document.getElementById("hero-expand");
  var expandIcon = expandBtn && expandBtn.querySelector(".hero__expand-icon");
  var heroCopy  = document.getElementById("hero-copy");
  var heroSection = document.querySelector(".hero--overlay");

  if (heroSection && !reduceMotion) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        heroSection.classList.add("is-entered");
      });
    });
  } else {
    if (heroSection) heroSection.classList.add("is-entered");
  }

  function openHero() {
    if (!heroCard || !expandBtn) return;
    if (heroCopy) heroCopy.style.opacity = "0";
    if (expandIcon) expandIcon.textContent = "close_fullscreen";
    expandBtn.setAttribute("aria-label", "Chiudi");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        heroCard.classList.add("is-video-open");
      });
    });
  }

  function closeHero() {
    if (!heroCard || !expandBtn) return;
    heroCard.classList.remove("is-video-open");
    if (expandIcon) expandIcon.textContent = "open_in_full";
    expandBtn.setAttribute("aria-label", "Guarda il video");
    setTimeout(function () {
      if (heroCopy) heroCopy.style.opacity = "";
    }, 400);
  }

  if (expandBtn) {
    expandBtn.addEventListener("click", function () {
      if (heroCard.classList.contains("is-video-open")) {
        closeHero();
      } else {
        openHero();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && heroCard && heroCard.classList.contains("is-video-open")) {
      closeHero();
    }
  });

  if (window.matchMedia && heroCard) {
    var mqHeroMobile = window.matchMedia("(max-width: 768px)");
    function closeHeroIfMobile() {
      if (mqHeroMobile.matches && heroCard.classList.contains("is-video-open")) {
        closeHero();
      }
    }
    mqHeroMobile.addEventListener("change", closeHeroIfMobile);
  }

  /* ---- Header ---- */
  var header = document.querySelector(".site-header");

  /* ---- Menu, Carousel, FAQ ---- */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav  = document.getElementById("menu-mobile");
  var carousel          = document.getElementById("carousel-spazi") || document.getElementById("carousel-spazi-servizi") || document.getElementById("carousel-percorsi");
  var btnPrev           = document.querySelector(".carousel-prev");
  var btnNext           = document.querySelector(".carousel-next");
  var carouselTestimonials = document.getElementById("carousel-testimonials");
  var btnTestPrev       = document.querySelector(".testimonials-prev");
  var btnTestNext       = document.querySelector(".testimonials-next");
  var faqRoot    = document.getElementById("faq-accordion");

  function setMenuOpen(open) {
    if (!menuToggle || !mobileNav) return;
    if (open && header) {
      mobileNav.style.top = header.getBoundingClientRect().height + "px";
    } else {
      mobileNav.style.top = "";
    }
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Chiudi menu" : "Apri menu");
    mobileNav.hidden = !open;
    mobileNav.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuToggle && mobileNav) {
    mobileNav.hidden = true;
    menuToggle.addEventListener("click", function () {
      var open = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenuOpen(false); });
    });
  }

  /* Nav dropdown desktop (Servizi, Sedi, …) */
  (function initNavDropdowns() {
    var roots = document.querySelectorAll(".nav-item--dropdown[data-nav-dropdown]");
    if (!roots.length) return;
    function closeAll() {
      roots.forEach(function (root) {
        var b = root.querySelector(".nav-item__trigger");
        var p = root.querySelector(".nav-dropdown");
        if (b) b.setAttribute("aria-expanded", "false");
        if (p) p.hidden = true;
      });
    }
    roots.forEach(function (root) {
      var btn = root.querySelector(".nav-item__trigger");
      var panel = root.querySelector(".nav-dropdown");
      if (!btn || !panel) return;
      root.addEventListener("click", function (e) {
        e.stopPropagation();
      });
      btn.addEventListener("click", function (e) {
        var wasClosed = panel.hidden;
        closeAll();
        if (wasClosed) {
          panel.hidden = false;
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
    document.addEventListener("click", function () {
      closeAll();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAll();
    });
  })();

  function scrollCarousel(delta) {
    if (!carousel) return;
    carousel.scrollBy({ left: delta, behavior: "smooth" });
  }

  if (btnPrev) btnPrev.addEventListener("click", function () { scrollCarousel(-420); });
  if (btnNext) btnNext.addEventListener("click", function () { scrollCarousel(420); });

  /* Spazi gallery lightbox */
  (function initSpaziLightbox() {
    var root = document.getElementById("carousel-spazi");
    var lightbox = document.getElementById("spazi-lightbox");
    var imageEl = document.getElementById("spazi-lightbox-img");
    var closeBtn = document.getElementById("spazi-lightbox-close");
    var prevBtn = document.getElementById("spazi-lightbox-prev");
    var nextBtn = document.getElementById("spazi-lightbox-next");
    if (!root || !lightbox || !imageEl || !closeBtn || !prevBtn || !nextBtn) return;

    var cards = Array.prototype.slice.call(root.querySelectorAll(".spazi-card"));
    if (!cards.length) return;
    var currentIndex = 0;
    var lastFocused = null;

    function getLargeImageSrc(src) {
      if (!src) return src;
      return src.replace(/w=\d+/, "w=2200");
    }

    function renderImage(index) {
      var card = cards[index];
      if (!card) return;
      var img = card.querySelector("img");
      if (!img) return;
      imageEl.src = getLargeImageSrc(img.src);
      imageEl.alt = img.alt || "";
    }

    var inertTargets = [];
    function setBackgroundInert(on) {
      if (on) {
        inertTargets = Array.prototype.slice.call(document.body.children).filter(function (el) {
          return el !== lightbox;
        });
        inertTargets.forEach(function (el) {
          el.setAttribute("aria-hidden", "true");
          if ("inert" in HTMLElement.prototype) el.inert = true;
        });
      } else {
        inertTargets.forEach(function (el) {
          el.removeAttribute("aria-hidden");
          if ("inert" in HTMLElement.prototype) el.inert = false;
        });
        inertTargets = [];
      }
    }

    function trapFocus(e) {
      if (lightbox.hidden || e.key !== "Tab") return;
      var focusable = lightbox.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])");
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function setOpen(open) {
      lightbox.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
      setBackgroundInert(open);
      if (!open && lastFocused && typeof lastFocused.focus === "function") {
        /* evita stato hover/focus bloccato sulla card dopo la chiusura */
        if (lastFocused.classList && lastFocused.classList.contains("spazi-card")) {
          lastFocused.blur();
          root.focus();
        } else {
          lastFocused.focus();
        }
      }
    }

    function openAt(index, triggerEl) {
      currentIndex = index;
      lastFocused = triggerEl || document.activeElement;
      renderImage(currentIndex);
      setOpen(true);
      closeBtn.focus();
    }

    function closeLightbox() {
      setOpen(false);
    }

    function move(delta) {
      currentIndex = (currentIndex + delta + cards.length) % cards.length;
      renderImage(currentIndex);
    }

    cards.forEach(function (card, index) {
      card.addEventListener("click", function () {
        openAt(index, card);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openAt(index, card);
        }
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", function () { move(-1); });
    nextBtn.addEventListener("click", function () { move(1); });

    var backdrop = lightbox.querySelector(".gallery-lightbox__backdrop");
    if (backdrop) backdrop.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
      trapFocus(e);
    });
  })();

  function scrollTestimonials(delta) {
    if (!carouselTestimonials) return;
    carouselTestimonials.scrollBy({ left: delta, behavior: "smooth" });
  }

  function getTestimonialsStep() {
    if (!carouselTestimonials) return 340;
    var firstCard = carouselTestimonials.querySelector(".testimonial");
    if (!firstCard) return 340;
    var gridStyles = window.getComputedStyle(carouselTestimonials);
    var gap = parseFloat(gridStyles.columnGap || gridStyles.gap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  }

  if (btnTestPrev) btnTestPrev.addEventListener("click", function () {
    scrollTestimonials(-getTestimonialsStep());
  });
  if (btnTestNext) btnTestNext.addEventListener("click", function () {
    scrollTestimonials(getTestimonialsStep());
  });

  if (faqRoot) {
    var faqItems = Array.prototype.slice.call(faqRoot.querySelectorAll(".faq-item"));

    function closeFaqItem(item) {
      var trigger = item.querySelector(".faq-item__trigger");
      var icon = item.querySelector(".faq-item__icon");
      var answer = item.querySelector(".faq-item__a");
      if (!trigger || !answer) return;
      item.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      answer.setAttribute("aria-hidden", "true");
      answer.style.maxHeight = "0px";
      if (icon) icon.textContent = "add";
    }

    function openFaqItem(item) {
      var trigger = item.querySelector(".faq-item__trigger");
      var icon = item.querySelector(".faq-item__icon");
      var answer = item.querySelector(".faq-item__a");
      if (!trigger || !answer) return;
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      answer.setAttribute("aria-hidden", "false");
      answer.style.maxHeight = answer.scrollHeight + "px";
      if (icon) icon.textContent = "remove";
    }

    faqItems.forEach(function (item, idx) {
      var trigger = item.querySelector(".faq-item__trigger");
      var answer = item.querySelector(".faq-item__a");
      if (!trigger || !answer) return;

      if (!answer.id) answer.id = "faq-answer-" + idx;
      trigger.setAttribute("aria-controls", answer.id);
      closeFaqItem(item);

      trigger.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        faqItems.forEach(function (other) {
          if (other !== item) closeFaqItem(other);
        });
        if (isOpen) closeFaqItem(item);
        else openFaqItem(item);
      });

      item.addEventListener("click", function (event) {
        if (event.target.closest(".faq-item__trigger")) return;
        trigger.click();
      });
    });

    window.addEventListener("resize", function () {
      faqItems.forEach(function (item) {
        if (!item.classList.contains("is-open")) return;
        var answer = item.querySelector(".faq-item__a");
        if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
      });
    });
  }

  /* ---- Scroll reveal ---- */
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.dataset.revealDelay, 10) || 0;
        setTimeout(function () { el.classList.add("is-visible"); }, delay);
        revealObserver.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -48px 0px" });

    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      if (el.classList.contains("breadcrumb-wrap")) return;
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---- Parallax (lightweight, transform on scroll) ---- */
  var parallaxEls = document.querySelectorAll("[data-parallax]");
  if (parallaxEls.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var rafScheduled = false;
    function updateParallax() {
      rafScheduled = false;
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.dataset.parallax) || 0.2;
        var rect = el.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var offset = (center - vh / 2) * -speed;
        el.style.transform = "translate3d(0, " + offset.toFixed(2) + "px, 0)";
      });
    }
    function onScroll() {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(updateParallax);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateParallax();
  }

  /* ---- Matter Lounge specific interactions ---- */
  (function initMatterLounge() {
    if (!document.querySelector(".page-hero-secondary--lounge")) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if ("IntersectionObserver" in window && !reduce) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
      document.querySelectorAll(".lng-reveal").forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll(".lng-reveal").forEach(function (el) { el.classList.add("is-visible"); });
    }

    var pin = document.querySelector("[data-rite]");
    var viewport = pin && pin.querySelector(".lng-rite__viewport");
    var countEl = document.querySelector("[data-rite-count]");
    var dotEls = document.querySelectorAll("[data-dot]");
    var slides = document.querySelectorAll("[data-slide]");

    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    function setActive(idx) {
      slides.forEach(function (s, i) { s.classList.toggle("is-active", i === idx); });
      dotEls.forEach(function (d, i) { d.classList.toggle("is-active", i === idx); });
      if (countEl) countEl.textContent = pad(idx + 1) + " / " + pad(slides.length);
      if (viewport) viewport.classList.toggle("is-end", idx === slides.length - 1);
    }

    if (pin && slides.length) {
      var n = slides.length;
      pin.style.height = (n * 100) + "vh";

      var currentIdx = -1;
      var rafR = false;
      function update() {
        rafR = false;
        var rect = pin.getBoundingClientRect();
        var vh = window.innerHeight;
        var total = rect.height - vh;
        var scrolled = -rect.top;
        var pct = Math.max(0, Math.min(0.9999, scrolled / total));
        var idx = Math.floor(pct * n);
        if (idx !== currentIdx) {
          currentIdx = idx;
          setActive(idx);
        }
      }
      function onScroll() {
        if (rafR) return;
        rafR = true;
        requestAnimationFrame(update);
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      update();

      dotEls.forEach(function (d) {
        d.addEventListener("click", function () {
          var i = parseInt(d.dataset.dot, 10) || 0;
          var rect = pin.getBoundingClientRect();
          var pinTop = rect.top + window.scrollY;
          var vh = window.innerHeight;
          var totalBudget = (n * 100) - 100;
          var segMid = (i + 0.5) / n;
          var targetScroll = pinTop + (segMid * (totalBudget * vh / 100));
          window.scrollTo({ top: targetScroll, behavior: "smooth" });
        });
      });
    }

    var loungeSensesCarousel = document.getElementById("carousel-lounge-senses");
    var loungeSensesPrev = document.querySelector(".lounge-senses-prev");
    var loungeSensesNext = document.querySelector(".lounge-senses-next");
    function getLoungeSensesStep() {
      if (!loungeSensesCarousel) return 360;
      var firstCard = loungeSensesCarousel.querySelector(".lng-sense");
      if (!firstCard) return 360;
      var styles = window.getComputedStyle(loungeSensesCarousel);
      var gap = parseFloat(styles.columnGap || styles.gap) || 0;
      return firstCard.getBoundingClientRect().width + gap;
    }
    if (loungeSensesPrev && loungeSensesCarousel) {
      loungeSensesPrev.addEventListener("click", function () {
        loungeSensesCarousel.scrollBy({ left: -getLoungeSensesStep(), behavior: "smooth" });
      });
    }
    if (loungeSensesNext && loungeSensesCarousel) {
      loungeSensesNext.addEventListener("click", function () {
        loungeSensesCarousel.scrollBy({ left: getLoungeSensesStep(), behavior: "smooth" });
      });
    }

    var whisper = document.querySelector("[data-word-reveal]");
    if (whisper && !reduce) {
      var raw = whisper.innerHTML;
      var tokens = raw.split(/(<span class="accent">.*?<\/span>|\s+)/);
      var html = "";
      tokens.forEach(function (t) {
        if (!t) return;
        if (/^\s+$/.test(t)) { html += t; return; }
        if (/^<span class="accent">/.test(t)) {
          var inner = t.replace(/^<span class="accent">|<\/span>$/g, "");
          html += '<span class="accent">' + inner.split(/\s+/).map(function (w) { return '<span class="reveal-word">' + w + '</span>'; }).join(" ") + '</span>';
          return;
        }
        html += t.split(/\s+/).map(function (w) { return w ? '<span class="reveal-word">' + w + '</span>' : ""; }).join(" ");
      });
      whisper.innerHTML = html;

      var words = whisper.querySelectorAll(".reveal-word");
      function updateWords() {
        var rect = whisper.getBoundingClientRect();
        var vh = window.innerHeight;
        var start = vh * 0.92;
        var end = vh * 0.35;
        var span = rect.height + (start - end);
        var progressed = (start - rect.top);
        var pct = Math.max(0, Math.min(1, (progressed / span) * 1.55));
        var lit = Math.floor(pct * words.length);
        words.forEach(function (w, i) { w.classList.toggle("is-lit", i < lit); });
      }
      var rafW = false;
      window.addEventListener("scroll", function () {
        if (rafW) return;
        rafW = true;
        requestAnimationFrame(function () {
          rafW = false;
          updateWords();
        });
      }, { passive: true });
      window.addEventListener("resize", updateWords);
      updateWords();
    } else if (whisper) {
      whisper.querySelectorAll(".reveal-word").forEach(function (w) { w.classList.add("is-lit"); });
    }

    var twenty = document.querySelector("[data-count-to]");
    if (twenty && "IntersectionObserver" in window && !reduce) {
      var target = parseInt(twenty.dataset.countTo, 10) || 20;
      var done = false;
      var ioT = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || done) return;
          done = true;
          var startT = performance.now();
          var dur = 1800;
          twenty.textContent = "0";
          function tick(now) {
            var p = Math.min(1, (now - startT) / dur);
            var eased = 1 - Math.pow(1 - p, 3);
            twenty.textContent = Math.round(eased * target).toString();
            if (p < 1) requestAnimationFrame(tick);
            else twenty.textContent = target.toString();
          }
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.5 });
      ioT.observe(twenty);
    }
  })();

  /* pages with call FAB: keep it above footer and above #contatti (form Scrivici) */
  (function initCallFabFooterOffset() {
    var fabs = document.querySelectorAll(".call-fab");
    var footer = document.querySelector(".site-footer");
    if (!fabs.length || !footer) return;

    var ticking = false;

    function baseGap() {
      return window.matchMedia("(max-width: 600px)").matches ? 16 : 24;
    }

    function updateCallFabOffset() {
      ticking = false;
      var gap = baseGap();
      var vh = window.innerHeight;

      var footerOverlap = vh - footer.getBoundingClientRect().top;
      var footerOffset = footerOverlap > 0 ? footerOverlap + gap : 0;

      /* Sezione moduli / Scrivici (sedi: id contatti): il FAB non deve sovrapporsi */
      var contattiSection = document.getElementById("contatti");
      var contattiOffset = 0;
      if (contattiSection) {
        var top = contattiSection.getBoundingClientRect().top;
        var need = vh - top + gap;
        if (need > gap) contattiOffset = need;
      }

      var combined = Math.max(footerOffset, contattiOffset);
      var offsetPx = combined > gap ? combined + "px" : null;

      fabs.forEach(function (fab) {
        if (offsetPx) fab.style.setProperty("--call-fab-offset", offsetPx);
        else fab.style.removeProperty("--call-fab-offset");
      });
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateCallFabOffset);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();
  })();
})();
