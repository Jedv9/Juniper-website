# Juniper Hair website

A fast, mobile-friendly static site with built-in online booking (Calendly or Google Calendar). No build step: just HTML, CSS and JavaScript.

## Edit your info

Everything (name, services, prices, hours, address, reviews, policies, photos, booking link) lives in **`config.js`**. Change the text there and the site updates.

## Turn on booking

**Calendly**
1. In Calendly, copy your scheduling link (e.g. `https://calendly.com/juniper-hair`).
2. In `config.js` set `provider: "calendly"` and paste it into `calendlyUrl`.

**Google Calendar (appointment schedules)**
1. In Google Calendar, create an *Appointment schedule*.
2. Open it → **Share** → **Website embed**, and copy the `src="..."` URL from the iframe code.
3. In `config.js` set `provider: "google"` and paste it into `googleUrl`.

Until a link is added, the booking section shows "Text to book" and "Email us" buttons instead.

## Add photos

Put images in an `images/` folder, then:
- stylist photo: `about.photo: "images/stylist.jpg"`
- portfolio: add entries to `gallery` (the "Work" section only appears once photos are listed).

## Preview & publish

Open `index.html` in a browser to preview. To publish, drop the folder on Netlify, Cloudflare Pages, or GitHub Pages and point `juniper-hair.com` at it.
