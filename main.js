// Builds the page from config.js. You shouldn't need to edit this file.
(function () {
  const S = window.SITE || {};
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, attrs = {}, text) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (text != null) n.textContent = text;
    return n;
  };
  const c = S.contact || {};
  const telHref = c.phone ? "tel:" + c.phone.replace(/[^\d+]/g, "") : "";

  // Plain text fields
  document.querySelectorAll("[data-site]").forEach((n) => { if (S[n.dataset.site]) n.textContent = S[n.dataset.site]; });
  document.querySelectorAll("[data-phone]").forEach((n) => {
    if (c.phone) { n.textContent = c.phone; n.href = telHref; } else n.remove();
  });
  $("#year").textContent = new Date().getFullYear();
  if (S.heroPhoto) $("#heroPhoto").src = S.heroPhoto;

  // Lightbox
  const lb = $("#lightbox");
  const openPhoto = (src, alt) => {
    const img = lb.querySelector("img"); img.src = src; img.alt = alt || "";
    if (lb.showModal) lb.showModal(); else window.open(src, "_blank");
  };
  lb.addEventListener("click", (e) => { if (e.target !== lb.querySelector("img")) lb.close(); });
  const photoButton = (p, lazy = true) => {
    const b = el("button", { type: "button", "aria-label": "View photo: " + (p.alt || "") });
    b.appendChild(el("img", { src: p.src, alt: p.alt || "", loading: lazy ? "lazy" : "eager" }));
    b.addEventListener("click", () => openPhoto(p.src, p.alt));
    return b;
  };

  // Portfolio
  const pf = S.portfolio || [];
  if (!pf.length) $("#portfolio").remove();
  pf.forEach((p) => $("#portfolioGrid").appendChild(photoButton(p)));

  // Story
  (S.story || []).forEach((t) => $("#storyText").appendChild(el("p", {}, t)));
  (S.studioPhotos || []).forEach((p) => $("#studioPhotos").appendChild(el("img", { src: p.src, alt: p.alt || "", loading: "lazy" })));

  // About
  const a = S.about || {};
  if (a.photo) $("#aboutPhoto").src = a.photo; else $(".about__photo").remove();
  $("#aboutIntro").textContent = a.intro || "";
  (a.paragraphs || []).forEach((t) => $("#aboutParas").appendChild(el("p", {}, t)));
  (a.facts || []).forEach(([k, v]) => { const d = el("div"); d.appendChild(el("dt", {}, k)); d.appendChild(el("dd", {}, v)); $("#aboutFacts").appendChild(d); });
  (a.loves || []).forEach((t) => $("#aboutLoves").appendChild(el("li", {}, t)));
  (a.lifePhotos || []).forEach((p) => $("#lifePhotos").appendChild(photoButton(p)));

  // Services
  const tabs = $("#serviceTabs"), panels = $("#servicePanels");
  (S.services || []).forEach((cat, i) => {
    const id = "svc-" + i;
    const tab = el("button", { class: "tab", role: "tab", id: id + "-tab", "aria-controls": id, "aria-selected": String(i === 0) }, cat.category);
    const panel = el("div", { class: "service-list", role: "tabpanel", id, "aria-labelledby": id + "-tab" });
    panel.hidden = i !== 0;
    cat.items.forEach(([name, detail, price, time]) => {
      const row = el("div", { class: "service" });
      row.appendChild(el("h3", {}, name));
      row.appendChild(el("span", { class: "service__price" }, price || ""));
      row.appendChild(el("p", { class: "service__detail" }, detail || ""));
      row.appendChild(el("span", { class: "service__time" }, time || ""));
      panel.appendChild(row);
    });
    tabs.appendChild(tab); panels.appendChild(panel);
    tab.addEventListener("click", () => {
      tabs.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", "false"));
      panels.querySelectorAll(".service-list").forEach((p) => (p.hidden = true));
      tab.setAttribute("aria-selected", "true"); panel.hidden = false;
    });
  });

  // Reviews
  const rv = S.reviews || [];
  if (!rv.length) $("#reviews").remove();
  rv.forEach((q) => {
    const f = el("figure", { class: "review reveal" });
    f.appendChild(el("div", { class: "review__stars", "aria-label": "5 stars" }, "★★★★★"));
    f.appendChild(el("blockquote", {}, "“" + q + "”"));
    $("#reviewList").appendChild(f);
  });

  // Booking
  const b = S.booking || {};
  const w = $("#bookingWidget");
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
  const simpleBox = (title, text, buttons) => {
    const box = el("div", { class: "booking__simple" });
    box.innerHTML = icon;
    box.appendChild(el("h3", {}, title));
    box.appendChild(el("p", {}, text));
    const act = el("div", { class: "booking__actions" });
    buttons.forEach((btn) => act.appendChild(btn));
    box.appendChild(act);
    w.appendChild(box);
  };
  const callBtn = () => el("a", { class: "btn btn--ghost", href: telHref }, "Call " + c.phone);

  if (b.provider === "calendly" && /^https:\/\/calendly\.com\//.test(b.calendlyUrl || "")) {
    const url = b.calendlyUrl + (b.calendlyUrl.includes("?") ? "&" : "?") + "hide_gdpr_banner=1&primary_color=4a5a3c";
    w.appendChild(el("div", { class: "calendly-inline-widget", "data-url": url }));
    document.body.appendChild(el("script", { src: "https://assets.calendly.com/assets/external/widget.js", async: "" }));
  } else if (b.provider === "google" && /^https:\/\/calendar\.google\.com\//.test(b.googleUrl || "")) {
    w.appendChild(el("iframe", { src: b.googleUrl, height: "720", title: "Book an appointment", loading: "lazy" }));
  } else if (b.glossgeniusUrl) {
    const btns = [el("a", { class: "btn btn--big", href: b.glossgeniusUrl, target: "_blank", rel: "noopener" }, "Book online")];
    if (c.phone) btns.push(callBtn());
    simpleBox("Ready when you are", "See open times, choose your service, and book in under a minute.", btns);
  } else {
    const btns = [];
    if (c.phone) btns.push(el("a", { class: "btn", href: "sms:" + c.phone.replace(/[^\d+]/g, "") }, "Text to book"), callBtn());
    simpleBox("Let's find you a time", "Call or text and I'll get you on the books.", btns);
  }
  if (c.phone) {
    const note = el("p", { class: "booking__note" }, "Questions first? Call or text ");
    note.appendChild(el("a", { href: telHref }, c.phone));
    note.appendChild(document.createTextNode("."));
    w.after(note);
  }

  // Visit
  const addr = $("#address");
  [c.address1, c.address2].filter(Boolean).forEach((line, i) => { if (i) addr.appendChild(el("br")); addr.appendChild(document.createTextNode(line)); });
  if (c.mapsUrl) $("#mapsLink").href = c.mapsUrl; else $("#mapsLink").remove();
  if (c.email) { $("#emailLink").textContent = c.email; $("#emailLink").href = "mailto:" + c.email; } else $("#emailLink").remove();
  const icons = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v7h4v-7h3l.5-4H14V8.6c0-.4.2-.6.6-.6z"/></svg>',
  };
  ["instagram", "facebook"].forEach((k) => {
    if (!c[k]) return;
    const l = el("a", { href: c[k], target: "_blank", rel: "noopener", "aria-label": k }); l.innerHTML = icons[k];
    $("#socials").appendChild(l);
  });
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  (S.hours || []).forEach(([d, t]) => {
    const tr = el("tr", d === today ? { class: "today" } : {});
    tr.appendChild(el("td", {}, d)); tr.appendChild(el("td", {}, t));
    $("#hoursTable").appendChild(tr);
  });
  (S.policies || []).forEach(([t, d]) => { $("#policyList").appendChild(el("dt", {}, t)); $("#policyList").appendChild(el("dd", {}, d)); });

  // Mobile menu
  const toggle = $(".nav__toggle"), menu = $("#menu");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open)); menu.classList.toggle("open", !open);
  });
  menu.querySelectorAll("a").forEach((l) => l.addEventListener("click", () => { toggle.setAttribute("aria-expanded", "false"); menu.classList.remove("open"); }));

  // Fade-in on scroll
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    const mb = $(".mobile-book");
    new IntersectionObserver(([e]) => mb.classList.toggle("hide", e.isIntersecting), { threshold: 0.05 }).observe($("#book"));
  } else document.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
})();
