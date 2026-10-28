// Small client layer: menu, drawing/ring comparison, diamond shapes, collection filters, enquiry form.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------------- menu (native <dialog>) */
const menu = document.getElementById("menu");
document.querySelector("[data-menu-open]")?.addEventListener("click", () => menu?.showModal());
document.querySelector("[data-menu-close]")?.addEventListener("click", () => menu?.close());
menu?.addEventListener("click", (e) => {
  if (e.target.closest("a")) menu.close();
});
window.matchMedia("(min-width: 1180px)").addEventListener("change", (e) => e.matches && menu?.open && menu.close());

/* ---------------------------------------------------------------- drawing / finished ring */
document.querySelectorAll("[data-reveal-stage]").forEach((stage) => {
  const range = stage.querySelector("[data-reveal-range]");
  let touched = false;
  const set = (pct) => {
    const v = Math.min(100, Math.max(0, pct));
    stage.style.setProperty("--pos", `${v}%`);
    range.value = String(Math.round(v));
  };
  const fromPointer = (e) => {
    const r = stage.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 100);
  };

  let dragging = false;
  stage.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse") e.preventDefault(); // no text selection or image dragging
    touched = true;
    dragging = true;
    stage.setPointerCapture(e.pointerId);
    fromPointer(e);
  });
  stage.addEventListener("pointermove", (e) => dragging && fromPointer(e));
  const stop = () => (dragging = false);
  stage.addEventListener("pointerup", stop);
  stage.addEventListener("pointercancel", stop);
  range.addEventListener("input", () => {
    touched = true;
    set(Number(range.value));
  });

  // One opening moment: the drawing sweeps across to reveal half of the finished ring.
  if (!reduceMotion) {
    set(100);
    const start = performance.now() + 500;
    const dur = 1600;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      if (touched) return;
      const t = Math.min(1, Math.max(0, (now - start) / dur));
      set(100 - 50 * ease(t));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
});

/* ---------------------------------------------------------------- diamond shapes */
document.querySelectorAll("[data-shapes]").forEach((root) => {
  const buttons = [...root.querySelectorAll("[data-shape]")];
  const notes = [...root.querySelectorAll("[data-shape-note]")];
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      buttons.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      notes.forEach((n) => (n.hidden = n.dataset.shapeNote !== b.dataset.shape));
    }),
  );
});

/* ---------------------------------------------------------------- collection filters */
document.querySelectorAll("[data-filter]").forEach((root) => {
  const chips = [...root.querySelectorAll("[data-filter-chip]")];
  const items = [...document.querySelectorAll(root.dataset.filter)];
  const status = root.querySelector("[data-filter-status]");
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      const type = chip.dataset.filterChip;
      chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      let shown = 0;
      items.forEach((el) => {
        const on = type === "all" || el.dataset.type === type;
        el.hidden = !on;
        if (on) shown += 1;
      });
      if (status) status.textContent = `Showing ${shown} ${shown === 1 ? "design" : "designs"}`;
    }),
  );
  // Links like /collections/modern/#rings open with that type already chosen.
  const preset = chips.find((c) => c.dataset.filterChip === location.hash.slice(1));
  if (preset) {
    preset.click();
    document.getElementById("designs")?.scrollIntoView();
  }
});

/* ---------------------------------------------------------------- enquiry form → WhatsApp */
const form = document.querySelector("[data-enquiry]");
if (form) {
  const steps = [...form.querySelectorAll("[data-step]")];
  const progress = form.querySelector("[data-progress]");
  const done = document.querySelector("[data-enquiry-done]");
  let current = 0;

  const show = (i, focus = true) => {
    current = i;
    steps.forEach((s, k) => (s.hidden = k !== i));
    if (progress) progress.textContent = `Step ${i + 1} of ${steps.length}`;
    if (focus) steps[i].querySelector("[data-step-title]")?.focus();
  };

  const valid = (i) => {
    const fields = [...steps[i].querySelectorAll("input, select, textarea")];
    for (const f of fields) {
      if (!f.checkValidity()) {
        f.reportValidity();
        return false;
      }
    }
    if (steps[i].hasAttribute("data-need-choice") && !steps[i].querySelector("input:checked")) {
      steps[i].querySelector("[data-choice-error]").hidden = false;
      return false;
    }
    return true;
  };

  form.querySelectorAll("[data-next]").forEach((b) => b.addEventListener("click", () => valid(current) && show(current + 1)));
  form.querySelectorAll("[data-back]").forEach((b) => b.addEventListener("click", () => show(current - 1)));
  form.addEventListener("change", (e) => {
    if (e.target.matches("input[type=checkbox], input[type=radio]")) {
      const err = steps[current].querySelector("[data-choice-error]");
      if (err) err.hidden = true;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!valid(current)) return;
    const data = new FormData(form);
    const field = (label, key) => (data.get(key) ? [`${label}: ${data.get(key)}`] : []);
    const lines = [
      "Hello House of Dhri, I would like to start a custom piece.",
      "",
      `Looking for: ${data.getAll("piece").join(", ")}`,
      ...field("Diamonds", "stone"),
      ...field("Metal", "metal"),
      ...field("Budget", "budget"),
      ...field("Needed by", "date"),
      "",
      `Name: ${data.get("name")}`,
      `Based in: ${data.get("place")}`,
      ...field("Email", "email"),
      ...(data.get("message") ? ["", data.get("message")] : []),
    ];
    const url = `https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    form.hidden = true;
    if (done) {
      done.hidden = false;
      done.querySelector("a")?.setAttribute("href", url);
      done.querySelector("h2")?.focus();
    }
  });

  document.querySelector("[data-enquiry-restart]")?.addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    done.hidden = true;
    show(0);
  });

  show(0, false);
}
