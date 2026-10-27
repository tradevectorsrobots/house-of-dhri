// Client behaviour for every page: smooth scroll, header, mobile menu, in-view reveals,
// scroll-linked effects, hero tilt, quick view, product gallery, FAQ and the enquiry form.
import Lenis from "lenis";
import "lenis/dist/lenis.css";

window.__hodReady = true;

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const clamp01 = (v) => Math.min(1, Math.max(0, v));

/* ---------------------------------------------------------------- smooth scroll */

const lenis = reduceMotion
  ? null
  : new Lenis({ duration: 1.25, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

if (lenis) {
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

const lockScroll = (locked) => {
  if (lenis) locked ? lenis.stop() : lenis.start();
  else root.style.overflow = locked ? "hidden" : "";
};

/* ---------------------------------------------------------------- header + mobile menu */

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector("[data-menu-toggle]");
// The reference's `bg-[#1A1714]/92` never compiled (no /92 opacity step), so the scrolled header is blur-only.
const HEADER_SCROLLED = ["backdrop-blur-xl", "py-3", "border-[#F6F1E8]/10"];
const HEADER_TOP = ["bg-transparent", "py-6", "border-transparent"];
let headerScrolled = null;
let menuOpen = false;

const updateHeader = () => {
  if (!header) return;
  const scrolled = window.scrollY > 40;
  if (scrolled !== headerScrolled) {
    headerScrolled = scrolled;
    header.classList.remove(...(scrolled ? HEADER_TOP : HEADER_SCROLLED));
    header.classList.add(...(scrolled ? HEADER_SCROLLED : HEADER_TOP));
  }
  const light = header.dataset.lightStart === "true" && !scrolled && !menuOpen;
  header.classList.toggle("text-[#26231F]", light);
  header.classList.toggle("text-[#F6F1E8]", !light);
};

const setMenu = (open) => {
  menuOpen = open;
  root.classList.toggle("menu-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  lockScroll(open);
  updateHeader();
};

menuToggle?.addEventListener("click", () => setMenu(!menuOpen));
document.querySelectorAll("#mobile-menu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => e.matches && menuOpen && setMenu(false));

/* ---------------------------------------------------------------- in-view reveals */

const observers = new Map();
const observeOnce = (el, amount) => {
  if (!observers.has(amount)) {
    observers.set(
      amount,
      new IntersectionObserver(
        (entries, io) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          }),
        { threshold: amount },
      ),
    );
  }
  observers.get(amount).observe(el);
};

const watch = (selector, amount) =>
  document.querySelectorAll(selector).forEach((el) => observeOnce(el, parseFloat(el.dataset.amount || amount)));

watch("[data-reveal]", 0.12);
watch('[data-mask="view"]', 0.1);
watch("[data-clip]", 0.05);
watch("[data-draw]", 0.1);

requestAnimationFrame(() =>
  requestAnimationFrame(() => document.querySelectorAll('[data-mask="load"]').forEach((el) => el.classList.add("is-in"))),
);

/* ---------------------------------------------------------------- scroll-linked effects */

const heroParallax = document.querySelector('[data-parallax="hero"]');
const heroTarget = heroParallax?.closest("[data-tilt]");
const bannerParallax = document.querySelector('[data-parallax="banner"]');
const bannerTarget = document.querySelector('[data-parallax-scope="banner"]');
const diamondParallax = document.querySelector('[data-parallax="diamond"]');
const diamondTarget = document.querySelector('[data-parallax-scope="diamond"]');
const manifesto = document.querySelector("[data-manifesto]");
const manifestoWords = manifesto ? [...manifesto.querySelectorAll("[data-word]")] : [];

const updateScrollEffects = () => {
  const vh = window.innerHeight;
  if (heroParallax && heroTarget) {
    const r = heroTarget.getBoundingClientRect();
    heroParallax.style.transform = `translate3d(0, ${clamp01(-r.top / r.height) * 18}%, 0)`;
  }
  if (bannerParallax && bannerTarget) {
    const r = bannerTarget.getBoundingClientRect();
    bannerParallax.style.transform = `translate3d(0, ${clamp01(-r.top / r.height) * 25}%, 0)`;
  }
  if (diamondParallax && diamondTarget) {
    const r = diamondTarget.getBoundingClientRect();
    const p = clamp01((vh - r.top) / (vh + r.height));
    diamondParallax.style.transform = `translateY(${-12 + p * 24}%) scale(1.3)`;
  }
  if (manifestoWords.length) {
    const r = manifesto.getBoundingClientRect();
    const p = clamp01((vh * 0.85 - r.top) / (vh * 0.4 + r.height));
    const n = manifestoWords.length;
    manifestoWords.forEach((w, i) => {
      w.style.opacity = String(0.28 + 0.72 * clamp01((p - i / n) * n));
    });
  }
};

let scrollQueued = false;
const onScroll = () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => {
    scrollQueued = false;
    updateHeader();
    if (!reduceMotion) updateScrollEffects();
  });
};
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });
onScroll();

/* ---------------------------------------------------------------- hero tilt frame */

const tilt = document.querySelector("[data-tilt]");
if (tilt && finePointer && !reduceMotion) {
  const frame = tilt.querySelector("[data-tilt-frame]");
  const light = tilt.querySelector("[data-tilt-light]");
  // Spring with stiffness 90, damping 18, mass 1 — matches the reference motion values.
  const s = { rx: 0, vrx: 0, ry: 0, vry: 0, tx: 0, ty: 0 };
  let running = false;
  let last = 0;

  const step = (now) => {
    const dt = Math.min(0.032, (now - last) / 1000 || 0.016);
    last = now;
    s.vrx += (-90 * (s.rx - s.tx) - 18 * s.vrx) * dt;
    s.rx += s.vrx * dt;
    s.vry += (-90 * (s.ry - s.ty) - 18 * s.vry) * dt;
    s.ry += s.vry * dt;
    frame.style.transform = `rotateX(${s.rx}deg) rotateY(${s.ry}deg)`;
    const settled =
      Math.abs(s.rx - s.tx) < 0.001 && Math.abs(s.ry - s.ty) < 0.001 && Math.abs(s.vrx) < 0.001 && Math.abs(s.vry) < 0.001;
    if (settled) running = false;
    else requestAnimationFrame(step);
  };

  const setPointer = (mx, my) => {
    s.tx = 7 - 14 * my;
    s.ty = -9 + 18 * mx;
    light.style.background = `radial-gradient(420px circle at ${mx * 100}% ${my * 100}%, rgba(246,241,232,0.28), transparent 60%)`;
    if (!running) {
      running = true;
      last = performance.now();
      requestAnimationFrame(step);
    }
  };

  tilt.addEventListener("mousemove", (e) => {
    const r = tilt.getBoundingClientRect();
    setPointer((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
  });
  tilt.addEventListener("mouseleave", () => setPointer(0.5, 0.5));
}

/* ---------------------------------------------------------------- quick view sheet */

const quickview = document.querySelector("[data-quickview]");
if (quickview) {
  const body = quickview.querySelector("[data-qv-body]");
  const panel = quickview.querySelector("[data-qv-panel]");
  const track = document.querySelector("[data-pieces-track]");
  const DOT_ON = ["w-8", "bg-[#26231F]"];
  const DOT_OFF = ["w-2.5", "bg-[#26231F]/50"];
  let trigger = null;

  const showView = (k) => {
    body.querySelectorAll("[data-qv-img]").forEach((img) => img.classList.toggle("is-current", +img.dataset.qvImg === k));
    body.querySelectorAll("[data-qv-dot]").forEach((dot) => {
      const on = +dot.dataset.qvDot === k;
      dot.classList.remove(...(on ? DOT_OFF : DOT_ON));
      dot.classList.add(...(on ? DOT_ON : DOT_OFF));
      dot.setAttribute("aria-pressed", String(on));
    });
  };

  const open = (slug, from) => {
    const tpl = quickview.querySelector(`template[data-qv-template="${slug}"]`);
    if (!tpl) return;
    body.replaceChildren(tpl.content.cloneNode(true));
    body.querySelectorAll("[data-qv-dot]").forEach((dot) => dot.addEventListener("click", () => showView(+dot.dataset.qvDot)));
    panel.scrollTop = 0;
    trigger = from;
    root.classList.add("qv-open");
    track?.classList.add("paused");
    lockScroll(true);
    panel.focus({ preventScroll: true });
  };

  const close = () => {
    if (!root.classList.contains("qv-open")) return;
    root.classList.remove("qv-open");
    track?.classList.remove("paused");
    lockScroll(false);
    trigger?.focus({ preventScroll: true });
  };

  document.querySelectorAll("[data-qv-open]").forEach((btn) => btn.addEventListener("click", () => open(btn.dataset.qvOpen, btn)));
  quickview.querySelectorAll("[data-qv-close]").forEach((el) => el.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (!root.classList.contains("qv-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      const focusable = [...panel.querySelectorAll("a[href], button:not([disabled])")];
      if (!focusable.length) return;
      const first = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ---------------------------------------------------------------- product gallery */

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const thumbs = [...gallery.querySelectorAll("[data-gallery-thumb]")];
  const images = [...gallery.querySelectorAll("[data-gallery-img]")];
  const stage = gallery.querySelector("[data-gallery-stage]");
  const THUMB_ON = ["border-[#F6F1E8]", "opacity-100"];
  const THUMB_OFF = ["border-transparent", "opacity-60", "hover:opacity-100"];
  let current = 0;

  thumbs.forEach((thumb) =>
    thumb.addEventListener("click", () => {
      const k = +thumb.dataset.galleryThumb;
      if (k === current) return;
      images[current].classList.remove("is-current", "is-zoom");
      current = k;
      images[current].classList.add("is-current");
      thumbs.forEach((t, i) => {
        const on = i === k;
        t.classList.remove(...(on ? THUMB_OFF : THUMB_ON));
        t.classList.add(...(on ? THUMB_ON : THUMB_OFF));
        t.setAttribute("aria-pressed", String(on));
      });
    }),
  );

  // Hover zoom follows the cursor; touch taps no longer leave the image stuck zoomed.
  stage.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const r = stage.getBoundingClientRect();
    const img = images[current];
    img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
    img.classList.add("is-zoom");
  });
  stage.addEventListener("pointerleave", () => images[current].classList.remove("is-zoom"));
});

/* ---------------------------------------------------------------- FAQ accordion (single, collapsible) */

document.querySelectorAll("[data-accordion]").forEach((accordion) => {
  const items = [...accordion.querySelectorAll("[data-accordion-item]")];

  const setItem = (item, open) => {
    if ((item.dataset.state === "open") === open) return;
    const trigger = item.querySelector("[data-accordion-trigger]");
    const content = item.querySelector("[data-accordion-content]");
    const state = open ? "open" : "closed";
    item.dataset.state = trigger.dataset.state = content.dataset.state = state;
    trigger.setAttribute("aria-expanded", String(open));
    if (open) content.hidden = false;
    content.style.setProperty("--accordion-height", `${content.scrollHeight}px`);
    if (!open) {
      const hide = () => {
        if (content.dataset.state === "closed") content.hidden = true;
      };
      content.addEventListener("animationend", hide, { once: true });
      setTimeout(hide, 260); // in case the animation doesn't run (e.g. reduced motion)
    }
  };

  items.forEach((item) =>
    item.querySelector("[data-accordion-trigger]").addEventListener("click", () => {
      const willOpen = item.dataset.state !== "open";
      items.forEach((other) => other !== item && setItem(other, false));
      setItem(item, willOpen);
    }),
  );
});

/* ---------------------------------------------------------------- enquiry form */

const toast = (message) => {
  const el = document.createElement("div");
  el.className = "hod-toast";
  el.setAttribute("role", "status");
  el.innerHTML =
    '<svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/></svg><span></span>';
  el.querySelector("span").textContent = message;
  document.body.append(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("is-visible")));
  setTimeout(() => {
    el.classList.remove("is-visible");
    setTimeout(() => el.remove(), 400);
  }, 4000);
};

const enquiry = document.querySelector("[data-enquiry]");
if (enquiry) {
  const form = enquiry.querySelector("[data-enquiry-form]");
  const success = enquiry.querySelector("[data-enquiry-success]");
  const prefInput = form.elements.namedItem("preferred_contact");
  const prefButtons = [...form.querySelectorAll("[data-pref]")];
  const PREF_ON = ["bg-[#F6F1E8]", "text-[#26231F]", "border-[#F6F1E8]"];
  const PREF_OFF = ["border-[#F6F1E8]/30", "hover:border-[#F6F1E8]"];

  const setPref = (value) => {
    prefInput.value = value;
    prefButtons.forEach((b) => {
      const on = b.dataset.pref === value;
      b.classList.remove(...(on ? PREF_OFF : PREF_ON));
      b.classList.add(...(on ? PREF_ON : PREF_OFF));
      b.setAttribute("aria-checked", String(on));
    });
  };
  prefButtons.forEach((b) => b.addEventListener("click", () => setPref(b.dataset.pref)));

  // No server on a static host: the enquiry is handed to WhatsApp, already written out.
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const text = [
      "Hello House of Dhri, I'd like to make a private enquiry.",
      "",
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      ...(d.phone ? [`Phone: ${d.phone}`] : []),
      `Interested in: ${d.interest}`,
      `Preferred contact: ${d.preferred_contact}`,
      "",
      d.message,
    ].join("\n");
    window.open(`https://wa.me/${enquiry.dataset.waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    form.reset();
    setPref("WhatsApp");
    form.classList.add("hidden");
    success.hidden = false;
    toast("Thank you — your enquiry has reached the house.");
  });

  enquiry.querySelector("[data-enquiry-reset]").addEventListener("click", () => {
    success.hidden = true;
    form.classList.remove("hidden");
  });
}
