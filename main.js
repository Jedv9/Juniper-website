(function () {
  const S = window.SITE || {};
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, attrs = {}, text) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (text != null) n.textContent = text;
    return n;
  };

  // ---- Simple text fields ----
  document.querySelectorAll("[data-site]").forEach((n) => {
    const v = S[n.dataset.site];
    if (v) n.textContent = v;
  });
  if (S.name) document.title = S.name + " | Hair Studio";
  $("#year").textContent = new Date().getFullYear();

  // ---- About ----
  const a = S.about || {};
  $("#aboutHeading").textContent = a.heading || "";
  $("#aboutName").textContent = a.name || "";
  $("#aboutTitle").textContent = a.title || "";
  (a.paragraphs || []).forEach((p) => $("#aboutParas").appendChild(el("p", {}, p)));
  if (a.photo) {
    const ph = $("#aboutPhoto");
    ph.innerHTML = "";
    ph.appendChild(el("img", { src: a.photo, alt: a.name || "Stylist", loading: "lazy" }));
  }

  // ---- Services (tabs) ----
  const tabs = $("#serviceTabs");
  const panels = $("#servicePanels");
  (S.services || []).forEach((cat, i) => {
    const id = "svc-" + i;
    const tab = el("button", { class: "tab", role: "tab", "aria-controls": id, "aria-selected": i === 0 ? "true" : "false", id: id + "-tab" }, cat.category);
    tabs.appendChild(tab);
    const panel = el("div", { class: "service-list", role: "tabpanel", id, "aria-labelledby": id + "-tab" });
    if (i !== 0) panel.hidden = true;
    cat.items.forEach((s) => {
      const row = el("div", { class: "service" });
      row.appendChild(el("h3", {}, s.name));
      row.appendChild(el("span", { class: "service__price" }, s.price || ""));
      row.appendChild(el("p", { class: "service__detail" }, s.detail || ""));
      row.appendChild(el("span", { class: "service__time" }, s.time || ""));
      panel.appendChild(row);
    });
    panels.appendChild(panel);
    tab.addEventListener("click", () => {
      tabs.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", "false"));
      panels.querySelectorAll(".service-list").forEach((p) => (p.hidden = true));
      tab.setAttribute("aria-selected", "true");
      panel.hidden = false;
    });
  });

  // ---- Gallery ----
  const gal = S.gallery || [];
  if (!gal.length) {
    document.querySelectorAll('[data-needs="gallery"]').forEach((n) => n.remove());
  } else {
    gal.forEach((g) => {
      const f = el("figure", { class: "reveal" });
      f.appendChild(el("img", { src: g.src, alt: g.alt || "", loading: "lazy" }));
      $("#galleryGrid").appendChild(f);
    });
  }

  // ---- Reviews ----
  const reviews = S.reviews || [];
  if (!reviews.length) $("#reviews").remove();
  reviews.forEach((r) => {
    const f = el("figure", { class: "review reveal" });
    f.appendChild(el("div", { class: "review__stars", "aria-label": "5 stars" }, "★★★★★"));
    f.appendChild(el("blockquote", {}, "“" + r.quote + "”"));
    f.appendChild(el("figcaption", {}, r.name));
    $("#reviewList").appendChild(f);
  });

  // ---- Contact / hours / policies ----
  const c = S.contact || {};
  const addr = $("#address");
  [c.addressLine1, c.addressLine2].filter(Boolean).forEach((line, i) => {
    if (i) addr.appendChild(el("br"));
    addr.appendChild(document.createTextNode(line));
  });
  if (c.mapsUrl) $("#mapsLink").href = c.mapsUrl; else $("#mapsLink").remove();
  if (c.phone) { $("#phoneLink").textContent = c.phone; $("#phoneLink").href = "tel:" + c.phone.replace(/[^\d+]/g, ""); } else $("#phoneLink").remove();
  if (c.email) { $("#emailLink").textContent = c.email; $("#emailLink").href = "mailto:" + c.email; } else $("#emailLink").remove();

  const icons = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v7h4v-7h3l.5-4H14V8.6c0-.4.2-.6.6-.6z"/></svg>',
  };
  ["instagram", "facebook"].forEach((k) => {
    if (!c[k]) return;
    const link = el("a", { href: c[k], target: "_blank", rel: "noopener", "aria-label": k });
    link.innerHTML = icons[k];
    $("#socials").appendChild(link);
  });

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  (S.hours || []).forEach(([day, time]) => {
    const tr = el("tr", day === today ? { class: "today" } : {});
    tr.appendChild(el("td", {}, day));
    tr.appendChild(el("td", {}, time));
    $("#hoursTable").appendChild(tr);
  });

  (S.policies || []).forEach(([t, d]) => {
    $("#policyList").appendChild(el("dt", {}, t));
    $("#policyList").appendChild(el("dd", {}, d));
  });

  // ---- Booking widget ----
  const b = S.booking || {};
  const widget = $("#bookingWidget");
  const isCal = b.provider === "calendly" && /^https:\/\/calendly\.com\//.test(b.calendlyUrl || "");
  const isGoogle = b.provider === "google" && /^https:\/\/calendar\.google\.com\//.test(b.googleUrl || "");

  if (isCal) {
    const url = b.calendlyUrl + (b.calendlyUrl.includes("?") ? "&" : "?") +
      "hide_gdpr_banner=1&background_color=ffffff&text_color=1f2420&primary_color=24382c";
    const div = el("div", { class: "calendly-inline-widget", "data-url": url });
    widget.appendChild(div);
    const s = el("script", { src: "https://assets.calendly.com/assets/external/widget.js", async: "" });
    document.body.appendChild(s);
  } else if (isGoogle) {
    widget.appendChild(el("iframe", { src: b.googleUrl, height: "720", title: "Book an appointment", loading: "lazy" }));
  } else {
    // Friendly fallback until a booking link is added in config.js
    const box = el("div", { class: "booking__empty" });
    box.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
    box.appendChild(el("h3", {}, "Online booking opens soon"));
    box.appendChild(el("p", {}, "In the meantime, call, text, or email and we'll find a time that works for you."));
    const actions = el("div", { class: "booking__actions" });
    if (c.phone) actions.appendChild(el("a", { class: "btn", href: "sms:" + c.phone.replace(/[^\d+]/g, "") }, "Text to book"));
    if (c.email) actions.appendChild(el("a", { class: "btn btn--ghost", href: "mailto:" + c.email + "?subject=Appointment request" }, "Email us"));
    box.appendChild(actions);
    widget.appendChild(box);
  }
  if (c.phone) {
    const note = el("p", { class: "booking__note" }, "Questions before booking? Call or text ");
    const tel = el("a", { href: "tel:" + c.phone.replace(/[^\d+]/g, "") }, c.phone);
    note.appendChild(tel);
    note.appendChild(document.createTextNode("."));
    widget.after(note);
  }

  // ---- Nav: mobile menu & scroll state ----
  const toggle = $(".nav__toggle");
  const menu = $("#menu");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("open", !open);
  });
  menu.querySelectorAll("a").forEach((l) => l.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
  }));
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Reveal on scroll ----
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }), { threshold: 0.12 })
    : null;
  document.querySelectorAll(".reveal").forEach((n) => (io ? io.observe(n) : n.classList.add("in")));

  // Hide the sticky mobile "Book" button while the booking section is on screen
  const mobileBtn = $(".mobile-book");
  const bookSec = $("#book");
  if ("IntersectionObserver" in window && mobileBtn && bookSec) {
    new IntersectionObserver(([e]) => mobileBtn.classList.toggle("hide", e.isIntersecting), { threshold: 0.05 }).observe(bookSec);
  }
})();
